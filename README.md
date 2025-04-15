# MERN Task Manager App

## Overview
The MERN Task Manager App is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It allows users to efficiently manage tasks with features such as creating, updating, and deleting tasks. The app is responsive and user-friendly, making task management seamless.

## Features
- **Task Management**: Create, read, update, and delete tasks.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Real-Time Updates**: Tasks update dynamically without requiring a page refresh.
- **Backend API**: Built with Express and Node.js for handling requests.
- **Database**: MongoDB for secure and scalable data storage.

## Prerequisites
- Node.js and npm installed on your system.
- MongoDB installed and running locally or accessible via a cloud service.

## Setup Instructions

### Backend Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file in the `backend` directory and add the following environment variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```
3. Start the backend server:
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
2. Use the interface to:
   - Add new tasks.
   - Edit existing tasks.
   - Mark tasks as completed.
   - Delete tasks.

## Technologies Used
- **Frontend**: React.js, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **State Management**: React Hooks
- **Styling**: Custom CSS for a clean and modern UI

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

## Future Enhancements
- Add user authentication for personalized task management.
- Implement drag-and-drop functionality for task prioritization.
- Add due dates and reminders for tasks.
- Deploy the application to a cloud platform (e.g., Heroku, Vercel).

## License
This project is licensed under the MIT License.

## Screenshots
### Task List View
![Task List](frontend/public/screenshots/Task%20List%20View.png)

### Edit Task Form
![Edit Task](frontend/public/screenshots/Task%20edit.png)

### Responsive Design
![Responsive Design](frontend/public/screenshots/Responsive%20design.png)
