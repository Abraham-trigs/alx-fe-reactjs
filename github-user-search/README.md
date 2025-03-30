# GitHub User Search Application

## 🚀 Overview
The **GitHub User Search Application** is a modern web application built with React that allows users to search for GitHub profiles using the **GitHub API**. Users can enter a username to retrieve and display relevant profile information such as avatar, name, location, repository count, and more.

## 🎯 Features
- 🔍 **Search GitHub Users** by their usernames
- 📍 **Advanced Search** with filtering by location and repository count
- 📊 **User Information Display** including avatar, bio, and profile link
- 🎨 **Modern UI** built with Tailwind CSS for responsiveness
- ⚡ **Fast API Calls** using Axios
- 🌍 **Deployed on Vercel** for global accessibility

## 🛠️ Tech Stack
- **Frontend:** React, Tailwind CSS
- **API Handling:** Axios
- **State Management:** React Hooks
- **Deployment:** Vercel

## 📂 Project Structure
```
📦 github-user-search
├── 📂 src
│   ├── 📂 components     # Reusable UI components (SearchBar, SearchResults)
│   ├── 📂 services       # API service (githubService.js)
│   ├── 📜 App.jsx        # Main React component
│   ├── 📜 main.jsx       # React entry point
│
├── 📜 .env               # Environment variables
├── 📜 .gitignore         # Git ignored files
├── 📜 package.json       # Project dependencies
└── 📜 README.md          # Project documentation
```

## ⚙️ Installation & Setup
Follow these steps to run the project locally:

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/github-user-search.git
cd github-user-search
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the root directory and add:
```
VITE_APP_GITHUB_API_KEY=your_github_api_key
```

### 4️⃣ Run the Application
```sh
npm run dev
```

The app will be accessible at `http://localhost:5173/`.

## 🌍 Deployment on Vercel
This application is deployed on Vercel. To deploy it yourself:
1. **Push to GitHub** and connect your repository to **Vercel**.
2. Set up **environment variables** in Vercel settings.
3. **Deploy** and get a live URL like: `https://github-user-search.vercel.app`

## 📜 License
This project is open-source and available under the **MIT License**.

## 💡 Future Enhancements
- 🌐 **Dark Mode Support**
- 🗃️ **Pagination for Large Search Results**
- 📌 **Save Favorite Users Locally**

---

💻 Built with ❤️ by **Your Name**

