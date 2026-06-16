import { useState, useRef, useEffect } from 'react';
import { GlobalErrorBoundary } from './components/GlobalErrorBoundary';
import { LangProvider, LangToggle } from './i18n';
import CoverPage from './components/CoverPage';
import ForewordPage from './components/ForewordPage';
import CritiquePage from './components/CritiquePage';
import ArtistBioPage from './components/ArtistBioPage';
import ArtistNotePage from './components/ArtistNotePage';
import PhilosophyPage from './components/PhilosophyPage';
import ArtworkPage from './components/ArtworkPage';
import EndingPage from './components/EndingPage';
import { exhibition } from './data/exhibition';

// cover + foreword + critique + bio + note + philosophy + artworks + ending
const INTRO_PAGES = 6;
const TOTAL_PAGES = INTRO_PAGES + exhibition.artworks.length + 1;

export default function App() {
  return (
    <GlobalErrorBoundary>
      <LangProvider>
        <AppContent />
      </LangProvider>
    </GlobalErrorBoundary>
  );
}

function AppContent() {
  const [currentPage, setCurrentPage] = useState(0);
  const currentTranslate = useRef(0);
  const startX = useRef(0);
  const startY = useRef(0);
  const startTime = useRef(0);
  const isDragging = useRef(false);
  const isScrolling = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const bgmRef = useRef<HTMLAudioElement | null>(null);
  const [bgmPlaying, setBgmPlaying] = useState(false);
  const [bgmAvailable, setBgmAvailable] = useState(false);

  // 책장 넘기는 효과음 (조지광 갤러리와 동일한 음원 — page-flip.mov)
  const sfxRef = useRef<HTMLVideoElement | null>(null);
  const didMountRef = useRef(false);

  const playPageFlip = () => {
    if (!sfxRef.current) return;
    try {
      sfxRef.current.currentTime = 0;
      sfxRef.current.play().catch(() => {});
    } catch { /* 브라우저 차단 시 무시 */ }
  };

  const RENDER_RANGE = 2;
  const isVisible = (index: number) => Math.abs(currentPage - index) <= RENDER_RANGE;

  // BGM 초기화 + 첫 인터랙션 시 재생 시도
  useEffect(() => {
    const bgm = new Audio(`${import.meta.env.BASE_URL}bgm.mp3`);
    bgm.loop = true;
    bgm.volume = 0.28;
    bgm.preload = 'auto';
    bgm.addEventListener('canplay', () => setBgmAvailable(true), { once: true });
    bgm.addEventListener('error', () => setBgmAvailable(false), { once: true });
    bgmRef.current = bgm;

    // 책장 넘기는 효과음 (.mov 음원 — 숨김 video 요소로 재생)
    const sfx = document.createElement('video');
    sfx.src = `${import.meta.env.BASE_URL}page-flip.mov`;
    sfx.volume = 0.7;
    sfx.preload = 'auto';
    sfx.playsInline = true;
    sfx.style.display = 'none';
    document.body.appendChild(sfx);
    sfxRef.current = sfx;

    const onFirstInteraction = () => {
      bgmRef.current?.play().then(() => setBgmPlaying(true)).catch(() => {});
      // 효과음 활성화 (브라우저 자동재생 정책 우회: 재생 후 즉시 정지)
      sfxRef.current?.play().then(() => {
        sfxRef.current?.pause();
        if (sfxRef.current) sfxRef.current.currentTime = 0;
      }).catch(() => {});
      document.removeEventListener('touchstart', onFirstInteraction);
      document.removeEventListener('click', onFirstInteraction);
    };
    document.addEventListener('touchstart', onFirstInteraction);
    document.addEventListener('click', onFirstInteraction);

    return () => {
      bgmRef.current?.pause();
      bgmRef.current = null;
      if (sfxRef.current) { sfxRef.current.pause(); sfxRef.current.remove(); sfxRef.current = null; }
      document.removeEventListener('touchstart', onFirstInteraction);
      document.removeEventListener('click', onFirstInteraction);
    };
  }, []);

  const toggleBgm = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    if (!bgmRef.current) return;
    if (bgmPlaying) { bgmRef.current.pause(); setBgmPlaying(false); }
    else bgmRef.current.play().then(() => setBgmPlaying(true)).catch(() => {});
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrevious();
      else if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage]);

  const handlePrevious = () => { if (currentPage > 0) setCurrentPage((p) => p - 1); };
  const handleNext = () => { if (currentPage < TOTAL_PAGES - 1) setCurrentPage((p) => p + 1); };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length > 1) { isDragging.current = false; return; }
    isDragging.current = true;
    isScrolling.current = false;
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
    currentTranslate.current = 0;
    startTime.current = Date.now();
    if (containerRef.current) containerRef.current.style.transition = 'none';
  };
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    currentTranslate.current = 0;
    startTime.current = Date.now();
    if (containerRef.current) containerRef.current.style.transition = 'none';
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length >= 2) { isDragging.current = false; return; }
    if (!isDragging.current || isScrolling.current) return;
    const dx = e.touches[0].clientX - startX.current;
    const dy = e.touches[0].clientY - startY.current;
    if (Math.abs(dx) < 24 && Math.abs(dy) < 24) return;
    if (Math.abs(dy) > Math.abs(dx)) { isScrolling.current = true; return; }
    if (e.cancelable) e.preventDefault();
    currentTranslate.current = dx;
    if (containerRef.current)
      containerRef.current.style.transform = `translate3d(calc(-${currentPage * 100}% + ${dx}px), 0, 0)`;
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - startX.current;
    currentTranslate.current = dx;
    if (containerRef.current)
      containerRef.current.style.transform = `translate3d(calc(-${currentPage * 100}% + ${dx}px), 0, 0)`;
  };
  const handleDragEnd = () => {
    if (isScrolling.current) { isScrolling.current = false; isDragging.current = false; return; }
    if (!isDragging.current) return;
    isDragging.current = false;
    const movedBy = currentTranslate.current;
    const dur = Date.now() - startTime.current;
    const fast = Math.abs(movedBy) / dur > 0.5;
    if (containerRef.current) containerRef.current.style.transition = '';
    if (Math.abs(movedBy) < 5) { currentTranslate.current = 0; return; }
    if ((movedBy < -50 || (movedBy < -30 && fast)) && currentPage < TOTAL_PAGES - 1) setCurrentPage((p) => p + 1);
    else if ((movedBy > 50 || (movedBy > 30 && fast)) && currentPage > 0) setCurrentPage((p) => p - 1);
    else if (containerRef.current) containerRef.current.style.transform = '';
    currentTranslate.current = 0;
  };
  const handleMouseLeave = () => { if (isDragging.current) handleDragEnd(); };

  const [showControls, setShowControls] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const flashControls = () => {
    setShowControls(true);
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setShowControls(false), 600);
  };
  useEffect(() => { flashControls(); }, [currentPage]);

  // 페이지가 바뀔 때마다 책장 넘기는 소리 (첫 렌더는 제외)
  useEffect(() => {
    if (!didMountRef.current) { didMountRef.current = true; return; }
    playPageFlip();
  }, [currentPage]);

  return (
    <div
      className="size-full flex items-center justify-center relative overflow-hidden"
      style={{ background: '#0B0E17' }}
      onClick={flashControls}
      onTouchStart={flashControls}
    >
      <LangToggle />

      {/* BGM 토글 — 우상단 골드 */}
      {bgmAvailable && (
        <button
          onClick={toggleBgm}
          onTouchEnd={(e) => { e.preventDefault(); toggleBgm(e); }}
          aria-label="배경음악 토글"
          className="fixed top-5 right-5 z-50 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 border border-[#C9A227]/40 bg-[#0B0E17]/40 backdrop-blur-sm text-[#C9A227] hover:bg-[#C9A227]/15"
        >
          {bgmPlaying ? (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
          ) : (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          )}
        </button>
      )}

      <div
        className="w-full h-full flex will-change-transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
        style={{ transform: `translateX(-${currentPage * 100}%)`, touchAction: 'pan-y pinch-zoom' }}
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleMouseLeave}
      >
        <Slide>{isVisible(0) && <CoverPage />}</Slide>
        <Slide>{isVisible(1) && <ForewordPage />}</Slide>
        <Slide>{isVisible(2) && <CritiquePage />}</Slide>
        <Slide>{isVisible(3) && <ArtistBioPage />}</Slide>
        <Slide>{isVisible(4) && <ArtistNotePage />}</Slide>
        <Slide>{isVisible(5) && <PhilosophyPage />}</Slide>

        {exhibition.artworks.map((artwork, index) => (
          <Slide key={artwork.id}>
            {isVisible(index + INTRO_PAGES) && <ArtworkPage artwork={artwork} index={index} />}
          </Slide>
        ))}

        <Slide>{isVisible(TOTAL_PAGES - 1) && <EndingPage />}</Slide>
      </div>

      {/* 페이지 인디케이터 — 골드 */}
      <div
        className={`fixed bottom-4 right-6 z-50 pointer-events-none transition-opacity duration-500 ${showControls ? 'opacity-70' : 'opacity-0'}`}
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        <span className="text-[11px] tracking-[0.3em] text-[#C9A227]">
          {String(currentPage + 1).padStart(2, '0')} / {TOTAL_PAGES}
        </span>
      </div>
    </div>
  );
}

function Slide({ children }: { children: React.ReactNode }) {
  return <div className="w-full h-full flex-shrink-0 flex items-center justify-center">{children}</div>;
}
