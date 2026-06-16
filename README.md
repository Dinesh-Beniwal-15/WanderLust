# 🌍 WanderLust

A full-stack travel listing web application inspired by Airbnb, where users can explore, create, edit, review, and manage travel destinations.

Built using the MERN-style backend stack with Node.js, Express.js, MongoDB, EJS, Passport Authentication, Cloudinary Image Storage, and Bootstrap.

Demo link 🔗 -> https://wanderlust-3ifr.onrender.com/

---

## 🚀 Features

### 👤 User Authentication
- User Signup & Login
- Secure Password Hashing
- Session-based Authentication
- Authorization & Protected Routes
- Logout Functionality

### 🏠 Listing Management
- Create New Listings
- Edit Existing Listings
- Delete Listings
- View Detailed Listing Information
- Upload Listing Images

### ⭐ Reviews & Ratings
- Add Reviews
- Give Ratings
- Delete Reviews
- One-to-Many Relationship between Listings and Reviews

### ☁️ Cloud Image Storage
- Image Upload using Multer
- Cloudinary Integration
- Automatic Image Hosting & Optimization

### 🔒 Security Features
- Input Validation using Joi
- Authentication Middleware
- Authorization Checks
- Flash Messages for User Feedback
- Error Handling Middleware

### 🎨 User Interface
- Responsive Design
- Bootstrap Styling
- Dynamic EJS Templates
- Reusable Components (Navbar, Footer, Flash Messages)

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- EJS

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- Passport.js
- Passport Local Strategy
- Express Session

### Cloud Services
- Cloudinary
- Multer
- Multer Storage Cloudinary

### Validation & Utilities
- Joi
- Connect Flash
- Method Override

---

## 📂 Project Structure

```bash
wanderlust/
│
├── controllers/
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
│
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── views/
│   ├── includes/
│   ├── layout/
│   ├── listings/
│   └── users/
│
├── public/
│   ├── css/
│   └── js/
│
├── uploads/
│
├── utils/
│   ├── ExpressError.js
│   └── wrapAsync.js
│
├── init/
│   ├── data.js
│   └── index.js
│
├── app.js
├── cloudConfig.js
├── middleware.js
├── schema.js
├── package.json
└── README.md
```

---

## 🗄️ Database Models

### User
- Username
- Email
- Password (Hashed)

### Listing
- Title
- Description
- Image
- Price
- Location
- Country
- Owner

### Review
- Comment
- Rating
- Author

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/Dinesh-Beniwal-15/wanderlust.git
cd wanderlust
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment Variables

Create a `.env` file in the root directory.

```env
ATLASDB_URL=your_mongodb_connection_string

SECRET=session_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

### 4. Seed Database (Optional)

```bash
node init/index.js
```

### 5. Start Application

```bash
node app.js
```

or

```bash
nodemon app.js
```

### 6. Open Browser

```bash
http://localhost:8080
```

---

## 🔑 Environment Variables

| Variable | Description |
|-----------|-------------|
| ATLASDB_URL | MongoDB Atlas Connection URL |
| SECRET | Session Secret Key |
| CLOUD_NAME | Cloudinary Cloud Name |
| CLOUD_API_KEY | Cloudinary API Key |
| CLOUD_API_SECRET | Cloudinary API Secret |

---

## 📸 Screenshots

### Home Page
<img width="1885" height="869" alt="image" src="https://github.com/user-attachments/assets/acd27446-d35c-4d96-9f37-544e78812e85" />


### Listing Details
<img width="1882" height="871" alt="image" src="https://github.com/user-attachments/assets/02465532-ead8-42f3-890b-792f7ce5ba70" />
<img width="1886" height="872" alt="image" src="https://github.com/user-attachments/assets/a4fd5325-585e-459d-99ae-f3c10554a789" />
<img width="1889" height="869" alt="image" src="https://github.com/user-attachments/assets/491cb4fa-b607-4470-9338-743f91a46803" />



### Create Listing
<img width="1878" height="870" alt="image" src="https://github.com/user-attachments/assets/ccc763c7-e5e0-477f-9fe8-f2a61b617465" />
<img width="1884" height="870" alt="image" src="https://github.com/user-attachments/assets/90721748-a95b-4cd1-b1c4-e7585c3aaf90" />



### Login Page
<img width="1913" height="875" alt="image" src="https://github.com/user-attachments/assets/db07012b-9b6b-4293-8a6c-9a4aa69d76e1" />


---

## 🌟 Learning Outcomes

Through this project I learned:

- MVC Architecture
- RESTful Routing
- Authentication & Authorization
- MongoDB Relationships
- Middleware Implementation
- Cloudinary Integration
- Server-side Rendering with EJS
- Session Management
- Form Validation
- Full Stack Web Development

---

## 🚧 Future Improvements

- Search & Filter Listings
- Map Integration
- Wishlist Feature
- Booking System
- User Profile Page
- Dark Mode
- Payment Gateway Integration
- Real-time Notifications

---

## 👨‍💻 Author

**Dinesh Beniwal**

B.Tech CSE (AI & ML)  
SRM Institute of Science and Technology

GitHub: https://github.com/Dinesh-Beniwal-15 

LinkedIn: https://linkedin.com/in/dineshbeniwal

---

## 📜 License

This project is created for educational and portfolio purposes.
