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

## 🖼️ Screenshots

![Capture d’écran 2025-05-21 à 18 00 19](https://github.com/user-attachments/assets/d4fdaf66-1a15-4ce9-9b94-dd90ce5287bf)

![Capture d’écran 2025-05-21 à 18 02 25](https://github.com/user-attachments/assets/434a8626-c367-4c3f-9d28-615266e191c1)

## 🤔 Why This Project?

This chess game was an opportunity to:

 - Implement real-time multiplayer logic with WebSockets

 - Handle complex domain logic (rules, game states) in a maintainable and modular way

 - Practice clean architecture, decoupling UI from game logic

 - Explore Zustand as a lightweight and intuitive state manager

