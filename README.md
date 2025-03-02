# Blog Website in Node.js

A simple blog website built using Node.js, Express, and MongoDB, featuring JWT authentication, blog creation, and a commenting system.

## Features
- User authentication using JWT (JSON Web Token)
- Add, edit, and delete blog posts
- Comment on blog posts
- Secure API routes with authentication
- MongoDB for data storage

## Technologies Used
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT for authentication
- bcrypt for password hashing

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/srajan-kush/Blog-Website.git
   cd Blog-Website
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=8000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. Start the server:
   ```sh
   npm dev run
   ```

## Contributing
Feel free to open issues or create pull requests for improvements.

## Contact
For any queries, reach out at [srajank2003@gmail.com](mailto:srajank2003@gmail.com).
