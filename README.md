# Microfrontend App

This project demonstrates a microfrontend architecture using Webpack Module Federation and TypeScript.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Overview

Microfrontend App is a collection of independent frontend modules that are integrated into a shell application using Webpack Module Federation. Each microfrontend can be developed, built, and deployed independently, allowing for scalability and maintainability.

## Features

- **Webpack Module Federation:** Integrates multiple microfrontends into a single shell application.
- **TypeScript:** Provides type safety and enhances developer productivity.
- **React:** Frontend library for building user interfaces.
- **Redux and Redux Saga:** State management and side effects handling.
- **ESLint and Prettier:** Code linting and formatting for consistent code style.
- **Bootstrap and Custom Styling:** Responsive design and consistent styling.

## Getting Started

### Installation

Clone the repository:

```bash
git clone <repository-url>
cd microfrontend-app
```

### Running the App

1. **Install Dependencies**:
   Ensure you have Node.js (>= 18.12.0) and npm installed. Then, install the required dependencies:

   ```bash
   nvm use
   npm install
   ```

2. **Start the Development Server**:
   Run the following command to start the development server:

   ```bash
   npm run start
   ```

   The application will be available at `http://localhost:3000`.

### Building the App

To create a production build, run:

```bash
npm run build
```

The output will be in the `dist` directory.

### Folder Structure

```plaintext
microfrontend-app/
├── dist/                # Compiled output
├── node_modules/        # Node.js modules
├── public/              # Static assets
├── src/                 # Source files
│   ├── components/      # React components
│   ├── store/           # Store configuration
│   ├── App.tsx          # Main app component
│   ├── bootstrap.tsx    # App bootstrap file
│   └── index.tsx        # Entry point
├── .eslintrc.js         # ESLint configuration
├── .prettierrc          # Prettier configuration
├── package.json         # NPM configuration
├── tsconfig.json        # TypeScript configuration
├── webpack.config.js    # Webpack configuration
└── README.md            # Project documentation
```

### Technologies Used

- **Webpack**: Module bundler and build tool
- **React**: JavaScript library for building user interfaces
- **TypeScript**: Superset of JavaScript with type definitions
- **Redux**: State management library
- **Redux-Saga**: Middleware for handling side effects
- **ESLint**: Tool for identifying and fixing linting issues
- **Prettier**: Code formatter
- **Bootstrap**: CSS framework for responsive design

### Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

