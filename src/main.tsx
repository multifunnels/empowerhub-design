import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n'
import { detectLanguageFromGeo } from './i18n'
import washiPaper from './assets/jp/washi-paper.jpg'

// Run geo-based language detection once (no-op if a language is already stored).
detectLanguageFromGeo();

// Inject the washi-paper texture as a CSS variable so index.css can reference it.
document.documentElement.style.setProperty('--washi-paper', `url(${washiPaper})`);

createRoot(document.getElementById("root")!).render(<App />);

