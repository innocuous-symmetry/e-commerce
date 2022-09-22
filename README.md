# Mikayla's Spice Market

Thanks for checking out *Express Spices*, my from-the-ground-up e-commerce solution for buying spices! The product catalog for this store is modeled after [World Spice Merchants](https://www.worldspice.com/), sorted into categories by geographical regions.

Payment information is supported through the Stripe API, with session support and user management with Express Sessions. The backend features a full REST API built in Express, connects to a PostgreSQL database, and is documented with Swagger. The app features a frontend built with React, TypeScript, and Sass.

## Installing and Running the Development Build Locally
1. Clone the project repository from the root level.
2. Node modules are hosted both at root directory level and within the client directory.
3. At the root directory level, run ``npm install`` to install backend dependencies.
4. Change into the ``/client`` directory and run ``npm install`` to install frontend dependencies.
5. Still within ``/client``, run ``npm run dev`` to start the Vite development server.
6. In another terminal window at the root directory level, run ``npm start`` to start the localhost server.
7. It should indicate that the server is listening on its designated port, and log each database transaction to the console.