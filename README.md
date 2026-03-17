# Node Express Project

A simple Node.js Express API project with basic routing and middleware setup.

## Project Structure

```
src/
├── index.js              # Main application file
├── controllers/          # Request handlers
│   └── helloController.js
└── routes/               # API routes
    └── index.js
```

## Installation

```bash
npm install
```

## Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with nodemon (auto-reload)

## API Endpoints

- `GET /` - Welcome message
- `GET /api/hello` - Hello endpoint
- `GET /api/user/:id` - Get user by ID

## Features

- Express.js framework
- CORS support
- JSON body parser
- Error handling middleware
- ES6 module syntax
- Nodemon for development (auto-reload)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to:
   - `http://localhost:3000` - Welcome page
   - `http://localhost:3000/api/hello` - Hello endpoint
   - `http://localhost:3000/api/user/1` - User endpoint

## License

ISC
