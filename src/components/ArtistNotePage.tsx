import { motion } from 'motion/react';
import { exhibition } from '../data/exhibition';
import { useLang } from '../i18n';

export default function ArtistNotePage() {
  const { t } = useLang();
  const paras = t(exhibition.note).split('\n\n');
  return (
    <div
      className="w-full h-full overflow-y-auto px-7 py-16 relative"
      style={{ background: '#0B0E17', touchAction: 'pan-y pinch-zoom' }}
    >
      <div className="max-w-2xl mx-auto pb-20 flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-[11px] tracking-[0.4em] text-[#C9A227] mb-7"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          ARTIST'S NOTE
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[16px] md:text-[18px] italic text-[#F5F1E8] leading-[1.9] text-center break-keep mb-12 px-2"
          style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 400 }}
        >
          {t(exhibition.noteEpigraph)}
        </motion.p>

        <div className="w-10 h-[1px] bg-[#C9A227]/50 mb-12" />

        <div className="flex flex-col gap-5">
          {paras.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 + i * 0.1 }}
              className="text-[14.5px] md:text-[15.5px] text-[#cfcfd6] leading-[2.0] tracking-wide break-keep text-left"
              style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 300 }}
            >
              {p}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2, ease: 'backOut' }}
          className="mt-12 flex flex-col items-center gap-3"
        >
          <span className="text-[17px] text-[#F5F1E8] tracking-[0.25em]" style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500 }}>
            {t(exhibition.artist)}
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
        </motion.div>
      </div>
    </div>
  );
}
