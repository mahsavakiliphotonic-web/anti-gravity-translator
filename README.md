# Anti-Gravity Translation App  

An intuitive web application that translates live voice input between **English** and **Finnish** with near-zero latency.

---

## 🛠 Project Overview

### 1️⃣ Code Generation

The core logic was built using **Anti-Gravity**.

Instead of auto-deploying the app, the source code was generated locally using the following prompt:

> **Prompt:**  
> Give me a code for making a language translator which listens and translates the language to Finnish language. If the language is Finnish, it converts into English. I want output in text, but input should be live voice. There should be no latency. I should have a toggle button to have choice from English to Finnish or Finnish to English.
>

---

### 2️⃣ Local Environment Setup

Since this application uses the **Web Speech API**, it must run in a secure context (local server) to access the microphone.

#### Step 1: Navigate to the project directory
Using Terminal

cd "translation app"

Step 2: Launch the local server

npx serve

Step 3: Open in Browser

Open:

http://localhost:3000

Important:
Use Google Chrome or Microsoft Edge for full Web Speech API support.

📸 Screenshots
<img width="1197" height="736" alt="image" src="https://github.com/user-attachments/assets/b00cdebb-e100-458c-ab72-d7b80b6c1083" />
<img width="1203" height="747" alt="image" src="https://github.com/user-attachments/assets/533e8efd-6335-4a21-9c79-662a5cf61b0d" />
<img width="1205" height="740" alt="image" src="https://github.com/user-attachments/assets/8130a7bd-82da-43ac-9820-95bbefcf959d" />

📤 How to Move to GitHub
Step 1: Create a Repository on GitHub
Log in to your GitHub account.

Click the + icon in the top right and select New repository.

Name it anti-gravity-translator.

Set visibility to Public.

Important: Do not check the boxes for "Add a README" or ".gitignore" (as these already exist in your local folder).

Click Create repository and copy the HTTPS URL.

Step 2: Initialize Git Locally
Open your terminal in the project folder and execute these commands:

Bash
1. Initialize the folder as a Git repository

git init

2. Add all your files to the staging area

git add .

3. Save your changes with a message
git commit -m "Initial commit: Anti-gravity translator ready for deployment"

Step 3: Link and Push to GitHub

Connect your local folder to your GitHub repository. (Replace the URL with your actual URL from Step 1):

4. Point your local code to your GitHub URL

git remote add origin https://github.com/YOUR_USERNAME/anti-gravity-translator.git

5. Rename your default branch to 'main'

git branch -M main

6. Upload your code

git push -u origin main

Step 4: Verify the Results
# Home Work Task:
Tweak your application Using GEMINI CLI.

Upload the link of tweaked Git repo in a doc file

Below are detailed instructions on how to Use GEMINI CLI.

📸 Screenshots
<img width="1238" height="882" alt="image" src="https://github.com/user-attachments/assets/6be54b65-1d0e-4726-a223-cca64f14abd8" />
<img width="1237" height="888" alt="image" src="https://github.com/user-attachments/assets/eca57d9c-a384-49d8-8b53-0582db1724cc" />
