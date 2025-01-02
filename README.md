# TypeNodeApp

TypeNodeApp is a Node.js application built with TypeScript and Express. This project demonstrates how to set up a basic REST API with TypeScript, including routing, middleware, and unit testing.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [License](#license)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/typenodeapp.git
   cd typenodeapp
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

## Usage

1. Build the project:

   ```sh
   npm run build
   ```

2. Start the server:

   ```sh
   npm start
   ```

   The server will start on port 3000 by default. You can change the port by setting the

PORT

environment variable.

## Scripts

- `npm start`: Start the server.
- `npm run build`: Compile TypeScript to JavaScript.
- `npm run dev`: Start the server in development mode with hot reloading.
- `npm test`: Run all tests.
- `npm run test:ts`: Run all TypeScript tests.

## Project Structure

```
.
├── src
│   ├── dtos
│   │   └── CreateUser.dto.ts
│   ├── handlers
│   │   ├── users.ts
│   ├── routes
│   │   └── users.ts
│   ├── types
│   │   ├── query-param.ts
│   │   └── response.ts
│   ├── index.ts
│   └── tests
│       └── handlers
│           └── users.test.ts
├── .gitignore
├── jest.config.js
├── package.json
├── tsconfig.json
└── README.md
```

## API Endpoints

### GET /api/users

Retrieve a list of users.

- **URL**: `/api/users`
- **Method**: `GET`
- **Response**:
  - `200 OK`: Successfully fetched users.
  - `500 Internal Server Error`: An error occurred while fetching users.

### POST /api/users

Create a new user.

- **URL**: `/api/users`
- **Method**: `POST`
- **Request Body**:
  - `id`: number
  - `email`: string
  - `username`: string
- **Response**:
  - `201 Created`: Successfully created user.
  -

400 Bad Request

: Invalid request data.

- `500 Internal Server Error`: An error occurred while creating the user.

## Testing

This project uses Jest and Supertest for unit testing.

1. Run all tests:

   ```sh
   npm test
   ```

2. Run all TypeScript tests:

   ```sh
   npm run test:ts
   ```

## License

This project is licensed under the MIT License. See the LICENSE file for details.
