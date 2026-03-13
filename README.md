# Anti-Gravity Translator

A modern, real-time voice-to-text translator developed as part of a specialized AI practice lesson. This project leverages the **Web Speech API** and **MyMemory Translation API** to provide seamless, low-latency translation between English and Finnish.

## 🚀 Built with Antigravity
This project was autonomously scaffolded and implemented using **Antigravity (Gemini CLI)**. Through an interactive terminal-based workflow, we:
1.  **Defined Requirements**: Specified the need for a live voice-to-text translator with a simple English/Finnish toggle.
2.  **Architecture**: Selected a modern HTML5/CSS3/JavaScript stack for maximum browser compatibility and speed.
3.  **Real-time Integration**: Implemented `webkitSpeechRecognition` for "no-latency" voice capturing.

## 🛠️ Project Structure
- **`index.html`**: The architectural foundation. It defines the layout, including the interactive toggle, status indicators, and text display cards for input and translation.
- **`style.css`**: Provides a polished, modern aesthetic. It uses a "Clean & Alive" design philosophy with custom animations for the microphone status and a responsive grid layout.
- **`app.js`**: The engine of the application. It handles:
  - **Speech Recognition**: Configured for continuous listening and interim results.
  - **State Management**: Controls the bi-directional toggle (EN↔FI).
  - **Translation Logic**: Asynchronous fetching from the MyMemory API for instant results.

## 🏁 How to Run
To view the application locally with a proper web environment, follow these steps in your terminal:

1.  **Navigate to the folder**:
    ```powershell
    cd "D:\xamc\AI in practice\lesson\gemini_cli_lesson\Translator_App_Terminal"
    ```
2.  **Start the server**:
    ```powershell
    npx serve .
    ```
3.  **Open in Browser**: Click the local link provided by the terminal (usually `http://localhost:3000`).

## 📤 Deployment Steps Performed
- **Git Initialization**: `git init`
- **Staging & Committing**: `git add .` and `git commit -m "Initial commit: Anti-gravity translator ready for deployment"`
- **GitHub Connection**: `git remote add origin https://github.com/mahsavakiliphotonic-web/anti-gravity-translator`
- **Pushing**: `git push -u origin main`

---
*Created during the Gemini CLI (Antigravity) AI Practice Lesson.*
