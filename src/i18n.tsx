import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Lang } from './data/exhibition';

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (v: { ko: string; en: string }) => string;
}

const Ctx = createContext<LangCtx>({ lang: 'ko', setLang: () => {}, t: (v) => v.ko });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ko');
  const t = (v: { ko: string; en: string }) => (lang === 'ko' ? v.ko : v.en);
  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);

/** 우상단 KOR / ENG 토글 (골드) */
export function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="fixed top-5 left-5 z-50 flex items-center gap-0 text-[11px] tracking-[0.15em]"
      style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <button
        onClick={(e) => { e.stopPropagation(); setLang('ko'); }}
        className={`px-2.5 py-1 transition-colors ${lang === 'ko' ? 'text-[#C9A227]' : 'text-[#8a8a93] hover:text-[#c5c5cc]'}`}
      >KOR</button>
      <span className="text-[#4a4a52]">/</span>
      <button
        onClick={(e) => { e.stopPropagation(); setLang('en'); }}
        className={`px-2.5 py-1 transition-colors ${lang === 'en' ? 'text-[#C9A227]' : 'text-[#8a8a93] hover:text-[#c5c5cc]'}`}
      >ENG</button>
    </div>
  );
}
