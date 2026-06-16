import { motion } from 'motion/react';
import { exhibition } from '../data/exhibition';
import { useLang } from '../i18n';

export default function ForewordPage() {
  const { lang } = useLang();
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
          <p className="text-[11px] tracking-[0.4em] text-[#C9A227] mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            FOREWORD
          </p>
          <h1 className="text-[20px] text-[#F5F1E8] tracking-[0.15em]" style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500 }}>
            축&nbsp;&nbsp;사
          </h1>
          <div className="w-10 h-[1px] bg-[#C9A227]/50 mx-auto mt-5" />
        </motion.header>

        <div className="flex flex-col gap-16">
          {exhibition.foreword.map((msg, mi) => (
            <motion.section
              key={mi}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 + mi * 0.15 }}
            >
              <h2
                className="text-[17px] md:text-[19px] text-[#F5F1E8] text-center mb-8 break-keep leading-snug"
                style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500 }}
              >
                {msg.title}
              </h2>
              <div className="flex flex-col gap-4">
                {msg.body.split('\n\n').map((para, pi) => (
                  <p
                    key={pi}
                    className="text-[14.5px] md:text-[15px] text-[#cfcfd6] leading-[2.0] tracking-wide break-keep text-left"
                    style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 300 }}
                  >
                    {para}
                  </p>
                ))}
              </div>
              <div className="mt-7 text-right">
                <p className="text-[12px] text-[#9a9aa3] tracking-wide" style={{ fontFamily: "'Noto Serif KR', serif" }}>{msg.date}</p>
                <p className="text-[15px] text-[#C9A227] tracking-[0.15em] mt-2" style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500 }}>{msg.author}</p>
                <p className="text-[11.5px] text-[#8a8a93] mt-1.5 break-keep" style={{ fontFamily: "'Noto Serif KR', serif" }}>{msg.credential}</p>
              </div>
              {mi < exhibition.foreword.length - 1 && <div className="w-8 h-[1px] bg-[#C9A227]/30 mx-auto mt-14" />}
            </motion.section>
          ))}
        </div>

        {lang === 'en' && (
          <p className="text-center text-[11px] text-[#6a6a72] mt-12 italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            * Foreword messages are presented in the original Korean.
          </p>
        )}
        {lang === 'fr' && (
          <p className="text-center text-[11px] text-[#6a6a72] mt-12 italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            * Les textes de préface sont présentés dans leur version originale en coréen.
          </p>
        )}
      </div>
    </div>
  );
}
