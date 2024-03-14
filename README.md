# E-Commerce Project with DDD, Clean Architecture, and CQRS

This repository contains a practical e-commerce project that demonstrates how to build a robust system while adhering to best practices. The project is built using Node.js with Express and npm.

## Features

- Domain-Driven Design (DDD): The project follows DDD principles to create a clear separation of concerns and maintainable code.
- Clean Architecture: The architecture emphasizes modularity, testability, and scalability.
- CQRS (Command Query Responsibility Segregation): The system separates read and write operations, improving performance and scalability.

## Getting Started

1. Clone the Repository:
   `git clone https://github.com/XaviTechEc/ecommerce-project.git`

2. Install Dependencies:

   ```
   cd e-commerce-project
   npm install
   ```

3. Configure Environment Variables: Create a `.env` file with the necessary configuration (e.g., database connection details, API keys).

4. Run the Application:

   ```
   npm start
   ```

## Project Structure

- src/
  <!-- controllers/: Contains route handlers and business logic.
  models/: Defines data models using DDD concepts.
  services/: Implements application services.
  middlewares/: Custom middleware functions.
  routes/: Defines API routes.
  config/: Configuration files.
  utils/: Utility functions. -->
- tests/: Unit and integration tests.

## Contributing

Contributions are welcome! Please follow the contribution guidelines.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
