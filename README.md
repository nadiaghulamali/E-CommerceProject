# E-CommerceProject

This project implements the functionality of user registration and login in a shopping application.

Table of Contents
Overview
Installation
Usage
File Structure
Dependencies
Contributing
License
Overview
The Ecommerce Project is a Node.js application built with Express.js and MongoDB. It provides APIs for user registration and authentication. Users can create accounts, log in securely, and access protected resources within the application.

Installation
Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/your-username/ecommerce-project.git
Navigate to the project directory:

bash
Copy code
cd ecommerce-project
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory and add the following variables:

plaintext
Copy code
PORT=4000
MONGODB_URL=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_secret_key
Start the server:

bash
Copy code
npm start
Usage
Register a new user:

Send a POST request to /api/user/register with user details (firstname, lastname, email, mobile, password).
Upon successful registration, a new user will be created in the database.
Log in:

Send a POST request to /api/user/login with user credentials (email, password).
Upon successful login, a JSON web token (JWT) will be generated and returned in the response.
Access protected routes:

Include the JWT token in the Authorization header for subsequent requests to protected routes.
File Structure
lua
Copy code
EcommerceProject/
│
├── Controller/
├── config/
│   ├── dbConnect.js
│   └── jwtToken.js
├── middlewares/
│   ├── errorHandler.js
│   └── notFound.js
├── models/
│   └── userModel.js
├── node_modules/
├── routes/
│   └── authRoutes.js
├── .env
├── index.js
├── package-lock.json
└── package.json
Dependencies
Express.js
MongoDB
Mongoose
bcrypt
jsonwebtoken
Contributing
Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.
