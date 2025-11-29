import { Globe } from 'lucide-react';
import { motion } from 'motion/react';

interface LanguageSwitcherProps {
  currentLang: 'ar' | 'en' | 'he';
  onLanguageChange: (lang: 'ar' | 'en' | 'he') => void;
}

export function LanguageSwitcher({ currentLang, onLanguageChange }: LanguageSwitcherProps) {
  const languages = [
    { code: 'ar' as const, label: 'عربي' },
    { code: 'en' as const, label: 'EN' },
    { code: 'he' as const, label: 'עב' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-6 right-6 z-50 flex items-center gap-3 bg-white/95 backdrop-blur-md px-5 py-3 rounded-full shadow-lg border border-black/5"
    >
      <Globe size={18} className="text-black/50" />
      <div className="flex gap-1">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => onLanguageChange(lang.code)}
            className={`px-4 py-1.5 rounded-full transition-all duration-300 ${
              currentLang === lang.code
                ? 'bg-black text-white shadow-md'
                : 'text-black/50 hover:text-black hover:bg-black/5'
            }`}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
