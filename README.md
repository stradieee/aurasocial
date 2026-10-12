# Aura — Sophisticated, Minimalistic Social Networking Platform

Aura is a modern, real-time social networking web application designed with a sophisticated, minimalistic aesthetic (ample whitespace, clean typography, dark/light mode, and subtle glassmorphic touches). It includes live AI bot assistance (powered by Gemini API), stories, real-time chat, video/voice calling simulation, and a dynamic live feed.

## Tech Stack
- **Frontend**: React (Vite), Tailwind CSS, Lucide Icons, Axios, Socket.io-client
- **Backend**: Node.js, Express, Socket.io, Mongoose (MongoDB) / PostgreSQL compatible
- **AI Integration**: Google Gemini API (`gemini-2.5-flash` or compatible endpoint)
- **Real-time Communication**: WebSockets (Socket.io) & WebRTC simulation for calling

---

## Project Structure
```text
aura-social/
├── backend/
│   ├── src/
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Post.js
│   │   │   ├── Message.js
│   │   │   └── Story.js
│   │   ├── routes/
│   │   │   ├── auth.js
│   │   │   ├── posts.js
│   │   │   └── ai.js
│   │   ├── sockets/
│   │   │   └── chatSocket.js
│   │   └── server.js
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Feed.jsx
│   │   │   ├── Chat.jsx
│   │   │   ├── Stories.jsx
│   │   │   ├── CallModal.jsx
│   │   │   └── AIAssistant.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
└── README.md
```

---

## Getting Started

### Backend Setup
1. Navigate to `backend/`:
   ```bash
   cd backend
   npm install
   ```
2. Configure `.env`:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/aura
   JWT_SECRET=your_jwt_secret_key
   GEMINI_API_KEY=your_google_gemini_api_key
   ```
3. Run the server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to `frontend/`:
   ```bash
   cd frontend
   npm install
   ```
2. Run development server:
   ```bash
   npm run dev
   ```
