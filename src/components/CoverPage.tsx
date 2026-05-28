import { motion } from 'motion/react';
import { exhibition } from '../data/exhibition';
import { useLang } from '../i18n';

const BASE = import.meta.env.BASE_URL;

export default function CoverPage() {
  const { t, lang } = useLang();
  return (
    <div className="w-full h-full relative overflow-hidden" style={{ background: '#0B0E17' }}>
      {/* 대표작 배경 */}
      <div className="absolute inset-0">
        <img
          src={`${BASE}artworks/1.jpg`}
          alt=""
          className="w-full h-full object-cover"
          style={{ opacity: 0.5 }}
        />
        {/* 심연 그라데이션 오버레이 */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(11,14,23,0.55) 0%, rgba(11,14,23,0.35) 38%, rgba(11,14,23,0.82) 78%, rgba(11,14,23,0.97) 100%)',
          }}
        />
      </div>

      {/* 상단 — 회차 */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute top-[12%] left-0 right-0 text-center"
      >
        <p className="text-[12px] tracking-[0.45em] text-[#C9A227]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          {t(exhibition.edition).toUpperCase()}
        </p>
      </motion.div>

      {/* 중앙 하단 — 타이틀 */}
      <div className="absolute bottom-0 left-0 right-0 px-8 pb-[16%] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.5, ease: 'easeOut' }}
        >
          <div className="w-10 h-[1px] bg-[#C9A227]/60 mx-auto mb-7" />
          <h1
            className="text-[34px] md:text-[46px] leading-tight text-[#F5F1E8] mb-4 break-keep"
            style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500, letterSpacing: '0.06em' }}
          >
            {t(exhibition.title)}
          </h1>
          {lang === 'ko' && (
            <p
              className="text-[15px] md:text-[18px] italic text-[#C9A227] tracking-wide mb-9"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              The Journey of the Übermensch
            </p>
          )}

          <p className="text-[19px] tracking-[0.3em] text-[#F5F1E8]/90 mb-2" style={{ fontFamily: "'Noto Serif KR', serif" }}>
            {t(exhibition.artist)}
          </p>
          <p className="text-[11px] tracking-[0.35em] text-[#9a9aa3] mb-7" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            OK MIHWA
          </p>

          <div className="w-6 h-[1px] bg-[#C9A227]/40 mx-auto mb-5" />
          <p className="text-[12.5px] tracking-[0.12em] text-[#b8b8c0] leading-relaxed break-keep" style={{ fontFamily: "'Noto Serif KR', serif" }}>
            {t(exhibition.venue)}
          </p>
          <p className="text-[12px] tracking-[0.2em] text-[#8a8a93] mt-1.5" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            {t(exhibition.period)}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
