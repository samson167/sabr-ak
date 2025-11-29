import { motion } from 'motion/react';
import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import aboutImage from 'figma:asset/4e42aba8b9be138ae31d4331f7304a0f47f543b5.png';
import { Calendar, MapPin, Briefcase, Heart, Languages, Sparkles } from 'lucide-react';

interface AboutProps {
  lang: 'ar' | 'en' | 'he';
}

const content = {
  ar: {
    title: 'عن صبر',
    age: '41 سنة',
    birthday: '30 نوفمبر',
    location: 'يعيش في عكا، من اللد',
    profession: 'حداد ولحام، يعمل حالياً في مصنع لحوم',
    personality: 'لطيف، محب، طيب القلب، صبور',
    dream: 'حالم يبحث عن الحب الحقيقي',
    fitness: 'يحب الحفاظ على لياقته البدنية',
    languages: 'يتحدث العربية والعبرية بطلاقة'
  },
  en: {
    title: 'About Sabr',
    age: '41 years old',
    birthday: 'November 30',
    location: 'Lives in Akko, from Lod',
    profession: 'Welder, blacksmith, currently working in a meat factory',
    personality: 'Gentle, loving, kind, patient',
    dream: 'A dreamer looking for true love',
    fitness: 'Loves staying in good physical shape',
    languages: 'Fluent in Arabic & Hebrew'
  },
  he: {
    title: 'אודות סבר',
    age: '41 שנים',
    birthday: '30 בנובמבר',
    location: 'גר בעכו, מלוד',
    profession: 'רתך, סנדלר, עובד כרגע במפעל בשר',
    personality: 'עדין, אוהב, טוב לב, סבלני',
    dream: 'חולם המחפש אהבה אמיתית',
    fitness: 'אוהב לשמור על כושר גופני טוב',
    languages: 'דובר ערבית ועברית בשטף'
  }
};

export function About({ lang }: AboutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const t = content[lang];
  const isRTL = lang === 'ar' || lang === 'he';

  return (
    <section
      ref={ref}
      className="py-32 px-6 bg-white relative"
      style={{ direction: isRTL ? 'rtl' : 'ltr' }}
    >
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          {t.title}
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <InfoCard icon={<Calendar size={20} />} text={`${t.age} • ${t.birthday}`} delay={0.3} isInView={isInView} />
            <InfoCard icon={<MapPin size={20} />} text={t.location} delay={0.4} isInView={isInView} />
            <InfoCard icon={<Briefcase size={20} />} text={t.profession} delay={0.5} isInView={isInView} />
            
            <div className="my-8 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>
            
            <InfoCard icon={<Heart size={20} />} text={t.personality} delay={0.6} isInView={isInView} />
            <InfoCard icon={<Sparkles size={20} />} text={t.dream} delay={0.7} isInView={isInView} />
            <InfoCard icon={<Languages size={20} />} text={t.languages} delay={0.8} isInView={isInView} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-black/5 to-transparent rounded-3xl"></div>
              <img
                src={aboutImage}
                alt="Sabr"
                className="relative w-full max-w-lg h-auto object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, text, delay, isInView }: { icon: React.ReactNode; text: string; delay: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex items-start gap-4 p-5 bg-[#FAF7F2] rounded-xl hover:shadow-md transition-shadow duration-300"
    >
      <div className="mt-1 text-black/50">
        {icon}
      </div>
      <p className="text-black/80 flex-1">{text}</p>
    </motion.div>
  );
}
