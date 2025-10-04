# odoo_Team_psyduck - Ex-Tracker

Ex-Tracker is a **role-based expense management web application** built with React and Tailwind CSS. It allows Admins, Managers, and Employees to manage, approve, and track expenses seamlessly. The app provides role-specific dashboards, authentication, and interactive features like expense approval, analytics, and user management.

---

## 🧩 Features

### General
- Minimalistic home page with Sign In / Sign Up.
- Role-based dashboards: Admin, Manager, Employee.
- Persistent login via `localStorage`.
- Protected routes for different roles.
- Logout functionality.

### Admin
- Add, remove, and manage users.
- Change user passwords.
- Monitor company-wide expenses.
- Quick analytics of users and expenses.

### Manager
- Approve or reject employee expense bills.
- Add, remove, and manage team members.
- Track team expenses and analytics.
- Quick view of pending and approved bills.

### Employee
- Submit expense reports for approval.
- Track reimbursement status.
- View past expense submissions.

---

## 💻 Tech Stack
- **Frontend:** React, Tailwind CSS, Framer Motion (animations)
- **Icons:** Lucide React
- **Routing:** React Router DOM
- **State Management:** `useState` / `localStorage`

> ⚡ Note: Backend APIs or database are not included in this version. Data is stored in memory or `localStorage` for demonstration purposes.
