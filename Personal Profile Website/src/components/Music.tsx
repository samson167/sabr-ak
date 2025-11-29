import { motion } from 'motion/react';
import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Music as MusicIcon } from 'lucide-react';

interface MusicProps {
  lang: 'ar' | 'en' | 'he';
}

const content = {
  ar: {
    title: 'الأغاني التي أحبها',
    subtitle: 'موسيقى تعكس روحي'
  },
  en: {
    title: 'Songs I Love',
    subtitle: 'Music that reflects my soul'
  },
  he: {
    title: 'השירים שאני אוהב',
    subtitle: 'מוזיקה המשקפת את נשמתי'
  }
};

const videos = [
  'https://www.youtube.com/embed/O--o-O-ABBw',
  'https://www.youtube.com/embed/T3pr4tpHyGk',
  'https://www.youtube.com/embed/r5N3fR236Qw',
  'https://www.youtube.com/embed/3qrnQJkSl78'
];

export function Music({ lang }: MusicProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const t = content[lang];
  const isRTL = lang === 'ar' || lang === 'he';

  return (
    <section
      ref={ref}
      className="py-32 px-6 bg-gradient-to-b from-[#FAF7F2] to-white relative"
      style={{ direction: isRTL ? 'rtl' : 'ltr' }}
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-6">
            <MusicIcon size={24} className="text-black/70" />
          </div>
          <h2 className="mb-4">{t.title}</h2>
          <p className="text-black/50 text-lg">{t.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="absolute -inset-2 bg-gradient-to-br from-black/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
                <iframe
                  src={video}
                  title={`Music video ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
