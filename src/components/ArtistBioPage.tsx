import { motion } from 'motion/react';
import { exhibition } from '../data/exhibition';
import { useLang } from '../i18n';

const BASE = import.meta.env.BASE_URL;

function Section({ head, items }: { head: string; items: { ko: string; en: string }[] }) {
  const { t } = useLang();
  return (
    <section className="flex flex-col gap-2.5">
      <h2 className="text-[12px] tracking-[0.3em] text-[#C9A227]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        {head}
      </h2>
      <ul className="flex flex-col gap-2">
        {items.map((it, i) => (
          <li
            key={i}
            className="text-[13.5px] text-[#c5c5cc] leading-[1.85] break-keep"
            style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 300 }}
          >
            {t(it)}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function ArtistBioPage() {
  const { t } = useLang();
  const { bio } = exhibition;
  return (
    <div className="w-full h-full relative overflow-hidden" style={{ background: '#0B0E17' }}>
      {/* 작업 사진 — 흐린 배경 (고정) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <img
          src={`${BASE}photos/artist1.jpg`}
          alt=""
          className="w-full h-full object-cover"
          style={{ opacity: 0.16 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(11,14,23,0.78) 0%, rgba(11,14,23,0.86) 50%, rgba(11,14,23,0.94) 100%)',
          }}
        />
      </div>

      {/* 스크롤 콘텐츠 */}
      <div
        className="absolute inset-0 overflow-y-auto px-7 py-16 z-10"
        style={{ touchAction: 'pan-y pinch-zoom' }}
      >
        <div className="max-w-xl mx-auto pb-20">
          <motion.header
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <p className="text-[11px] tracking-[0.4em] text-[#C9A227] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              PROFILE
            </p>
            <h1 className="text-[28px] text-[#F5F1E8] tracking-[0.15em] mb-1.5" style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500 }}>
              {t(exhibition.artist)}
            </h1>
            <p className="text-[13px] italic tracking-[0.2em] text-[#9a9aa3]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Ok Mihwa Profile
            </p>
            <div className="w-10 h-[1px] bg-[#C9A227]/50 mx-auto mt-6" />
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-9"
          >
            <Section head={t(bio.education.head)} items={bio.education.items} />
            <Section head={t(bio.exhibitions.head)} items={bio.exhibitions.items} />
            <Section head={t(bio.awards.head)} items={bio.awards.items} />
            <Section head={t(bio.career.head)} items={bio.career.items} />

            <div className="flex flex-col gap-1 pt-2 text-[12.5px] text-[#9a9aa3]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              <p>{exhibition.email}</p>
              <p>Mobile. {exhibition.contact}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
