# 🌐 DFIC- Admin Server

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node-dot-js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![SendGrid](https://img.shields.io/badge/SendGrid-00A1E0?style=for-the-badge&logo=sendgrid&logoColor=white)
![AWS S3](https://img.shields.io/badge/AWS%20S3-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=orange)

This project serves as the **Admin Panel** for **Dakshi Foundation**, enabling secure and automated generation of official documents such as **certificates, ID cards, and offer letters**. The system stores metadata in **MongoDB**, securely saves documents in **AWS S3**, and allows real-time verification through **QR Code scanning**.

🔗 **[Visit Dakshi Foundation](https://dakshifoundation.in)** - 'An Innovation for Change'.

---

## 📋 Features

### 1️⃣ 🎓 Certificate, ID Cards & Offer Letter Generation
- Generate customized **certificates, ID cards, and offer letters** dynamically.
- Uses **predefined templates** for a professional look.
- Automatically saves PDFs to **AWS S3**.

### 2️⃣ 📩 Send Documents via Email (SendGrid)
- Securely send generated documents via **email** using **SendGrid**.
- Ensures reliable email delivery with **tracking & logging**.

### 3️⃣ 🗄️ MongoDB Metadata Storage
- Stores document metadata securely in **MongoDB Atlas**.
- Allows easy retrieval, search, and verification of documents.

### 4️⃣ 🔍 QR Code-Based Document Verification
- Generates a **unique QR code** for each document.
- Users can scan the **QR code** to verify authenticity.
- Redirects to a verification page confirming document validity.

### 5️⃣ 📂 Secure AWS S3 Storage
- All generated PDFs are **securely stored** in an **AWS S3 Bucket**.
- Ensures **high availability** and **data integrity**.

---

## 📸 Screenshots

### 🎯 Dashboard
![Dashboard](https://your-image-url.com/dashboard.png)

### 📝 Document Generation
![Certificate Generation](https://your-image-url.com/certificate.png)

---

## 🏗️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Cloud Storage**: AWS S3
- **Email Service**: SendGrid
- **Authentication**: JWT-based authentication
- **QR Code**: QR Code Generator & Scanner

---

## 🛠️ Installation & Setup

### Prerequisites
- **Node.js** (>= 16.x)
- **MongoDB Atlas**
- **AWS S3 Bucket & IAM Credentials**
- **SendGrid API Key**

### Clone the Repository
```sh
git clone https://github.com/dakshifoundation/DFIC-Admin.git
cd DFIC-Admin
npm install
node app.js
```

## 🛠️ Developers:

- **Front-End Developer :** Ayush Khale | 📧 ayushhkhale@gmail.com | 🐙 [GitHub](https://github.com/ayushkhale)
- **Back-End Developer :** Abhishek Ganeshe | 📧 abhishekganeshe33@gmail.com | 🐙 [GitHub](https://github.com/RishiGaneshe)
