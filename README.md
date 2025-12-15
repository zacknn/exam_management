```markdown
# Exam Management System

A modern, full-stack **Exam Management System** built with **React.js** (frontend) and **Laravel** (backend). This application helps universities or educational institutions manage groups, modules (courses), students, teachers, exam sessions, rooms, exams scheduling, and surveillance assignments.

## 🚀 Features

- **User Authentication & Roles**  
  - Admin  
  - Planner  
  - Teacher  
  - Student  

- **Group Management**  
  - Create, edit, and delete student groups (e.g., L3-GL-A)  
  - View students in each group  

- **Module (Course) Management**  
  - Add/edit modules with code, name, semester, coefficient, and credits  

- **Exam Planning**  
  - Create exam sessions (e.g., January 2026)  
  - Schedule exams (module, date, time, type: Final/CC)  
  - Assign surveillance (teachers to rooms)  

- **Room Management**  
  - Manage classrooms and amphitheaters with capacity and type  

- **Responsive & Modern UI**  
  - Clean dashboard using Tailwind CSS  
  - Lucide React icons  
  - Loading skeletons with React Suspense  
  - Mobile-friendly design  

- **Development Tools**  
  - Mock API using **MirageJS** (frontend-only development)  
  - Ready for Laravel API integration  

## 🛠 Tech Stack

### Frontend
- **React 18** (with Hooks & Suspense)
- **React Router DOM** (v6)
- **Tailwind CSS** (styling)
- **Lucide React** (icons)
- **MirageJS** (mock backend during development)

### Backend (Planned/Ready for Integration)
- **Laravel 10/11** (PHP framework)
- RESTful API endpoints
- Sanctum or Passport authentication
- Eloquent ORM & Migrations

### Database
- MySQL / PostgreSQL (via Laravel migrations)

## 📂 Project Structure

```
exam-management/
├── frontend/                  # React application
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── pages/             # Dashboard pages (Groups, Modules, Exams...)
│   │   ├── resources/         # MirageJS resources & actions
│   │   ├── lib/               # API actions
│   │   ├── data.js            # Mock data (users, groups, modules, etc.)
│   │   ├── server.js          # MirageJS server setup
│   │   └── App.jsx
│   └── ...
│
├── backend/                   # Laravel application (to be created)
│   ├── app/
│   ├── routes/api.php
│   ├── database/migrations/
│   └── ...
│
└── README.md
```

## ⚙️ Setup & Installation

### 1. Frontend (React)

```bash
cd frontend

# Install dependencies
npm install

# Start development server (with MirageJS mock API)
npm run dev
```

The app will run at `http://localhost:5173` (or your Vite port).

> MirageJS automatically intercepts `/api/*` requests and serves mock data — perfect for frontend development without a backend.

### 2. Backend (Laravel) - Coming Soon / Optional Setup

```bash
cd backend

composer install

cp .env.example .env

php artisan key:generate

php artisan migrate

php artisan serve
```

Then update frontend API calls to point to `http://localhost:8000/api`.

## 🔑 Default Login Credentials (Mock Data)

| Email                  | Password | Role      |
|------------------------|----------|-----------|
| admin@univ.dz          | 123456   | admin     |
| planner@univ.dz        | 123456   | planner   |
| karim@univ.dz          | 123456   | teacher   |
| sara@student.dz        | 123456   | student   |

## 📈 Future Improvements

- Full Laravel API integration
- Real authentication (Laravel Sanctum)
- Export exam schedules to PDF/Excel
- Print surveillance assignments
- Notifications & email reminders
- Role-based dashboard views
- Drag & drop exam scheduling

## 🤝 Contributing

Feel free to fork and submit pull requests! Any improvements to UI, features, or backend integration are welcome.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

**Made with ❤️ for educational institutions**
```