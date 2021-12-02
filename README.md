## E-Commerce - development notes

-make sure to have the .env file in the project root directory
properly configured

- to start both backend and frontend servers from
  root directory in terminal `npm run dev` will run the concurrently
  script

### API ENDPOINTS

    // All products
    http://localhost:5000/api/products

    // Single product (with parametric values)
    http://localhost:5000/api/products/{id}

    // User login
    http://localhost:5000/api/users/login

    // User register
    http://localhost:5000/api/users/register
