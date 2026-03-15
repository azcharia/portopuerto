import { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Navigation = () => {
  const sectionIds = ['home', 'about', 'skills', 'projects', 'contact'] as const;
  const [activeSection, setActiveSection] = useState('home');
  const { t, language, setLanguage } = useLanguage();

  // Scroll spy that remains accurate even when sections mount later (lazy loaded).
  useEffect(() => {
    const updateActiveSection = () => {
      const viewportLine = window.innerHeight * 0.45;
      let matched: string | null = null;
      let nearest = {
        id: 'home',
        distance: Number.POSITIVE_INFINITY,
      };

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const intersectsLine = rect.top <= viewportLine && rect.bottom >= viewportLine;

        if (intersectsLine) {
          matched = id;
        }

        const distance = Math.abs(rect.top - viewportLine);
        if (distance < nearest.distance) {
          nearest = { id, distance };
        }
      });

      const nextActive = matched ?? nearest.id;
      setActiveSection((prev) => (prev === nextActive ? prev : nextActive));
    };

    let ticking = false;
    const onScrollOrResize = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        updateActiveSection();
        ticking = false;
      });
    };

    updateActiveSection();
    const delayedSyncA = window.setTimeout(updateActiveSection, 300);
    const delayedSyncB = window.setTimeout(updateActiveSection, 1000);

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);

    return () => {
      window.clearTimeout(delayedSyncA);
      window.clearTimeout(delayedSyncB);
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset untuk navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { name: t('nav.home'), id: 'home' },
    { name: t('nav.about'), id: 'about' },
    { name: t('nav.skills'), id: 'skills' },
    { name: t('nav.projects'), id: 'projects' },
    { name: t('nav.contact'), id: 'contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
  };

  return (
    <header className="fixed top-3 left-0 right-0 z-50 px-4 lg:px-8">
      <div className="mx-auto max-w-7xl cyber-panel-soft p-2">
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={() => scrollToSection('home')}
            className="px-3 py-2 text-xs sm:text-sm tracking-[0.25em] text-[#00ff88] hover:text-[#00d4ff]"
            aria-label="Go to home section"
          >
            AZCHARIA//PORTFOLIO
          </button>

          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => {
              const active = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`cyber-chamfer-sm min-h-[44px] px-4 text-xs font-['Share_Tech_Mono'] tracking-[0.18em] border ${
                    active
                      ? 'text-background bg-[#00ff88] border-[#00ff88] shadow-[0_0_5px_#00ff88,0_0_16px_#00ff8850]'
                      : 'text-foreground border-border hover:text-[#00ff88] hover:border-[#00ff88]'
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <div className="lg:hidden flex items-center gap-1 text-[10px] tracking-[0.2em] text-muted-foreground px-2">
              {navItems.map((item) => (
                <button
                  key={`${item.id}-mobile`}
                  onClick={() => scrollToSection(item.id)}
                  className={`${activeSection === item.id ? 'text-[#00ff88]' : 'text-muted-foreground'}`}
                  aria-label={`Go to ${item.name}`}
                >
                  {item.name.slice(0, 1)}
                </button>
              ))}
            </div>

            <button
              onClick={toggleLanguage}
              className="cyber-button-secondary cyber-chamfer-sm min-h-[44px] px-3 text-xs"
              aria-label="Toggle language"
            >
              {language.toUpperCase()}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;

