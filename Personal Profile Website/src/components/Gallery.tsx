import { motion } from 'motion/react';
import { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { Camera } from 'lucide-react';
import img1 from 'figma:asset/4e42aba8b9be138ae31d4331f7304a0f47f543b5.png';
import img2 from 'figma:asset/a7adcd21ca485cb64d786763371e04c167845b6a.png';
import img3 from 'figma:asset/b11c3f50e409a06ee523a708066e83437ddfd5af.png';

interface GalleryProps {
  lang: 'ar' | 'en' | 'he';
}

const content = {
  ar: {
    title: 'معرض الصور',
    subtitle: 'لحظات من حياتي'
  },
  en: {
    title: 'Gallery',
    subtitle: 'Moments of my life'
  },
  he: {
    title: 'גלריה',
    subtitle: 'רגעים מחיי'
  }
};

const images = [
  { src: img1, tall: false },
  { src: img2, tall: true },
  { src: img3, tall: false }
];

export function Gallery({ lang }: GalleryProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const t = content[lang];
  const isRTL = lang === 'ar' || lang === 'he';
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      className="py-32 px-6 bg-white relative"
      style={{ direction: isRTL ? 'rtl' : 'ltr' }}
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FAF7F2] shadow-md mb-6">
            <Camera size={24} className="text-black/70" />
          </div>
          <h2 className="mb-4">{t.title}</h2>
          <p className="text-black/50 text-lg">{t.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className={`group relative overflow-hidden rounded-3xl ${image.tall ? 'md:row-span-2' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={`Gallery ${index + 1}`}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredIndex === index ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-3xl pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
