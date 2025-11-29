import { motion } from 'motion/react';
import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Facebook, User } from 'lucide-react';

interface ContactProps {
  lang: 'ar' | 'en' | 'he';
}

const content = {
  ar: {
    title: 'تواصل معي',
    subtitle: 'أسعد بالتواصل معك',
    name: 'الاسم',
    nameValue: 'صبر عبد القادر',
    facebook: 'تابعني على فيسبوك'
  },
  en: {
    title: 'Get in Touch',
    subtitle: "I'd love to hear from you",
    name: 'Name',
    nameValue: 'Sabr Abdel Kadr',
    facebook: 'Follow me on Facebook'
  },
  he: {
    title: 'צור קשר',
    subtitle: 'אשמח לשמוע ממך',
    name: 'שם',
    nameValue: 'סבר עבד אל קאדר',
    facebook: 'עקוב אחרי בפייסבוק'
  }
};

export function Contact({ lang }: ContactProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const t = content[lang];
  const isRTL = lang === 'ar' || lang === 'he';

  return (
    <section
      ref={ref}
      className="py-32 px-6 bg-white"
      style={{ direction: isRTL ? 'rtl' : 'ltr' }}
    >
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">{t.title}</h2>
          <p className="text-black/50 text-lg">{t.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-[#FAF7F2] to-white rounded-3xl p-10 md:p-12 shadow-lg border border-black/5"
        >
          <div className="space-y-8">
            <div className="flex items-start gap-4 pb-8 border-b border-black/5">
              <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center flex-shrink-0">
                <User size={20} className="text-black/70" />
              </div>
              <div className="flex-1">
                <p className="text-black/50 mb-2">{t.name}</p>
                <p className="text-xl text-black">{t.nameValue}</p>
              </div>
            </div>

            <div>
              <p className="text-black/50 mb-6">{t.facebook}</p>
              <a
                href="https://www.facebook.com/saaber.saab"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full hover:bg-black/80 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Facebook size={22} />
                <span className="font-medium">Facebook</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
