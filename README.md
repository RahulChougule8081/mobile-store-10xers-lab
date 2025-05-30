# 📱 Mobile Store – Full Stack Web Application

A full-stack mobile phone store web application with **Admin** and **Customer** roles. Built with:

- **Frontend:** React, Redux, Tailwind CSS
- **Backend:** Node.js, Express, Sequelize ORM, PostgreSQL

---

## ✅ Features

### 🔐 Authentication

- Signup/Login functionality
- JWT-based authentication
- Role-based access control (Admin & Customer)

### 🛒 Admin

- Create, read, update, and delete products
- View all created products

### 👥 Customer

- Browse all products
- Filter by admin (seller)

---

## 🧪 Tech Stack

| Layer    | Technology                     |
| -------- | ------------------------------ |
| Frontend | React, Redux, Tailwind CSS     |
| Backend  | Node.js, Express.js            |
| Database | PostgreSQL (via Sequelize ORM) |
| Auth     | JWT, bcrypt                    |

---

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/mobile-store.git
cd mobile-store
```

---

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the `server/` directory with the following content:

```env
DB_NAME=mobile_store
DB_USER=postgres
DB_PASS=your_password
DB_HOST=localhost
JWT_SECRET=your_jwt_secret
```

Now, run the backend:

```bash
node app.js
```

Make sure PostgreSQL is running and a database named `mobile_store` exists.

---

### 3. Frontend Setup

```bash
cd ../client
npm install
npm run dev
```

---

## 🔄 API Endpoints

### Auth Routes

- `POST /api/signup` – Signup new user (admin or customer)
- `POST /api/login` – Login user and return JWT token

### Product Routes (Admin only)

- `POST /api/products` – Create a product
- `PUT /api/products/:id` – Update a product
- `DELETE /api/products/:id` – Delete a product

### Product Routes (Public)

- `GET /api/products` – Get all products
- `GET /api/products?adminEmail=admin@example.com` – Get products by admin

---

## 👤 Roles & Access

| Role     | Access                     |
| -------- | -------------------------- |
| Admin    | Manage (CRUD) own products |
| Customer | View all products          |

---

## 📁 Folder Structure

```
mobile-store/
├── client/     # React frontend
└── server/     # Node.js + Express + Sequelize backend
```

---

## 📝 Deliverables Checklist

- Full-Stack Web App
- Admin & Customer roles
- Product CRUD
- JWT-based authentication
- PostgreSQL with Sequelize
- Responsive UI with Tailwind CSS
- GitHub Repo with proper structure
- README with all required details

---
