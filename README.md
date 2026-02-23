# 🎓 Elective Bucket Selection — MERN Stack Project

A modern **Full-Stack MERN web application** designed to help NIET students choose the right elective using career insights, salary trends, and an interactive quiz system.

---

## 🚀 Project Overview

Elective Bucket Selection is a student-focused platform where users can:

- Explore electives like **Full Stack Development**, **Artificial Intelligence & Machine Learning**, and **Cloud Computing**
- Read about future scope, industry trends, and salary insights
- Attempt quizzes with MCQs
- Receive recommendations based on performance

This project demonstrates a complete **MERN Stack architecture** with authentication, REST APIs, and responsive UI.

---

## ✨ Features

- 🔐 JWT Authentication (Login & Signup)
- 🎯 Elective Selection Dashboard
- 🧠 Career Insights & Skills Section
- 📊 Quiz System (10 MCQs per elective)
- 🔁 Attempt Logic (Max 2 attempts)
- 📈 Result & Recommendation Page
- 🌙 Modern Gradient UI Design
- 📱 Responsive Layout

---

## 🛠️ Tech Stack

### Frontend

- React.js (Vite)
- React Router DOM
- Context API
- Modern CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

### Database

- MongoDB Compass (Local Database)

---

## 📂 Project Structure

````bash
Elective-Bucket-Selection/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   │
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── electiveController.js
│   │   │   ├── quizController.js
│   │   │   └── resultController.js
│   │   │
│   │   ├── middleware/
│   │   │   ├── authMiddleware.js
│   │   │   └── errorHandler.js
│   │   │
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Elective.js
│   │   │   ├── QuizQuestion.js
│   │   │   └── Result.js
│   │   │
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   ├── electiveRoutes.js
│   │   │   ├── quizRoutes.js
│   │   │   └── resultRoutes.js
│   │   │
│   │   └── seed/
│   │       └── seedData.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Layout.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ElectiveCard.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   └── QuizStepper.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── LoginSignupPage.jsx
│   │   │   ├── HomeDashboard.jsx
│   │   │   ├── ElectiveDetailPage.jsx
│   │   │   ├── QuizPage.jsx
│   │   │   ├── ResultPage.jsx
│   │   │   ├── DashboardPage.jsx
│   │   │   ├── AboutPage.jsx
│   │   │   └── ContactPage.jsx
│   │   │
│   │   ├── state/
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── utils/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   │
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md

---

# ⚙️ Elective Bucket Selection — MERN Project

## Installation & Setup

### Clone Repository
```bash
git clone https://github.com/Aman3054/Elective-Bucket-Selection.git
````

### Backend

```bash
cd backend
npm install
npm run dev
```

### Create a `.env` file inside backend folder

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/elective_bucket_selection
JWT_SECRET=your_secret_key
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Open in browser

```bash
http://localhost:5173
```

---

## 🧪 How It Works

1. User signs up or logs in
2. Selects an elective
3. Reads career insights and skills
4. Attempts quiz questions
5. Receives score and recommendation

---

## 🔒 Environment Variables

The `.env` file is ignored from GitHub for security reasons.
Create it manually inside backend before running the project.

---

## 👨‍💻 Author

**Aman Goswami**  
B.Tech CSE | MERN Stack Developer  
GitHub: https://github.com/Aman3054

---

## ⭐ Support

If you like this project:

- Give it a ⭐ on GitHub
- Share feedback
- Connect with me

---

## 📌 Future Improvements

- Admin Panel for Electives
- Live Deployment
- Analytics Dashboard
- AI-Based Recommendation System
