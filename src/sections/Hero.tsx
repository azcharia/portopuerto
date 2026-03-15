import { useEffect, useState } from 'react';
import { ArrowDown, Cpu, Database, Signal, TerminalSquare } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const [displayText, setDisplayText] = useState('');
  const fullText = t('hero.role');

  useEffect(() => {
    let index = 0;
    setDisplayText('');
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [fullText]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="section-shell relative min-h-screen overflow-hidden pt-28 lg:pt-36"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-0 h-80 w-80 rounded-full bg-[#00ff88]/15 blur-3xl" />
        <div className="absolute top-24 right-0 h-80 w-80 rounded-full bg-[#ff00ff]/10 blur-3xl" />
        <div className="absolute inset-x-0 top-40 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/70 to-transparent" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-10 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-5 items-center">
            <div className="lg:col-span-3 cyber-panel p-6 sm:p-8 lg:p-10 animate-reveal-up cyber-noise overflow-hidden">
              <div className="inline-flex items-center gap-2 border border-[#00ff88]/40 bg-[#00ff88]/10 px-3 py-2 text-xs tracking-[0.22em] text-[#00ff88]">
                <Signal size={14} strokeWidth={1.5} />
                {t('hero.badge')}
              </div>

              <div className="mt-5 space-y-1">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-[0.12em] leading-[0.95]">
                  {t('hero.hello')}
                </h1>
                <h1
                  className="cyber-glitch text-5xl md:text-7xl lg:text-8xl font-black tracking-[0.12em] leading-[0.95] text-[#00ff88]"
                  data-text={t('hero.im')}
                >
                  {t('hero.im')}
                </h1>
              </div>

              <div className="mt-4 text-xl sm:text-3xl lg:text-4xl font-['Share_Tech_Mono'] text-[#00d4ff] tracking-[0.08em] min-h-[3.2rem]">
                <span className="inline-block max-w-full overflow-hidden whitespace-nowrap align-middle">
                  {displayText}
                </span>
                <span className="ml-2 inline-block h-10 w-[3px] bg-[#00ff88] align-middle animate-blink" />
              </div>

              <p className="mt-6 max-w-2xl text-sm sm:text-base leading-relaxed tracking-wide text-muted-foreground">
                {t('hero.description')}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button onClick={() => scrollToSection('#projects')} className="cyber-button">
                  <span className="inline-flex items-center gap-2">
                    {t('hero.viewProjects')}
                    <ArrowDown size={16} strokeWidth={1.5} />
                  </span>
                </button>
                <button onClick={() => scrollToSection('#contact')} className="cyber-button-outline cyber-chamfer-sm min-h-[44px] px-4 text-xs">
                  {t('hero.contactMe')}
                </button>
              </div>

              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 border border-border cyber-chamfer-sm">
                <div className="p-4 border-b md:border-b-0 md:border-r border-border">
                  <p className="text-2xl text-[#00ff88] font-bold">10+</p>
                  <p className="text-[10px] tracking-[0.15em] text-muted-foreground">{t('hero.projectsCompleted')}</p>
                </div>
                <div className="p-4 border-b md:border-b-0 border-border md:border-r">
                  <p className="text-2xl text-[#ff00ff] font-bold">1+</p>
                  <p className="text-[10px] tracking-[0.15em] text-muted-foreground">{t('hero.yearsExperience')}</p>
                </div>
                <div className="p-4 border-r border-border">
                  <p className="text-2xl text-[#00d4ff] font-bold">12+</p>
                  <p className="text-[10px] tracking-[0.15em] text-muted-foreground">{t('hero.techStack')}</p>
                </div>
                <div className="p-4">
                  <p className="text-2xl text-foreground font-bold">24/7</p>
                  <p className="text-[10px] tracking-[0.15em] text-muted-foreground">NETWORK UPTIME</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 hidden lg:block">
              <div className="cyber-panel-soft p-6 space-y-5 reduce-motion-safe">
                <div className="terminal-header">
                  <span className="terminal-dot bg-[#ff3366]" />
                  <span className="terminal-dot bg-[#ffc300]" />
                  <span className="terminal-dot bg-[#00ff88]" />
                  <span className="ml-2 text-xs tracking-[0.2em] text-muted-foreground">MISSION-CONSOLE</span>
                </div>

                <div className="space-y-4 font-['Share_Tech_Mono'] text-sm">
                  <div className="flex items-center justify-between border border-border p-3 cyber-chamfer-sm">
                    <span className="text-muted-foreground">MODULE::MOBILE</span>
                    <span className="inline-flex items-center gap-2 text-[#00ff88]"><TerminalSquare size={14} strokeWidth={1.5} />ONLINE</span>
                  </div>
                  <div className="flex items-center justify-between border border-border p-3 cyber-chamfer-sm">
                    <span className="text-muted-foreground">MODULE::DATABASE</span>
                    <span className="inline-flex items-center gap-2 text-[#00d4ff]"><Database size={14} strokeWidth={1.5} />SYNCED</span>
                  </div>
                  <div className="flex items-center justify-between border border-border p-3 cyber-chamfer-sm">
                    <span className="text-muted-foreground">MODULE::AI</span>
                    <span className="inline-flex items-center gap-2 text-[#ff00ff]"><Cpu size={14} strokeWidth={1.5} />ACTIVE</span>
                  </div>
                </div>

                <div className="border border-[#00ff88]/40 p-4 cyber-chamfer-sm text-xs tracking-[0.15em] text-[#00ff88] bg-[#00ff88]/5">
                  &gt; STATUS: READY TO DEPLOY HIGH-IMPACT PRODUCTS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
