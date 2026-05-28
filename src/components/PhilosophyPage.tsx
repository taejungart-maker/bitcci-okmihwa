import { motion } from 'motion/react';
import { exhibition } from '../data/exhibition';
import { useLang } from '../i18n';

export default function PhilosophyPage() {
  const { t } = useLang();
  return (
    <div
      className="w-full h-full overflow-y-auto px-7 py-16 relative"
      style={{ background: '#0B0E17', touchAction: 'pan-y pinch-zoom' }}
    >
      <div className="max-w-2xl mx-auto pb-20">
        <motion.header
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <p className="text-[11px] tracking-[0.4em] text-[#C9A227] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            PHILOSOPHY &amp; TECHNIQUE
          </p>
          <h1 className="text-[22px] text-[#F5F1E8] tracking-[0.1em] mb-2" style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500 }}>
            {t(exhibition.philosophyTitle)}
          </h1>
          <div className="w-10 h-[1px] bg-[#C9A227]/50 mx-auto" />
        </motion.header>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-[15px] md:text-[16.5px] italic text-[#dcdce2] leading-[2.0] text-center break-keep mb-14 whitespace-pre-line"
          style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 300 }}
        >
          {t(exhibition.philosophyIntro)}
        </motion.p>

        <div className="flex flex-col gap-10">
          {exhibition.philosophy.map((sec, i) => (
            <motion.section
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 + i * 0.15 }}
              className="flex flex-col gap-3"
            >
              <h2 className="text-[15px] text-[#C9A227] tracking-[0.08em]" style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500 }}>
                {t(sec.head)}
              </h2>
              <p
                className="text-[14px] md:text-[15px] text-[#c5c5cc] leading-[1.95] tracking-wide break-keep text-left"
                style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 300 }}
              >
                {t(sec.body)}
              </p>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}
