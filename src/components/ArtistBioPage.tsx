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
            className="text-[14px] text-[#c5c5cc] leading-[1.8] break-keep"
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
    <div
      className="w-full h-full overflow-y-auto px-7 py-16 relative"
      style={{ background: '#0B0E17', touchAction: 'pan-y pinch-zoom' }}
    >
      <div className="max-w-xl mx-auto pb-20">
        <motion.header
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden ring-1 ring-[#C9A227]/40">
            <img src={`${BASE}photos/artist1.jpg`} alt={t(exhibition.artist)} className="w-full h-full object-cover" />
          </div>
          <h1 className="text-[26px] text-[#F5F1E8] tracking-[0.15em] mb-1.5" style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500 }}>
            {t(exhibition.artist)}
          </h1>
          <p className="text-[11px] tracking-[0.35em] text-[#9a9aa3]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            OK MIHWA
          </p>
          <div className="w-10 h-[1px] bg-[#C9A227]/50 mx-auto mt-6" />
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col gap-8"
        >
          <Section head={t(bio.education.head)} items={bio.education.items} />
          <Section head={t(bio.exhibitions.head)} items={bio.exhibitions.items} />
          <Section head={t(bio.awards.head)} items={bio.awards.items} />
        </motion.div>
      </div>
    </div>
  );
}
