
# 📝 Fullstack Blog App

A modern, full-featured blogging platform built with the MERN stack. This project enables users to write rich blog posts, engage with interactive comments, and manage their content with secure authentication and a responsive dashboard.

---

## 🔍 Overview

The Fullstack Blog App offers a seamless user experience for writers and readers alike. Featuring a powerful block-based editor, robust authentication via Google OAuth and JWT, real-time activity notifications, and a clean UI built with Tailwind CSS, it’s the ideal platform for content creators.

---

## 🌟 Features

- 🖊️ Rich blog post creation with **Editor.js**
- 🔐 Google OAuth 2.0 & JWT-based authentication
- 💬 Nested commenting system for community discussions
- 👤 User profile and dashboard to manage blogs
- 🧠 Real-time notifications for activity updates
- 📈 Blog engagement tracking and analytics
- 📂 Media upload support (via AWS or Firebase)
- 🔍 Explore trending and recent blog posts

---

## ⚙️ Tech Stack

**Frontend**: React, Vite, Tailwind CSS  
**Backend**: Node.js, Express.js  
**Database**: MongoDB  
**Authentication**: Google OAuth 2.0, JWT  
**Editor**: Editor.js  
**Other**: REST APIs, Firebase/AWS (media), Socket.io (real-time)

---

## 📁 Project Structure

```
mern-blog-app/
├── frontend/           # React + Tailwind + Vite
│   └── src/
│
├── server/             # Express + MongoDB + JWT + OAuth
│   ├── controller/
│   ├── routes/
│   ├── Schema/
│   └── server.js
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/iamansoni07/blogAPP.git
cd blogAPP
```

### 2. Setup Backend

```bash
cd server
npm install
```

Create a `.env` file based on `.sample.env`:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
```

Start the backend server:

```bash
npm run dev
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm run dev
```

Frontend will be available at `http://localhost:5173`.

---

## 🧪 Roles

- **Guest**: View blogs and explore content
- **User**: Login to write blogs, comment, and manage profile
- **Admin (optional)**: Moderate users and content (if implemented)

---

## 📸 Screenshots / Demo

> Add editor screenshots, comment threads, dashboard views, and blog reading interfaces.

🔗 **Live Demo** (if available): [https://yourblogsite.com](#)

---

## 👨‍💻 Author

**Aman Soni**  
📧 [aman.soni0713@gmail.com](mailto:aman.soni0713@gmail.com)  
🌐 [Portfolio](https://amansonidev.netlify.app)  
💼 [LinkedIn](https://www.linkedin.com/in/amansoni0713/)  
🐙 [GitHub](https://github.com/iamansoni07)

---

## 📄 License

This project is licensed under the **MIT License**.

---
