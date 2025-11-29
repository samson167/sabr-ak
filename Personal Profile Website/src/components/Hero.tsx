import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import heroImage from 'figma:asset/b11c3f50e409a06ee523a708066e83437ddfd5af.png';

interface HeroProps {
  lang: 'ar' | 'en' | 'he';
}

const content = {
  ar: {
    name: 'صبر',
    subtitle: 'روح لطيفة، حالم، ورجل صبور',
    location: 'عكا',
    origin: 'اللد',
    age: '41 سنة',
    profession: 'حداد ولحام'
  },
  en: {
    name: 'SABR',
    subtitle: 'A gentle soul, a dreamer, and a man of patience',
    location: 'Akko',
    origin: 'Lod',
    age: '41 years',
    profession: 'Welder & Blacksmith'
  },
  he: {
    name: 'סבר',
    subtitle: 'נשמה עדינה, חולם ואיש של סבלנות',
    location: 'עכו',
    origin: 'לוד',
    age: '41 שנים',
    profession: 'רתך וסנדלר'
  }
};

export function Hero({ lang }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = content[lang];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-[#FDFCFA] to-[#FAF7F2] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 left-20 w-1 h-32 bg-gradient-to-b from-black/5 to-transparent"></div>
      <div className="absolute bottom-40 right-20 w-1 h-32 bg-gradient-to-t from-black/5 to-transparent"></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="container mx-auto px-6 py-32 text-center"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-black/5 rounded-full blur-3xl scale-110"></div>
            <img
              src={heroImage}
              alt="Sabr"
              className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] object-cover rounded-full shadow-2xl"
            />
            <div className="absolute inset-0 rounded-full ring-1 ring-black/5"></div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-8 tracking-wide"
          style={{ direction: lang === 'ar' || lang === 'he' ? 'rtl' : 'ltr' }}
        >
          {t.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 text-black/60 max-w-2xl mx-auto text-xl"
          style={{ direction: lang === 'ar' || lang === 'he' ? 'rtl' : 'ltr' }}
        >
          {t.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-wrap justify-center gap-8 max-w-3xl mx-auto"
        >
          <InfoPill label={t.location} />
          <InfoPill label={t.age} />
          <InfoPill label={t.profession} />
        </motion.div>
      </motion.div>
    </section>
  );
}

function InfoPill({ label }: { label: string }) {
  return (
    <div className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-black/5 shadow-sm">
      <p className="text-black/70">{label}</p>
    </div>
  );
}
