# ♟️ Online Chess Game – Frontend

This repository contains the frontend of a real-time online chess game, built with **React**, **TypeScript**, and **Zustand** for state management.  
It features a fully playable multiplayer experience, communicating with a WebSocket server using **Socket.IO**.

👉 **[Live demo](https://chess-square.app)**  
🔗 Part of a full-stack project – see [Backend Repository](https://github.com/GabrielLRdP/chess-backend)

---

## 🎮 Features

- ♟️ **Real-time online gameplay** using Socket.IO
- ♻️ Full implementation of chess rules (legal moves, check, checkmate, stalemate, etc.)
- 🎯 Game state management with **Zustand** (lightweight and scalable)
- 🧩 **Separation of concerns** via the **Observer pattern** to decouple service and UI layers
- 🎨 UI feedback with move highlights, and selected square
- 📱 Responsive design for desktop and mobile

---

## 🧰 Tech Stack

- **React** with **TypeScript**
- **Zustand** for state management
- **Socket.IO** for WebSocket communication
- **Vite** for development tooling
- **TailwindCSS** for styling

---

## 🚀 Getting Started

```bash
git clone https://github.com/yourusername/chess-frontend.git
cd chess-frontend
npm install
npm run dev
```

Create a .env file at the root of the project with the following content:

```bash
VITE_BASE_URL=http://localhost:3000
```
Replace http://localhost:3000 with the actual URL of your backend server if needed.

```bash
npm run dev
```


The app will be available at http://localhost:5173.
