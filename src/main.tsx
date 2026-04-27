import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n'
import { detectLanguageFromGeo } from './i18n'

// Run geo-based language detection once (no-op if a language is already stored).
detectLanguageFromGeo();

createRoot(document.getElementById("root")!).render(<App />);
