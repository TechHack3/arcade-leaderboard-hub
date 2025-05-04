# Arcade Leaderboard Hub

This guide will help you set up and run the Arcade Leaderboard Hub project on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

1. **Node.js** (v16 or higher) and npm (Node Package Manager)
   - [Download Node.js](https://nodejs.org/)
2. **Git** (to clone the repository)
   - [Download Git](https://git-scm.com/)
3. **Code Editor** (e.g., Visual Studio Code)
   - [Download VS Code](https://code.visualstudio.com/)

## Steps to Set Up and Run Locally

### 1. Clone the Repository
Open your terminal and run the following command to clone the repository:
```bash
git clone https://github.com/your-username/arcade-leaderboard-hub.git
```

## Navigate to the project directory:
```bash
cd arcade-leaderboard-hub
```

### 2. Install Dependencies
Install the required dependencies using npm:

```bash
npm install
```

### 3. Configure Environment Variables
If the project requires environment variables (e.g., API keys), create a `.env` file in the root directory and add the necessary variables.

### 4. Start the Development Server
Run the following command to start the development server:
```bash
npm run dev
```
This will start the server and make the application available at http://localhost:8080 (or the port specified in the terminal).

### 5. Open the Application
Open your browser and navigate to:
```bash
http://localhost:8080
```

### 6. Build for Production (Optional)
To build the project for production, run:
```bash
npm run build
```
The production-ready files will be available in the dist folder.

<hr/>

**ℹ️ Note: If you are pushing changes to this repository, please use a new branch:**
```bash
git checkout -b your-feature-branch
git add .
git commit -m "Update README with local setup guide"
git push origin your-feature-branch
```
Then create a pull request from your branch to `main`.
```bash
git pull origin main
```
<hr/>

**Project Structure**
src/: Contains the source code (React components, styles, and assets).
public/: Contains static assets like images and icons.
index.html: The main HTML file.
vite.config.ts: Configuration for Vite (build tool).

**Troubleshooting**
If you encounter issues, ensure all dependencies are installed and the correct Node.js version is being used.
Check the terminal for error messages and resolve them as needed.

**Contributing**
Feel free to fork the repository, make changes, and submit a pull request. Contributions are welcome!

**License**
This project is licensed under the **GPL-3.0 license**.

