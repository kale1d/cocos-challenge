# Cocos Challenge

This project is a React Native application built with Expo, designed to manage and visualize financial instruments, portfolios, and orders. The app uses React Query for data fetching and caching, and it follows a dark theme for a modern look.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Technical Decisions](#technical-decisions)


## Features

- **Instruments**: View a list of financial instruments with their ticker, name, last price, and return.
- **Portfolio**: View your portfolio with details like ticker, quantity, market value, gains, and returns.
- **Search**: Search for financial instruments by ticker.
- **Orders**: View your orders with different types and statuses.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/cocos-challenge.git
   cd cocos-challenge ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the Expo development server:
   ```sh
   npx expo start -c //-c cleans cache
   ```

## Technical Decisions
React Query: Used for data fetching and caching to handle server state.
Context API: Used for global state management.
Expo: Chosen for its ease of use and powerful development tools.
TypeScript: Ensures type safety and better developer experience.
Modular Structure: The project is organized into modules for better maintainability and scalability.
Dark Theme: Consistent dark theme for a modern look and feel.

##Example app in Android

https://github.com/user-attachments/assets/718586a0-174b-45d1-bacb-cd85e1d186c9

##Example app in iOS

https://github.com/user-attachments/assets/fbf1c6c8-b00f-4f9a-92b5-3f7402bbae33



