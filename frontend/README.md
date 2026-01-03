# 🎨 Frontend - Contact Manager UI

A high-performance React application built with Vite and styled with Tailwind CSS.

## 🛠️ Local Setup
1. `cd frontend`
2. `npm install`
3. Create a `.env` file:
   ```env
   VITE_BASE_URL=http://localhost:8000/api/v1/contact



## 📁 Project Structure
```text
frontend/
├── src/
│   ├── api/            # API service calls (Fetch logic)
│   ├── components/     # Reusable UI components (Form, List, Navbar)
│   ├── pages/          # Routed views (Home, AddContact)
│   ├── types/          # TypeScript interfaces/types
│   ├── App.tsx         # Main application routing
│   ├── main.tsx        # React DOM entry point
│   └── index.css       # Global styles & Tailwind directives
├── public/             # Static assets
├── tailwind.config.js  # Tailwind CSS configuration
└── package.json        # Dependencies & scripts