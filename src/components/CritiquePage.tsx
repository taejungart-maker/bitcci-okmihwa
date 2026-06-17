import { motion } from 'motion/react';
import { exhibition } from '../data/exhibition';
import { useLang } from '../i18n';

export default function CritiquePage() {
  const { t } = useLang();
  const paras = t(exhibition.critique).split('\n\n');
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
          className="text-center mb-12"
        >
          <p className="text-[11px] tracking-[0.4em] text-[#C9A227] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            CRITIQUE
          </p>
          <h1
            className="text-[20px] md:text-[23px] text-[#F5F1E8] leading-snug break-keep mb-3"
            style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500 }}
          >
            {t(exhibition.critiqueTitle)}
          </h1>
          <div className="w-10 h-[1px] bg-[#C9A227]/50 mx-auto" />
          <p
            className="text-[12.5px] md:text-[13px] text-[#9a9aa3] mt-5 tracking-wide"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            {t(exhibition.critiqueAuthor)}
          </p>
        </motion.header>

        <div className="flex flex-col gap-5">
          {paras.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.08 }}
              className="text-[14.5px] md:text-[15.5px] text-[#cfcfd6] leading-[2.0] tracking-wide break-keep text-left"
              style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 300 }}
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
}
