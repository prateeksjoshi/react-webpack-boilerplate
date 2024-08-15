# react-webpack-boilerplate

# React Webpack Boilerplate

A minimal boilerplate for creating a React application from scratch using Webpack, without relying on Create React App (CRA). This project sets up a modern React environment with support for TypeScript, CSS/SCSS, Babel, and more.

## Features

- **React 18**: Modern React setup with JSX/TSX support.
- **Webpack 5**: Configured for development and production builds.
- **Babel**: ES6+ syntax support and JSX transpilation.
- **TypeScript**: Optional type safety for JavaScript code.
- **CSS & SCSS**: Style your components with CSS or SCSS.
- **Image & Asset Handling**: Support for loading images and other assets.
- **Hot Module Replacement**: Faster development with hot reloading.
- **Environment Variables**: Configured support for `.env` files.
- **HTML Webpack Plugin**: Auto-generates HTML file for your app.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (>= 14.x)
- npm or yarn

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/react-webpack-boilerplate.git
   cd react-webpack-boilerplate
 
2. Install the dependencies:

    npm install
    # or
    yarn install

### Available Scripts

    npm start: Starts the development server with hot module replacement.
    npm run build: Builds the app for production into the dist folder.
    npm run clean: Removes the dist folder.

### Folder Structure

     react-webpack-boilerplate/
     │
     ├── /src
     │   ├── /assets             # Static assets (images, fonts, etc.)
     │   ├── /components         # React components
     │   ├── /styles             # Global and component-specific styles
     │   ├── App.tsx             # Main App component
     │   ├── index.tsx           # Entry point for React
     │
     ├── /dist                   # Production build output
     │
     ├── .babelrc                # Babel configuration
     ├── .gitignore              # Git ignore file
     ├── package.json            # npm or Yarn dependencies and scripts
     ├── tsconfig.json           # TypeScript configuration
     ├── webpack.config.js       # Webpack configuration for development environment
     ├── webpack.prod.config.js  # Webpack configuration for production environment
     ├── README.md               # Project documentation

### Webpack Configuration
  This project uses a custom Webpack configuration with two modes: development and production. Key features include:

  - **Development Mode**: Enables source maps, hot module replacement, and easier debugging.
  - **Production Mode**: Optimizes the build by minifying files and splitting the bundle 

### Customization
  You can customize the configuration by modifying the following files:

      webpack.config.js: Modify the Webpack configuration for development environments.
      webpack.prod.config.js: Modify the Webpack configuration for production environments.
      babel.config.js: Adjust Babel presets and plugins.
      tsconfig.json: Customize TypeScript settings.
