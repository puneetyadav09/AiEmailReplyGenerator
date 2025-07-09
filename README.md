# 📧 Email Reply Generator

A full-stack application that intelligently generates email replies using AI.

- ✨ Frontend: React + Vite + Tailwind CSS + Material UI
- ⚙️ Backend: Java (Spring Boot) with REST API integration
- 🤖 AI: Integrates with Gemini/OpenAI/any AI API (pluggable)



## 🌐 Live Demo

> Coming Soon — deploy on Vercel (frontend) and Render / EC2 (backend)



## 📁 Project Structure
```bash
email-reply-generator/
├── backend/ # Java Spring Boot server
└── frontend/ # Vite + React + Tailwind CSS
```




## 🚀 Features

- Paste original email content
- Choose a reply tone: Professional, Casual, Friendly
- Generate AI-based replies
- Copy reply to clipboard
- Clean UI and responsive layout



## 🧩 Frontend (React + Vite + Tailwind CSS)

### 📦 Tech Stack
- React + Vite
- Tailwind CSS
- Material UI
- Axios

### 📂 Setup

```bash
cd frontend
npm install
npm run dev
```

## 🔧 Environment (Optional)

### You can configure the backend API URL in .env:

```bash
VITE_API_URL=http://localhost:8080/api
```

Then in your code use:

```bash
axios.post(`${import.meta.env.VITE_API_URL}/email/generate`, ...)
```

## ☕ Backend (Java Spring Boot)
### 📦 Tech Stack
-- Spring Boot
-- WebFlux or Web MVC
-- REST API
-- Integration with Gemini or OpenAI



## 📂 Setup

```bash
cd backend
./mvnw spring-boot:run
```

Or using Gradle:
```bash
./gradlew bootRun
```

## 🔧 API Endpoint
```bash
POST /api/email/generate

Request Body:
{
  "emailContent": "string",
  "tone": "professional" | "casual" | "friendly"
}

Response:
{
  "reply": "string"
}
```
```🔐 Optionally integrate Google Gemini or OpenAI inside this API.```



## 🛡️ Security & Error Handling
- CORS enabled (for localhost dev)
- Error boundaries on both frontend and backend
- Graceful fallback if API call fails



## 🙌 Credits

Built by Puneet
