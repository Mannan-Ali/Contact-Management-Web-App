# 🖥️ Backend - Contact Management API

This is the Node.js/Express server that handles data persistence for the Contact Management App.

## 🛠️ Local Setup
1. `cd backend`
2. `npm install`
3. Create a `.env` file with:
   ```env
   PORT=8000
   MONGODB_URI=your_mongodb_atlas_uri
   CORS_ORIGIN=http://localhost:5173
   ROUTES_USER=/api/v1/contact


## 📁 Project Structure
```text
backend/
├── src/
│   ├── controllers/    # Request handling logic (add, delete, get)
│   ├── db/             # MongoDB connection setup
│   ├── models/         # Mongoose schemas (Contact schema)
│   ├── routes/         # API endpoint definitions
│   ├── app.js          # Express app configuration & middleware
│   └── index.js        # Server entry point
├── .env                # Environment variables (local only)
└── package.json        # Dependencies & scripts