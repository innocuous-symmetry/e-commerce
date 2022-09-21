# Mikayla's Little E-Commerce Store
A sample E-Commerce app built for a Codecademy portfolio project!

This project will be fully featured, with payment processing through Stripe, session support with Express, and a full REST API build in Express/Postgres.
The front end is built in React using TypeScript and Sass, and bootstrapped with Vite.

The API will be fully documented using Swagger, and available at the following link: [link]

## Project Structure
The project directory is organized as follows:
- ``client``: holds the front end details of the project
- ``db``: this hosts database logic for Node-Postgres interactions
- ``routes``: this hosts the Express router which powers the project's REST API
- ``server.js``: the backend "entryway" for the application, which hosts the server and the integration for the API.

## Installing and Running the Development Build Locally
1. Clone the project repository from the root level.
2. Node modules are hosted both at root directory level and within the client directory.
3. At the root directory level, run ``npm install`` to install backend dependencies.
4. Change into the ``/client`` directory and run ``npm install`` to install frontend dependencies.
5. Still within ``/client``, run ``npm run dev`` to start the Vite development server.
6. In another terminal window at the root directory level, run ``npm start`` to start the localhost server.
7. It should indicate that the server is listening on its designated port, and log each database transaction to the console.