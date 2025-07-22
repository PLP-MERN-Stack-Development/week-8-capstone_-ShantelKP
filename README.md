# Farmers Compound

A MERN stack application for managing and connecting farmers in a digital compound.

## Features
- Express.js backend API
- Vite + React frontend
- Modular folder structure (`backend` and `frontend`)
- Ready for MongoDB integration
- RESTful API design

## Setup

### Prerequisites
- Node.js & npm
- (Optional) MongoDB for database features

### Backend
1. Navigate to the `backend` folder:
   ```powershell
   cd backend
   npm install
   npm start
   ```
2. The server runs on port 5000 by default.

### Frontend
1. Navigate to the `frontend` folder:
   ```powershell
   cd frontend
   npm install
   npm run dev
   ```
2. The app runs on port 5173 by default (Vite).

## Deployment
- Backend and frontend can be deployed separately (e.g., Heroku for backend, Vercel/Netlify for frontend).
- Set environment variables for production (e.g., API URLs, database credentials).
- For full-stack deployment, use a reverse proxy or connect frontend to backend via REST API endpoints.

---

