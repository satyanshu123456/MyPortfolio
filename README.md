# SATYANSHU.DEV — Premium 3D MERN Stack Developer Portfolio

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-R3F-black?logo=three.js&logoColor=white)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb&logoColor=white)](https://mongodb.com/)

A production-grade, futuristic personal portfolio website engineered for **Satyanshu Gautam**, an aspiring **MERN Stack Developer** based in Bhopal, Madhya Pradesh, India.

---

## 🌟 Developer Profile

- **Full Name:** Satyanshu Gautam
- **Brand Identity:** `SATYANSHU.DEV`
- **Professional Role:** MERN Stack Developer
- **Tagline:** *"Turning Ideas Into Interactive Digital Experiences."*
- **Supporting Vision:** *"I build modern, responsive web applications and enjoy turning creative ideas into practical digital experiences."*
- **Location:** Bhopal, Madhya Pradesh, India
- **Education:** B.Tech in Computer Science Engineering (AIML), Lakshmi Narain College of Technology Excellence, Bhopal (Graduation: 2026)
- **Professional Experience:** Fresher (Passionate Self-Directed Learner & Project Builder)
- **Email:** [satyanshugautam6@gmail.com](mailto:satyanshugautam6@gmail.com)
- **GitHub:** [https://github.com/satyanshu123456](https://github.com/satyanshu123456)
- **LinkedIn:** [https://www.linkedin.com/in/satyanshu-gautam-33a149254](https://www.linkedin.com/in/satyanshu-gautam-33a149254)
- **Instagram:** [https://www.instagram.com/satyanshugautam5/](https://www.instagram.com/satyanshugautam5/)
- **YouTube:** [https://youtube.com/@thegamersatya1](https://youtube.com/@thegamersatya1)

---

## 🚀 Key Features

1. **Multi-Page Single-Page Architecture**
   - Independent routes managed with React Router DOM:
     - `/` — Interactive 3D Hero, Core Focus Pillars, and CTAs
     - `/about` — Biography, Education Card, and Career Aspirations
     - `/skills` — Categorized core competencies (Frontend, Backend, Database, Tools)
     - `/projects` — Interactive project roadmap cards with transparent "Coming Soon" badges
     - `/experience` — Fresher milestone timeline (Education, MERN stack journey, practice)
     - `/contact` — Production contact form with MongoDB persistence and Nodemailer alerts
     - `*` — Custom 404 cyberspace route
   - Persistent top navigation with active route highlights, animated mobile drawer, and Dark/Light mode toggle.
   - Dedicated "Back to Home" button on all inner pages.

2. **Interactive 3D WebGL Hero Experience**
   - Procedural cybernetic developer avatar built with React Three Fiber (`@react-three/fiber`) and `@react-three/drei`.
   - Floating geometric wireframes (icosahedrons, toruses, cyber cubes).
   - Dynamic neon point lighting (Cyan `#22D3EE`, Indigo `#6366F1`, Purple `#A855F7`).
   - Gentle floating animations and mouse-based parallax.
   - Non-blocking layout: 3D canvas is configured with `pointer-events-none` so buttons, navigation, and text selection are always 100% accessible.
   - Graceful 2D fallback for devices with WebGL disabled or `prefers-reduced-motion`.

3. **Production Backend & Contact API**
   - Express.js REST API with security middleware (`helmet`, `cors`, `express-rate-limit`, `10kb` body limits).
   - Input validation and sanitization for name, email, subject, and message.
   - Reliable delivery pattern: submissions are saved to MongoDB first; email notification via Nodemailer is dispatched next. If SMTP is offline, the submission remains securely stored.
   - Graceful offline fallback: if MongoDB is disconnected in development, submissions are buffered in-memory and reported truthfully to the client.

4. **Design System & Aesthetics**
   - Dark mode by default (`#080B14`) with light mode toggle persisted to `localStorage`.
   - Typography: **Space Grotesk** (headings) and **Inter** (body).
   - Glassmorphism panels, subtle neon glow, and 3D tilt effects on desktop project cards.
   - Desktop custom neon cursor with touch detection and reduced-motion compliance.

---

## 🛠️ Technology Stack

### Frontend
- **Framework:** React 18
- **Bundler:** Vite
- **Routing:** React Router DOM v6
- **Animations:** Framer Motion
- **3D Graphics:** Three.js, `@react-three/fiber`, `@react-three/drei`
- **Styling:** Tailwind CSS, PostCSS, Autoprefixer
- **Icons:** Lucide React

### Backend
- **Runtime:** Node.js (v18+)
- **Framework:** Express.js
- **Database ORM:** Mongoose & MongoDB
- **Email Dispatch:** Nodemailer
- **Security & Utilities:** Helmet, CORS, Express-Rate-Limit, Dotenv

---

## 📁 Project Structure

```text
personalPort/
├── frontend/
│   ├── public/
│   │   └── favicon.svg           # Custom neon developer logo
│   ├── src/
│   │   ├── components/           # Reusable UI components
│   │   │   ├── Navbar.jsx        # Persistent header with mobile drawer
│   │   │   ├── Footer.jsx        # Persistent footer with social links
│   │   │   ├── ThemeToggle.jsx   # Dark/Light theme switcher
│   │   │   ├── CustomCursor.jsx  # Desktop neon follower cursor
│   │   │   ├── LoadingScreen.jsx # Futuristic brand loader with safety timeout
│   │   │   ├── BackToHome.jsx    # Inner page return navigation
│   │   │   ├── SocialLinks.jsx   # Accessible verified social icons
│   │   │   ├── ProjectCard.jsx   # 3D tilted glassmorphism project card
│   │   │   └── PageTransition.jsx# Framer Motion page wrapper
│   │   ├── data/                 # Strictly verified developer data
│   │   │   ├── projects.js       # Planned projects (TaskFlow, CareerConnect, ChatSphere)
│   │   │   ├── skills.js         # Verified MERN stack skills
│   │   │   └── socialLinks.js    # Developer biography & socials
│   │   ├── layouts/
│   │   │   └── MainLayout.jsx    # Root SPA layout with scroll-to-top
│   │   ├── pages/                # Individual route views
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── NotFound.jsx
│   │   ├── scenes/               # Three.js 3D environment
│   │   │   ├── HeroScene.jsx     # Canvas with WebGL fallback detection
│   │   │   ├── DeveloperAvatar.jsx # Procedural cyber developer avatar
│   │   │   └── FloatingObjects.jsx # Floating geometric meshes & particle field
│   │   ├── services/
│   │   │   └── contactService.js # API communication layer
│   │   ├── styles/
│   │   │   └── index.css         # Glassmorphism, scrollbars, Tailwind
│   │   ├── App.jsx               # Route definitions & Suspense lazy loading
│   │   └── main.jsx              # React 18 DOM mount point
│   ├── .env.example
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js       # Mongoose connection with error resilience
│   │   ├── controllers/
│   │   │   └── contactController.js # Validation, DB save & email trigger
│   │   ├── middleware/
│   │   │   ├── errorHandler.js   # Centralized error handler
│   │   │   └── rateLimiter.js    # 5 req/15min rate limiting
│   │   ├── models/
│   │   │   └── Contact.js        # Mongoose Contact schema
│   │   ├── routes/
│   │   │   └── contactRoutes.js  # /api/contact router
│   │   ├── services/
│   │   │   └── emailService.js   # Nodemailer SMTP dispatcher
│   │   ├── app.js                # Express app configuration & middleware
│   │   └── server.js             # Server startup & graceful shutdown
│   ├── tests/
│   │   └── contact.test.js       # Node.js built-in automated test suite
│   ├── .env.example
│   └── package.json
├── .gitignore
└── README.md
```

---

## 💻 Local Development Setup

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher (`node -v`)
- **npm**: v9.0.0 or higher (`npm -v`)
- **MongoDB** *(Optional for basic local browsing; required for database persistence)*: Local instance or MongoDB Atlas URI.

### 2. Clone & Environment Setup
Clone the repository and prepare your environment files:

```bash
# Clone repository
git clone https://github.com/satyanshu123456/personalPort.git
cd personalPort

# Set up frontend environment
cp frontend/.env.example frontend/.env

# Set up backend environment
cp backend/.env.example backend/.env
```

### 3. Backend Setup & Startup
In a terminal window:

```bash
cd backend
npm install
npm run dev
```

The backend server will start on `http://localhost:5000`.
- Health Check: `http://localhost:5000/api/health`
- Contact Health: `http://localhost:5000/api/contact/health`

### 4. Frontend Setup & Startup
In a second terminal window:

```bash
cd frontend
npm install
npm run dev
```

Open your browser at `http://localhost:5173`.

---

## 🧪 Automated Testing & Verification

Run the automated backend test suite:

```bash
cd backend
npm test
```

This tests:
- Server `/api/health` responsiveness
- Contact service health check
- Input validation rejection on empty fields
- Input validation rejection on invalid email format
- Valid submission persistence & offline resilience
- 404 JSON handling for nonexistent routes

To test the frontend production build:

```bash
cd frontend
npm run build
npm run preview
```

---

## 🌐 Production Deployment Guide

### 1. Database Setup: MongoDB Atlas
1. Sign in to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a free M0 Cluster.
3. Under **Database Access**, create a database user (e.g., `satyanshu_admin`) with password.
4. Under **Network Access**, add IP address `0.0.0.0/0` (allow access from anywhere) so cloud platforms like Render can connect.
5. In **Clusters > Connect > Drivers**, copy your connection string:
   ```text
   mongodb+srv://<username>:<password>@cluster0.mongodb.net/satyanshu_portfolio?retryWrites=true&w=majority
   ```

### 2. Backend Deployment: Render
1. Create a free account on [Render](https://render.com/).
2. Click **New + > Web Service** and link your Git repository.
3. Configure the service:
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
4. In **Environment Variables**, define:
   ```env
   NODE_ENV=production
   PORT=5000
   FRONTEND_URL=https://satyanshu.dev
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/satyanshu_portfolio?retryWrites=true&w=majority
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your_email@gmail.com
   SMTP_PASS=your_gmail_app_password
   CONTACT_RECEIVER_EMAIL=satyanshugautam6@gmail.com
   ```
5. Deploy the service and note the Render URL (e.g. `https://satyanshu-portfolio-api.onrender.com`).

### 3. Frontend Deployment: Vercel
1. Sign in to [Vercel](https://vercel.com/).
2. Click **Add New > Project** and import the repository.
3. In Project Settings:
   - **Framework Preset:** `Vite`
   - **Root Directory:** `frontend`
4. Under **Environment Variables**, add:
   ```env
   VITE_API_BASE_URL=https://satyanshu-portfolio-api.onrender.com/api
   ```
5. Click **Deploy**.
6. Set your custom domain `satyanshu.dev` in Vercel settings if available.

---

## 🔒 Security & Best Practices

- **Zero Hardcoded Credentials:** All credentials (MongoDB URI, SMTP passwords, tokens) reside strictly in `.env` files and are omitted from version control.
- **Request Limiting:** Contact submissions are throttled at 5 requests per 15 minutes per IP to prevent spam attacks.
- **Safe HTML Sanitization:** Form input is sanitized before rendering into notification emails to prevent HTML injection.
- **Reliable Persistence:** Submissions are committed to MongoDB before email dispatch; transient SMTP network failures will never delete received contact inquiries.

---

## 📄 License & Attribution

Designed and engineered by **Satyanshu Gautam** ([SATYANSHU.DEV](https://github.com/satyanshu123456)).
All rights reserved.

