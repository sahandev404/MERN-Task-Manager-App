# MERN Task Manager App

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation and Setup](#installation-and-setup)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Deployment](#deployment)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Future Enhancements](#future-enhancements)
- [License](#license)

## Overview
The **MERN Task Manager App** is a full-stack web application designed to simplify task management. Built using the MERN stack (MongoDB, Express.js, React.js, and Node.js), this app provides a seamless and responsive user experience for creating, updating, and managing tasks.

## Features
- **Task Management**: Add, edit, delete, and mark tasks as completed.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Real-Time Updates**: Dynamic task updates without page reloads.
- **Backend API**: RESTful API built with Express.js and Node.js.
- **Database**: MongoDB for secure and scalable data storage.

## Prerequisites
- **Node.js** and **npm** installed on your system.
- **MongoDB** installed locally or accessible via a cloud service.

## Installation and Setup

### Backend Setup
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory with the following variables:
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

## Deployment
The project has been deployed to Vercel. You can access the live application using the following URL:

**Frontend URL**: [https://mern-task-manager-frontend-pi.vercel.app/](https://mern-task-manager-frontend-pi.vercel.app/)

**Backend URL**: Ensure the backend is running locally or deployed to a cloud service for full functionality.

## Usage
1. Open your browser and navigate to the live application URL or `http://localhost:3000` for local development.
2. Use the app to:
   - Add new tasks.
   - Edit existing tasks.
   - Mark tasks as completed.
   - Delete tasks.

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
│   ├── src/
│   └── build/
└── README.md
```

## Screenshots
### Task List View
![Task List](frontend/public/screenshots/Task%20List%20View.png)

### Edit Task Form
![Edit Task](frontend/public/screenshots/Task%20edit.png)

### Responsive Design
![Responsive Design](frontend/public/screenshots/Responsive%20design.png)

## Technologies Used
- **Frontend**: React.js, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **State Management**: React Hooks
- **Styling**: Custom CSS for a clean and modern UI

## Future Enhancements
- Add user authentication for personalized task management.
- Implement drag-and-drop functionality for task prioritization.
- Add due dates and reminders for tasks.

## Contribution Guidelines
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push the branch.
4. Open a pull request with a detailed description of your changes.

## License
This project is licensed under the MIT License.
