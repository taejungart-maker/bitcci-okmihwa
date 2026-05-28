import { motion } from 'motion/react';
import { useLang } from '../i18n';
import type { Artwork } from '../data/exhibition';

const BASE = import.meta.env.BASE_URL;

interface Props {
  artwork: Artwork;
  index: number;
}

export default function ArtworkPage({ artwork }: Props) {
  const { lang } = useLang();
  const title = lang === 'ko' ? artwork.titleKo : artwork.titleEn;
  const message = lang === 'ko' ? artwork.messageKo : artwork.messageEn;
  const hasSize = artwork.size && !artwork.size.includes('연작');

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-5 py-12 relative" style={{ background: '#0B0E17' }}>
      {/* 작품 이미지 */}
      <motion.div
        key={artwork.id}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="flex-1 w-full flex items-center justify-center min-h-0"
      >
        <img
          src={`${BASE}${artwork.image}`}
          alt={title}
          className="max-w-full max-h-full object-contain"
          style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}
          loading="lazy"
        />
      </motion.div>

      {/* 캡션 */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="w-full shrink-0 text-center pt-7 pb-2 max-w-2xl"
      >
        <p
          className="text-[18px] md:text-[21px] italic text-[#F5F1E8] leading-snug mb-3 break-keep tracking-wide"
          style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 400 }}
        >
          {title}
        </p>
        <div className="w-7 h-[1px] bg-[#C9A227]/60 mx-auto mb-3" />
        <p className="text-[12px] tracking-[0.08em] text-[#9a9aa3]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          {hasSize ? `${artwork.size} · ` : ''}{artwork.material} · {artwork.year}
        </p>
        {message && (
          <p
            className="text-[13px] text-[#b0b0b8] leading-relaxed break-keep mt-4 px-3 italic"
            style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 300 }}
          >
            {message}
          </p>
        )}
      </motion.div>
    </div>
  );
}
