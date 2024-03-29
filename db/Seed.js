const { Client } = require('pg');
const readCSV = require('./util/readCSV');
require('dotenv').config({ path: "../.env" });

async function main() {
    console.log("Beginning database setup.");

    const client = new Client({ connectionString: process.env.CONNECTION });
    console.log(process.env.CONNECTION);
    await client.connect().then(console.log("Now connected to postgres"));

    // user
    const createUserTable = `
        CREATE TABLE IF NOT EXISTS users (
            id                  INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
            email               VARCHAR         NOT NULL,
            supabaseUser        JSON            NOT NULL,
            firstname           VARCHAR,
            lastname            VARCHAR,
            isadmin             BOOLEAN         DEFAULT FALSE
        );
    `;

    // cart
    const createCartTable = `
        CREATE TABLE IF NOT EXISTS cart (
            id                  INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
            userid              INT             REFERENCES users(id)
        );
    `;

    // order
    const createOrderTable = `
        CREATE TABLE IF NOT EXISTS orders (
            id                  INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
            userId              INT             REFERENCES users(id),
            total               NUMERIC,
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
            price               MONEY,
            unit                VARCHAR,
            inventory           INT
        );
    `;

    // products_carts
    const createProductsCarts = `
        CREATE TABLE IF NOT EXISTS products_carts (
            productId           INT             REFERENCES product(id),
            cartId              INT             REFERENCES cart(id),
            quantity            INT
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

    const allQueries = [
        createUserTable, createCartTable, createCategoryTable, createRegionTable,
        createProductTable, /* populateProductTable, */ createOrderTable,
        createProductsCarts, createProductsOrders
    ];

    // const categoryInsert = readCSV('./util/data/categories.csv', 'category');
    // const regionInsert = readCSV('./util/data/regions.csv', 'region');
    // const productInsert = readCSV('./util/data/products.csv', 'product');

    // const allInsertions = [
    //     categoryInsert, regionInsert, productInsert
    // ]

    try {
        await client.query("DROP SCHEMA public CASCADE; CREATE SCHEMA public");
        
        for (let q of allQueries) {
            await client.query(q);
        }

        // for (let section of allInsertions) {
        //     for (let s of section) {
        //         await client.query(s);
        //     }
        // }

        await client.end();
    } catch(e) {
        throw new Error(e);
    }

    console.log("Database initialization successful");
}

main();