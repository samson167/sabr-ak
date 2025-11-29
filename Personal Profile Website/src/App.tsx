import { useState, useEffect } from 'react';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Music } from './components/Music';
import { Gallery } from './components/Gallery';
import { NameStory } from './components/NameStory';
import { Contact } from './components/Contact';

type Language = 'ar' | 'en' | 'he';

function detectLanguage(): Language {
  const userLang = navigator.language.toLowerCase();
  
  if (userLang.startsWith('ar')) return 'ar';
  if (userLang.startsWith('he')) return 'he';
  return 'en';
}

export default function App() {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    const detectedLang = detectLanguage();
    setLanguage(detectedLang);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <LanguageSwitcher currentLang={language} onLanguageChange={setLanguage} />
      
      <Hero lang={language} />
      
      <About lang={language} />
      
      <Music lang={language} />
      
      <Gallery lang={language} />
      
      <NameStory lang={language} />
      
      <Contact lang={language} />
      
      <footer className="py-16 text-center bg-gradient-to-t from-[#FAF7F2] to-white border-t border-black/5">
        <div className="mb-4">
          <div className="inline-flex items-center gap-2">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-black/10"></div>
            <div className="w-1 h-1 rounded-full bg-black/20"></div>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-black/10"></div>
          </div>
        </div>
        <p className="text-black/30 text-sm">© 2025 Sabr • Made with patience</p>
      </footer>
    </div>
  );
}
