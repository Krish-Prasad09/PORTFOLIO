# 🌌 Harish's 3D Portfolio Website 🚀

Welcome to my interactive **3D Portfolio Website**! Crafted using cutting-edge frontend libraries and modern 3D rendering technologies, this site acts as a digital gallery of my engineering journey, projects, and experiences.

✨ **Live Deployed Link:** [portfolio-eta-drab-22.vercel.app](https://portfolio-eta-drab-22.vercel.app/)

---

## 📸 Overview & Badges

[![Website Status](https://img.shields.io/website?up_color=green&up_message=online&url=https%3A%2F%2Fportfolio-eta-drab-22.vercel.app%2F&style=for-the-badge)](https://portfolio-eta-drab-22.vercel.app/)
[![React Version](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite Version](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=for-the-badge&logo=vite)](https://vite.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-r174-black?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

## 🌟 Key Features

*   **🕶️ Immersive 3D Graphics**: Integrates **React Three Fiber (R3F)**, **Drei**, and **Spline 3D** for realistic spatial interaction.
*   **🎭 Smooth Animations**: Built with **Framer Motion** and **GSAP** for micro-interactions, page transitions, and timeline storytelling.
*   **🌀 Creative Effects & Scroll**: Utilizes **Shery.js** for mouse-following effects and **Locomotive Scroll** for high-quality inertia scrolling.
*   **📱 Responsive Layout**: Optimised for both desktop monitors and mobile/tablet touchscreens with adaptive layouts and custom loaders.
*   **🌌 Dynamic Canvas Backgrounds**: Styled dynamically using **Vanta.js** particle/galaxy simulations.

---

## 🛠️ The Tech Stack

| Category | Technologies / Libraries |
| :--- | :--- |
| **Core Framework** | React 19, React Router DOM v7, Vite 6 |
| **Styling** | Tailwind CSS v4, Vanilla CSS |
| **3D Rendering** | Three.js, React Three Fiber (R3F), `@react-three/drei`, Spline |
| **Animations & Effects** | Framer Motion, GSAP, SheryJS, Vanta.js |
| **UI Components** | Swiper (carousel), Lucide Icons, React Icons |

---

## 📁 Interactive Showcases

Click on the headers below to interactively expand the sections!

<details>
<summary><b>🚀 Click to View Featured Projects</b></summary>

### 1. 💼 [HireU — AI Career Assistant](https://hire-u-career-assistant.vercel.app)
*   **Tagline:** A full-stack AI career platform for resumes and interviews.
*   **Key Capabilities:**
    *   📄 **ATS Resume Analysis**: Computes compatibility scores from PDF uploads.
    *   🤝 **Job Matching**: Intelligent alignment of resume with target job descriptions.
    *   🎓 **AI Interviews**: Dynamically generates tailored preparatory questions.
    *   📄 **LaTeX Export**: One-click exports ready for Overleaf.
    *   🔑 **Security**: Google OAuth + JWT authorization.
*   **Tech Stack:** `React 19`, `TypeScript`, `Node.js`, `MongoDB`, `Gemini AI`, `Razorpay`

### 2. 🎙️ [EmoSense — AI Interview Analyser](https://huggingface.co/spaces/Krizzh/EmoSense-Interview-Analyser)
*   **Tagline:** Deployed as a containerised service on Hugging Face Spaces.
*   **Key Capabilities:**
    *   🗣️ **Speech Classification**: Integrates `Wav2Vec2` (fine-tuned on CREMA-D) for detecting vocal emotions.
    *   📝 **Smart Transcript**: OpenAI `Whisper` for audio-to-text translation.
    *   📊 **NLP Analytics**: Scores speech pace (WPM), grammar errors, filler-word counts, and vocabulary variety.
*   **Tech Stack:** `Python`, `PyTorch`, `Flask`, `Whisper`, `Wav2Vec2`, `Docker`

### 3. 🧠 [RankUp — Smart Learning Assistant](https://github.com/Krish-Prasad09/RankUp-LearningAssistant)
*   **Tagline:** AI study room for documents and multiplayer quizzes.
*   **Key Capabilities:**
    *   📑 **Doc Parser**: Summarises uploaded academic materials.
    *   🃏 **Flashcards**: Automatically extracts questions and formats study flashcards.
    *   🎮 **Multiplayer Quizzes**: Gamified quiz rooms for active recollection.
    *   💬 **Context Chat**: Query document doubts in real-time.
*   **Tech Stack:** `React`, `Node.js`, `Express`, `MongoDB`, `Gemini API`

</details>

<details>
<summary><b>💼 Click to View Experience & Education</b></summary>

*   **🎓 2024 - 2028 (Expected) | B.Tech in Electrical Engineering**
    *   *Institution:* **IIT Indore (Indian Institute of Technology, Indore)**
    *   *Focus:* Core electrical systems, signals & systems, and full-stack software development combined with AI.
*   **🛠️ 2024 | Frontend & JavaScript Practice Projects**
    *   *Focus:* Developed multiple DOM, API, and CSS animation mini-projects to master the fundamentals of layout design.
*   **⚡ 2025 | Analog Signal Processing Developer (AmpaNova)**
    *   *Club:* IIT Indore System-on-Chip (SoC) Club (IITISOC)
    *   *Focus:* Hardware signals acquisition, operational amplifier designs, and active filters simulations.
*   **🤖 2026 | Full-Stack Project Development**
    *   Delivered major projects: **HireU**, **EmoSense**, and **RankUp** integrating LLMs, audio networks, and complex database storage.

</details>

---

## 🛠️ Project Structure

```bash
HarishPortfolio/
├── public/              # Static assets (3D models, textures, favicons)
├── src/
│   ├── assets/          # Images and structural assets
│   ├── components/      # Global Layout UI (Navbar, Footer)
│   ├── layouts/         # Section layout frames (AboutLayout, ContactLayout, etc.)
│   ├── pages/           # Core view pages (Home, About, Contact, Loader, Projects, Skills)
│   ├── jsfiles/         # Local dataset configurations (experience, projects data)
│   ├── App.jsx          # Route management & global states
│   └── main.jsx         # App bootstrapping
├── vite.config.js       # Vite build configurations
└── package.json         # Scripts and npm dependencies
```

---

## ⚙️ Local Setup and Installation

Follow these steps to run the portfolio locally on your machine:

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/Krish-Prasad09/PORTFOLIO.git
    cd PORTFOLIO
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Your local server will spin up, typically at `http://localhost:5173`.

4.  **Production Build**
    To bundle the project for distribution:
    ```bash
    npm run build
    ```

---

## ✉️ Get in Touch!

Feel free to connect or drop suggestions! Let's build something epic together.

*   🌐 **Portfolio Link:** [https://portfolio-eta-drab-22.vercel.app/](https://portfolio-eta-drab-22.vercel.app/)
*   😺 **GitHub:** [@Krish-Prasad09](https://github.com/Krish-Prasad09)

---

⭐ If you like this portfolio, don't forget to **Star** the repository!
