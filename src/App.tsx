import { useState, useRef, useEffect } from 'react';
import { GlobalErrorBoundary } from './components/GlobalErrorBoundary';
import { LangProvider, LangToggle } from './i18n';
import CoverPage from './components/CoverPage';
import CritiquePage from './components/CritiquePage';
import ArtistBioPage from './components/ArtistBioPage';
import ArtistNotePage from './components/ArtistNotePage';
import PhilosophyPage from './components/PhilosophyPage';
import ArtworkPage from './components/ArtworkPage';
import EndingPage from './components/EndingPage';
import { exhibition } from './data/exhibition';

// cover + critique + bio + note + philosophy + artworks + ending
const INTRO_PAGES = 5;
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

  const RENDER_RANGE = 2;
  const isVisible = (index: number) => Math.abs(currentPage - index) <= RENDER_RANGE;

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

  return (
    <div
      className="size-full flex items-center justify-center relative overflow-hidden"
      style={{ background: '#0B0E17' }}
      onClick={flashControls}
      onTouchStart={flashControls}
    >
      <LangToggle />

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
        <Slide>{isVisible(1) && <CritiquePage />}</Slide>
        <Slide>{isVisible(2) && <ArtistBioPage />}</Slide>
        <Slide>{isVisible(3) && <ArtistNotePage />}</Slide>
        <Slide>{isVisible(4) && <PhilosophyPage />}</Slide>

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
