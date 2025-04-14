# MERN Task Manager App

## Overview
The MERN Task Manager App is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It allows users to manage tasks efficiently by providing features such as creating, updating, and deleting tasks.

## Features
- Create, read, update, and delete tasks.
- Responsive user interface built with React.
- Backend API built with Express and Node.js.
- MongoDB for data storage.

## Prerequisites
- Node.js and npm installed on your system.
- MongoDB installed and running.

## Setup Instructions

### Backend Setup
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory and add the following environment variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm start
   ```

## Usage
1. Open your browser and navigate to `http://localhost:3000` to access the application.
2. Use the interface to manage your tasks.

## Folder Structure
```
MERN-Task-Manager-App/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── public/
│   └── src/
└── README.md
```

## License
This project is licensed under the MIT License.
