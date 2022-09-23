const { Client } = require('pg');
require('dotenv').config({ path: "../.env" });

async function main() {
    const client = new Client({ connectionString: process.env.CONNECTION });
    await client.connect().then(console.log("Connection successful."));

    // user
    const createUserTable = `
        CREATE TABLE IF NOT EXISTS users (
            id                  INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
            email               VARCHAR         NOT NULL,
            password            VARCHAR         NOT NULL,
            firstname           VARCHAR         NOT NULL,
            lastname            VARCHAR         NOT NULL
        );
    `;

    // cart
    const createCartTable = `
        CREATE TABLE IF NOT EXISTS cart (
            id                  INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
            appUserId           INT             REFERENCES users(id)
        );
    `;

    // order
    const createOrderTable = `
        CREATE TABLE IF NOT EXISTS orders (
            id                  INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
            userId              INT             REFERENCES users(id),
            total               NUMERIC         NOT NULL,
            delivered           BOOLEAN,
            processed           BOOLEAN,
            shipped             BOOLEAN
        );
    `;

    // region
    const createRegionTable = `
        CREATE TABLE IF NOT EXISTS region (
            id                  INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
            name                VARCHAR         NOT NULL
        );
    `;

    // category
    const createCategoryTable = `
        CREATE TABLE IF NOT EXISTS category (
            id                  INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
            name                VARCHAR         NOT NULL,
            description         VARCHAR
        );
    `;

    // product
    const createProductTable = `
        CREATE TABLE IF NOT EXISTS product (
            id                  INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
            name                VARCHAR         NOT NULL,
            description         VARCHAR,
            categoryId          INT             REFERENCES category(id),
            regionId            INT             REFERENCES region(id),
            price               NUMERIC
        );
    `;

    // products_carts
    const createProductsCarts = `
        CREATE TABLE IF NOT EXISTS products_carts (
            productId           INT             REFERENCES product(id),
            cartId              INT             REFERENCES cart(id)
        );
    `;

    // products_orders
    const createProductsOrders = `
        CREATE TABLE IF NOT EXISTS products_orders (
            id                  INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
            quantity            INT             NOT NULL,
            productId           INT             REFERENCES product(id),
            orderId             INT             REFERENCES orders(id)
        );
    `;

    const allQueries = [createUserTable, createCartTable, createCategoryTable, createRegionTable, createProductTable, createOrderTable, createProductsCarts, createProductsOrders];
    let status;

    try {
        await client.query("DROP SCHEMA public CASCADE; CREATE SCHEMA public");
        
        for (let q of allQueries) {
            await client.query(q);
        }

        await client.end();
        status = "Database setup successful!";
    } catch(e) {
        status = e;
    } finally {
        if (status !== "Database setup successful!") {
            throw new Error(status);
        }
    }

    console.log(status);
}

main();