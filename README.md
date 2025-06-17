# Workout Tracker - MERN Stack Application

A full-stack workout tracking application built with the MERN (MongoDB, Express.js, React/Next.js, Node.js) stack. This application allows users to manage their workout routines by creating, reading, updating, and deleting workout records.

## Features

- Create new workout entries with title, repetitions, and load weight
- View all workout entries in a list
- Update existing workout details
- Delete workout entries
- Responsive and modern user interface built with Next.js
- RESTful API backend with Express.js
- MongoDB database for data persistence

## Tech Stack

### Frontend
- Next.js 15.3.3
- React 19
- TypeScript
- SASS for styling
- ESLint for code quality

### Backend
- Node.js
- Express.js 5.1.0
- MongoDB with Mongoose 8.15.2
- dotenv for environment variable management

## Getting Started

### Prerequisites
- Node.js installed on your machine
- MongoDB instance (local or cloud)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd masteringfullstack
```

2. Install Backend Dependencies
```bash
cd backend
npm install
```

3. Configure Backend Environment
Create a `.env` file in the backend directory with the following variables:
```env
PORT=4114
MONGODB=<your-mongodb-connection-string>
```

4. Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

### Running the Application

1. Start the Backend Server
```bash
cd backend
npm run dev
```
The server will start on port 4114

2. Start the Frontend Development Server
```bash
cd frontend
npm run dev
```
The frontend will be available at http://localhost:3090

## API Endpoints

- `GET /api/workouts` - Get all workouts
- `GET /api/workouts/:id` - Get a single workout
- `POST /api/workouts` - Create a new workout
- `PATCH /api/workouts/:id` - Update a workout
- `DELETE /api/workouts/:id` - Delete a workout

## Project Structure

```
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
└── frontend/
    ├── app/
    │   ├── components/
    │   ├── context/
    │   ├── hooks/
    │   └── styles/
    └── public/
```

## License

ISC