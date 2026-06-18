import hireu from '../assets/projects/hireu.png'
import emosense from '../assets/projects/emosense.png'
import rankup from '../assets/projects/rankup.png'

export const slidesData = [
    {
        imgSrc: hireu,
        title: 'HireU — AI Career Assistant',
        description: 'A full-stack AI career platform offering ATS resume analysis (from PDF uploads), job matching, tailored interview question generation, and interactive resume building. Features secure Google OAuth, JWT authentication, a request credit system, and Overleaf-ready LaTeX exports.',
        visit: 'https://hire-u-career-assistant.vercel.app',
        categories: ['React 19', 'TypeScript', 'Node.js', 'MongoDB', 'Gemini AI', 'Razorpay']
    },
    {
        imgSrc: emosense,
        title: 'EmoSense — AI Interview Analyser',
        description: 'An AI-powered mock interview coach deployed as a Docker container on Hugging Face Spaces. Combines Wav2Vec2 (fine-tuned on CREMA-D) for speech emotion classification with OpenAI Whisper for transcription, performing NLP analysis of filler words, grammar, speaking pace (WPM), and vocabulary diversity.',
        visit: 'https://huggingface.co/spaces/Krizzh/EmoSense-Interview-Analyser',
        categories: ['Python', 'PyTorch', 'Flask', 'Whisper', 'Wav2Vec2', 'Docker']
    },
    {
        imgSrc: rankup,
        title: 'RankUp — Smart Learning Assistant',
        description: 'An AI-driven study platform that analyses documents to generate summaries, interactive flashcards, and multiplayer quizzes. Users can query document doubts directly through an integrated AI chat interface backed by Google Gemini and MongoDB.',
        visit: 'https://github.com/Krish-Prasad09/RankUp-LearningAssistant',
        categories: ['React', 'Node.js', 'Express', 'MongoDB', 'Gemini API']
    }
];