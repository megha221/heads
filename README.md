# DCNet 2025 Conference Website

A full-stack React + Node.js + MySQL conference website with animated UI and real-time blog/announcement features.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MySQL (v8 or higher)
- npm

### 1. Database Setup
```bash
# Connect to MySQL and run:
mysql -u root -p < database_schema.sql
```

### 2. Backend Setup
```bash
cd backend
npm install
# Update .env with your MySQL credentials
node server.js
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### 4. Access the Application
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## 📁 Project Structure

```
conference-website/
├── frontend/          # React + Vite + Tailwind CSS
│   ├── src/
│   │   ├── pages/     # Home, Announcements, Blog
│   │   ├── components/
│   │   └── utils/
├── backend/           # Node.js + Express
│   ├── controllers/   # Business logic
│   ├── routes/        # API endpoints
│   ├── db/           # Database connection
│   └── server.js     # Main server file
└── database_schema.sql
```

## 🎨 Features

- **Animated Homepage** with Framer Motion
- **Responsive Design** with Tailwind CSS
- **Real-time Blog Posts** - Create and view blog posts
- **Announcements** - View conference announcements
- **RESTful API** - Clean backend architecture
- **MySQL Database** - Persistent data storage

## 🔧 API Endpoints

- `GET /api/blogs` - Get all blog posts
- `POST /api/blogs` - Create new blog post
- `GET /api/announcements` - Get all announcements

## 🛠️ Technologies Used

- **Frontend**: React, Vite, Tailwind CSS, Framer Motion, Axios, React Router
- **Backend**: Node.js, Express, MySQL2, CORS, dotenv
- **Database**: MySQL

## 📝 Environment Variables

Create a `.env` file in the backend directory:
```
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=conference_db
PORT=5000
```

## 🚀 Deployment

This project is ready for deployment on platforms like:
- **Render** (recommended for full-stack)
- **Railway**
- **Google Cloud Platform**
- **Heroku**

## 📞 Support

For questions or issues, please contact the development team.
