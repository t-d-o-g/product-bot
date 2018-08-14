DROP DATABASE IF EXISTS product_db;

CREATE DATABASE product_db;

USE product_db;

CREATE TABLE products (
	item_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(20) NOT NULL,
    department_name VARCHAR(20) NOT NULL,
    price DECIMAL(13, 2) NOT NULL,
    stock_quantity INTEGER NOT NULL
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('product1', 'department1', 1.00, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('product2', 'department2', 2.00, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('product3', 'department3', 3.00, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('product4', 'department4', 4.00, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('product5', 'department5', 5.00, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('product6', 'department6', 6.00, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('product7', 'department7', 7.00, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('product8', 'department8', 8.00, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('product9', 'department9', 9.00, 9);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('product10', 'department10', 10.00, 10);