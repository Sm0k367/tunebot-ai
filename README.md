# 🎵 TuneBot - AI Music Generation Platform

TuneBot is an innovative micro SaaS that combines conversational AI with music generation, allowing users to create custom music through natural language conversations.

---

## 🚀 Features

- 🎤 Conversational Music Creation via Chat
- 🤖 AI-Powered Music Generation (MP3, WAV, FLAC)
- 💬 Real-time Chat Interface
- 🔐 User Authentication & Sessions
- 💳 Stripe-Powered Subscription Tiers
- 📦 Exportable Audio Files

---

## 🏗️ Architecture

### Frontend (React + TypeScript)
- Responsive UI with Chat + Audio Player
- Waveform Visualizer
- Stripe Subscription UI

### Backend (Node.js + Express)
- RESTful API + WebSocket Chat
- OpenAI + Music Generation APIs
- Stripe Integration
- JWT Auth
- File Storage

### Databases
- PostgreSQL: Users, subscriptions
- MongoDB: Chat history, track metadata
- Redis: Session caching

---

## 🧪 Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/Sm0k367/tunebot-ai.git
cd tunebot-ai




2. Install Dependencies
bash


# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install




3. Configure Environment
bash


cp frontend/.env.example frontend/.env
cp backend/.env.example backend/.env




4. Run Locally
bash


# Backend
cd backend
npm run dev

# Frontend
cd ../frontend
npm run dev
