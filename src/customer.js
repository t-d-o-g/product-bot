const mysql = require('mysql2');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'product_db'
});

connection.connect(err => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId} \n`);
    displayProducts();
});

displayProducts = () => {
    connection.query(`SELECT * FROM products`, (err, res) => {
        if (err) throw err;
        for (let i = 0; i < res.length; i++) {
            console.log(`id ${res[i].item_id}: ${res[i].product_name} $${res[i].price} (In Stock: ${res[i].stock_quantity})`);
        }
        purchasePrompt();
    });
}

purchasePrompt = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID of the product you would like to buy?'
        },
        {
            type: 'input',
            name: 'quantity',
            message: 'How many units would you like to buy?'
        }
    ]).then(purchase => {
        completePurchase(purchase);
    });
}

/*
finishedPrompt = () => {
    inquirer.prompt([
        {
            type: 'list',
            choices: ['yes', 'no'],
            name: 'done',
            message: 'Would you like to make another purchase?'
        }
    ]).then(done => {
        console.log(done);
        return (done);
    });
}
*/

completePurchase = (purchase) => {
    connection.query(`SELECT stock_quantity FROM products WHERE item_id = ${purchase.id}`, (err, res) => {
        if (err) throw err;
        let totalItems = res[0].stock_quantity;
        if (totalItems >= purchase.quantity) {
            let updatedQuantity = totalItems - purchase.quantity;
            connection.query(`SELECT price FROM products WHERE item_id = ${purchase.id}`, (err, res) => {
                let cost = res[0].price * purchase.quantity;
                console.log(`Price: $${cost}`);
            });
            connection.query(`UPDATE products SET stock_quantity = ${updatedQuantity} WHERE item_id = ${purchase.id}`, (err, res) => {
                if (err) throw err;
            });
        } else {
            console.log('Insufficient Quantity');
        }
        connection.end();
    });
}