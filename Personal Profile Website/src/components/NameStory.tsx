import { motion } from 'motion/react';
import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

interface NameStoryProps {
  lang: 'ar' | 'en' | 'he';
}

const content = {
  ar: {
    line1: 'اسمي صبر',
    line2: 'وهو يعني "الصبر"',
    line3: 'ويصفني تماماً'
  },
  en: {
    line1: 'My name is Sabr',
    line2: 'It means "Patience"',
    line3: 'And it describes me perfectly'
  },
  he: {
    line1: 'שמי סבר',
    line2: 'זה אומר "סבלנות"',
    line3: 'וזה מתאר אותי בצורה מושלמת'
  }
};

export function NameStory({ lang }: NameStoryProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const t = content[lang];
  const isRTL = lang === 'ar' || lang === 'he';

  return (
    <section
      ref={ref}
      className="py-40 px-6 bg-gradient-to-b from-[#FAF7F2] to-white relative overflow-hidden"
      style={{ direction: isRTL ? 'rtl' : 'ltr' }}
    >
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-32 h-px bg-gradient-to-r from-transparent to-black/10"></div>
      <div className="absolute top-1/2 right-0 w-32 h-px bg-gradient-to-l from-transparent to-black/10"></div>

      <div className="container mx-auto max-w-4xl text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <h3 className="mb-2">{t.line1}</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-2"
        >
          <p className="text-black/60 text-xl">{t.line2}</p>
          <p className="text-black/60 text-xl italic">{t.line3}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16"
        >
          <div className="inline-flex items-center gap-2">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-black/20"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-black/30"></div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-black/20"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
