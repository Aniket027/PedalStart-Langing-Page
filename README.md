# PedalStart Landing Page

This repository is created as part of an assignment to develop a landing page for PedalStart. The landing page should provide visitors with essential information about PedalStart, including its mission, services, and contact details.

## Deployment Instructions

### Local Development

1. **Clone the Repository**: Clone this repository to your local machine using the following command:

    ```bash
    git clone https://github.com/your-username/pedalstart-landing-page.git
    ```

2. **Navigate to the Project Directory**: Change into the project directory:

    ```bash
    cd pedalstart-landing-page
    ```

3. **Install Dependencies**: Install the required dependencies for both the backend (Express) and frontend (React) using npm or yarn:

    ```bash
    # Install backend dependencies
    cd server
    npm install
    # or
    yarn install

    # Install frontend dependencies
    cd ../client
    npm install
    # or
    yarn install
    ```

4. **Start the Development Servers**: Run both the backend and frontend development servers simultaneously:

    ```bash
    # Start the backend server (Express)
    cd server
    npm start
    # or
    yarn start

    # Start the frontend server (React)
    cd ../client
    npm start
    # or
    yarn start
    ```

## Production Deployment

For production deployment, you would build the frontend React app and serve it using Express as a static file server. Please follow the deployment instructions for both backend and frontend separately based on your hosting platform.