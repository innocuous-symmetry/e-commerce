const { Client } = require('pg');
require('dotenv').config({ path: "../.env" });

(async () => {
    const client = new Client({ connectionString: process.env.CONNECTION });
    await client.connect().then(console.log("Connection successful."));

    const createUserTable = `
        CREATE TABLE IF NOT EXISTS users (
            id                  INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
            username            VARCHAR         NOT NULL,
            password            VARCHAR         NOT NULL,
            firstname           VARCHAR         NOT NULL,
            lastname            VARCHAR         NOT NULL
        );
    `;

    const createCartTable = `
        CREATE TABLE IF NOT EXISTS cart (
            id                  INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
            appUserId           INT             REFERENCES users(id),
            subtotal            NUMERIC
        );
    `;

    const createOrderTable = `
        CREATE TABLE IF NOT EXISTS orders (
            id                  INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
            cartId              INT             REFERENCES cart(id),
            delivered           BOOLEAN,
            processed           BOOLEAN,
            shipped             BOOLEAN
        );
    `;

    const createCategoryTable = `
        CREATE TABLE IF NOT EXISTS category (
            id                  INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
            name                VARCHAR         NOT NULL,
            description         VARCHAR         NOT NULL
        );
    `;

    const createProductTable = `
        CREATE TABLE IF NOT EXISTS product (
            id                  INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
            name                VARCHAR         NOT NULL,
            description         VARCHAR         NOT NULL,
            category            VARCHAR         NOT NULL,
            categoryId          INT             REFERENCES category(id),
            price               NUMERIC         NOT NULL
        );
    `;

    const createProductsCarts = `
        CREATE TABLE IF NOT EXISTS products_carts (
            productId           INT             REFERENCES product(id),
            cartId              INT             REFERENCES cart(id)
        );
    `;

    const allQueries = [createUserTable, createCartTable, createCategoryTable, createProductTable, createOrderTable, createProductsCarts];
    let status;

    try {
        for (let q of allQueries) {
            await client.query(q);
        }
        await client.end();
        status = "Database setup successful!";
    } catch(e) {
        status = e;
    }

    console.log(status);
})();