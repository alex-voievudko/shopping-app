# Immfly Mobile Store Application

Welcome to the Immfly Mobile Store application, a comprehensive solution designed to streamline the shopping experience within the Immfly ecosystem.

## Key Features

- **Product Catalog**: Provides an extensive array of products, enabling users to browse and select items with ease.
- **Shopping Cart Functionality**: Facilitates efficient management of selected items, enhancing the user's shopping experience.
- **Discount Application**: Incorporates a feature to apply available discounts directly from a dropdown menu, simplifying the process of availing discounts.
- **Real-time Currency Conversion**: Offers real-time conversion rates from EUR to USD and GBP, eliminating the need for manual currency conversion.
- **Currency Selection**: Allows users to shop in their preferred currency. Users can easily switch currencies by tapping on the conversion rates text.
- **Checkout Process**: Enables users to review their cart, modify item quantities or remove items as needed, and view the total purchase amount, all within a single, user-friendly interface.
- **Seat Selection**: Integrates a feature for users to choose their seat directly within the app, further enhancing the convenience of the shopping experience.

The Immfly Mobile Store application is designed to provide a seamless, user-friendly shopping experience, making it an ideal choice for modern, on-the-go consumers.

## Demo

| iOS                                                                                                                        | Android                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://github.com/alex-voievudko/shopping-app/blob/main/screenshots/demo-ios.gif" alt="iOS Demo" height="500"/> | <img src="https://github.com/alex-voievudko/shopping-app/blob/main/screenshots/demo-android.gif" alt="Android Demo" height="500"/> |

## Technologies Used

| Category                   | Technology                                       | Description                                                                                                                                  |
| -------------------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **Monorepo Tools**         | [NX](https://nx.dev/)                            | Extensible dev tools for monorepos, enabling code sharing and reuse, improving consistency, and speeding up development.                     |
| **Frontend Framework**     | [React Native](https://reactnative.dev/)         | A popular framework for building performant mobile apps using JavaScript and React, providing a native-like user experience.                 |
| **Programming Language**   | [TypeScript](https://www.typescriptlang.org/)    | A statically typed superset of JavaScript that enhances developer productivity by catching errors early and providing better tooling.        |
| **State Management**       | [Zustand](https://zustand-demo.pmnd.rs/)         | A lightweight state management solution that reduces boilerplate code and simplifies global state in React apps.                             |
| **Data Fetching**          | [React Query](https://react-query.tanstack.com/) | A robust library for fetching, caching, synchronizing, and updating server state, reducing the complexity of state management in React apps. |
| **Routing and Navigation** | [React Navigation](https://reactnavigation.org/) | A comprehensive solution for navigation in React Native apps, with support for modals, drawers, and tabs.                                    |
| **Backend Framework**      | [Express.js](https://expressjs.com/)             | A fast, unopinionated, minimalist web framework for Node.js, known for its simplicity and extensibility.                                     |
| **HTTP Client**            | [Axios](https://axios-http.com/)                 | A promise-based HTTP client with an easy-to-use API, supporting both browser and server-side requests.                                       |
| **Database Toolkit**       | [Prisma](https://www.prisma.io/)                 | A modern database toolkit that provides a type-safe and auto-completing database query builder for TypeScript and Node.js.                   |
| **Containerization Tool**  | [Docker](https://www.docker.com/)                | A platform that enables developers to automate the deployment, scaling, and management of applications within containers.                    |

## Source Code Structure

| Path                       | Description                                              |
| -------------------------- | -------------------------------------------------------- |
| **apps**                   | Contains the expo and backend applications.              |
| **apps/immfly-app**        | Contains the expo application.                           |
| **apps/immfly-api**        | Contains the backend application.                        |
| **apps/immfly-api/prisma** | Contains the database schema, migrations, and seed data. |

## Local Development

To launch the project locally, follow these steps:

1. Copy the repository to your local machine:

   ```bash
   git clone https://github.com/alex-voievudko/shopping-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd shopping-app
   ```

3. Install the dependencies:

   ```bash
   yarn install
   ```

4. Copy the `.env.example` file and rename it to `.env`:

   ```bash
   cp .env.example .env
   ```

5. Run the command to prepare the database:

   ```bash
   yarn db:prestart
   ```

   It will run the following commands:

   - `docker-compose up -d` - starts the database container
   - `yarn db:migrate` - runs the database migrations
   - `yarn db:seed` - seeds the database with initial data

6. Start the backend server:

   ```bash
   yarn dev:server
   ```

7. Start the expo server:

   ```bash
   yarn dev:expo
   ```

   Alternatively, you can run the following command to start both the backend server and the expo server:

   ```bash
   yarn dev:all
   ```

8. Open the Expo Go app on your mobile device and scan the QR code displayed in the terminal to launch the app.

## Testing

To run the unit tests, run the following command:

```bash
yarn test:expo
```

## Features added beyond the initial design

- **Currency selection modal**: When the user taps on the conversion rates text, a modal is displayed to allow the user to select their preferred currency. I've added this instead of the proposed dropdown to make it more visible and convenient for the user to switch currencies.
- **Out of stock modal**: When a user tries to add a product to the cart and the product is out of stock, a modal is displayed to inform the user that the product is out of stock.
- **Out of stock product opacity**: When a product is out of stock, its opacity is decreased to indicate that the product is unavailable.
- **Remove product from cart**: When the user taps on the remove icon on the product card, the product is removed from the cart. In the initial design, it was not very clear to me how the user can remove a product from the cart after the initial selection.
- **Custom animations**: I've added some custom animations to indicators and modals to make the app more interactive and user-friendly.

## Future considerations and improvements

- **Use TRPC instead of REST**: I've used REST for the backend API because it was one of the requirements. However, I would consider using TRPC in the future (if the server were not fully implemented) because it's a more modern approach that provides a better developer experience and improved performance.
- **Skeleton loading**: Implement skeleton loading to improve the user experience while data is being fetched.
- **Add more visibility to the currency selection**: Add some styles to the currency selection to make it more visible to the user. Currently, the user has to tap on the conversion rates text to switch currencies, which is not very intuitive.
- **Add Success/Error modal on checkout**: Implement a modal to display a success/error message when the user completes the checkout process.
- **Better animate the product list on the checkout screen**: Animate the product list on the checkout screen. Currently, when you swipe left to remove the product from the cart, the product list is not animated. It would be nice to animate the product list to make the user experience smoother.
- **Save currency selection**: Persist the user's currency selection in local storage, so that the user's preferred currency is automatically selected when they return to the app.
- **Save seat selection**: Persist the user's seat selection in local storage, so that the user's preferred seat is automatically selected when they return to the app.
- **Decrease/Increase product stock in real-time**: Implement a feature to decrease/increase product stock in real-time instead of doing this on checkout.
- **Better error handling**: Improve error handling by displaying a more user-friendly error message when an error occurs.
- **Improve unit tests**: Add more unit tests to improve code coverage and ensure that the app is working as expected. Currently, I've only added a few unit tests, as I dn't have much experience with unit testing in React Native but I'm eager to learn more about it and I would love to have the opportunity to do so.
