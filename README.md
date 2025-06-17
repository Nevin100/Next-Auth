<h1 align="center">🔐 Next-Crud</h1>
<p align="center">
  <b>A slick and minimal Next.js app powered by GitHub OAuth — because logging in like a pro matters.</b>
</p>

<div align="center">
  
  ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs)
  ![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=for-the-badge&logo=typescript)
  ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38bdf8?style=for-the-badge&logo=tailwindcss)
  ![NextAuth.js](https://img.shields.io/badge/NextAuth.js-black?style=for-the-badge&logo=vercel)
  ![GitHub OAuth](https://img.shields.io/badge/GitHub%20OAuth-181717?style=for-the-badge&logo=github)

</div>

---

## 🚀 Introduction

**Next-Crud** is a modern, fast, and developer-friendly CRUD boilerplate built with 💙 Next.js and GitHub authentication. Integrated with the latest `next-auth@v5`, it offers seamless GitHub login and clean session management.  

If you're tired of building auth flows from scratch — this one's for you. Plug, play, and CRUD away.

---

## 🛠️ Tech Stack

| Tech            | Purpose                              |
|-----------------|--------------------------------------|
| **Next.js 14**  | App framework                        |
| **TypeScript**  | Type-safe coding experience          |
| **Tailwind CSS**| Stylish yet utility-first UI         |
| **NextAuth v5** | Secure authentication                |
| **GitHub OAuth**| GitHub login made breezy             |

---

## ✨ Features

- ✅ GitHub OAuth Integration via NextAuth v5
- 🧠 Server-side authentication logic (`use server`)
- 📦 Full TypeScript support
- 💅 TailwindCSS styling out of the box
- 🔁 Ready-to-extend CRUD base layout

---

## 🧩 Getting Started

# 1. Clone the Repo
```bash
git clone https://github.com/your-username/Next-Crud.git
cd Next-Crud
```

# 2. Install Dependencies
```bash
Copy
Edit

npm install
```

# 3. Configure Environment Variables
Create a .env.local file and add:
```bash
env
GITHUB_ID=your_github_oauth_client_id
GITHUB_SECRET=your_github_oauth_client_secret
NEXTAUTH_SECRET=your_secure_auth_secret
NEXTAUTH_URL=http://localhost:3000
```

# 4. Run the App
```bash
Copy
Edit
npm run dev
