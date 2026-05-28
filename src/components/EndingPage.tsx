import { motion } from 'motion/react';
import { exhibition } from '../data/exhibition';
import { useLang } from '../i18n';

export default function EndingPage() {
  const { t, lang } = useLang();
  return (
    <div className="w-full h-full flex items-center justify-center px-8 relative" style={{ background: '#0B0E17' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-md"
      >
        <div className="w-10 h-[1px] bg-[#C9A227]/60 mx-auto mb-9" />

        <h1
          className="text-[26px] md:text-[30px] text-[#F5F1E8] leading-tight mb-3 break-keep"
          style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500, letterSpacing: '0.05em' }}
        >
          {t(exhibition.title)}
        </h1>
        {lang === 'ko' && (
          <p className="text-[14px] italic text-[#C9A227] tracking-wide mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            The Journey of the Übermensch
          </p>
        )}
        <p className="text-[15px] tracking-[0.25em] text-[#dcdce2] mb-10" style={{ fontFamily: "'Noto Serif KR', serif" }}>
          {t(exhibition.artist)} · OK MIHWA
        </p>

        <div className="flex flex-col gap-2.5 text-[13px] text-[#b0b0b8] leading-relaxed" style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 300 }}>
          <p className="break-keep">{t(exhibition.venue)}</p>
          <p className="break-keep text-[12px] text-[#8a8a93]">{t(exhibition.address)}</p>
          <p className="text-[12px] tracking-[0.1em] text-[#9a9aa3] mt-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>{t(exhibition.period)}</p>
          <p className="text-[12px] text-[#9a9aa3]">{t(exhibition.opening)}</p>
        </div>

        <div className="w-6 h-[1px] bg-[#C9A227]/40 mx-auto my-8" />

        <div className="flex flex-col gap-1.5 text-[12px] text-[#8a8a93]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          <p>{exhibition.contact}</p>
          <p>{exhibition.email}</p>
        </div>

        <p className="text-[10px] tracking-[0.2em] text-[#5a5a62] mt-10" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          © 2026 OK MIHWA. ALL RIGHTS RESERVED.
        </p>
      </motion.div>
    </div>
  );
}
