import { ArrowUpRight, Code2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigasi: [
      { name: t('nav.home'), href: '#home' },
      { name: t('nav.about'), href: '#about' },
      { name: t('nav.skills'), href: '#skills' },
      { name: t('nav.projects'), href: '#projects' },
    ],
    sosial: [
      { name: 'GitHub', href: 'https://github.com/azcharia' },
      { name: 'Instagram', href: 'https://www.instagram.com/azcharia/' },
    ],
    kontak: [
      { name: 'naufal.putra50@gmail.com', href: 'mailto:naufal.putra50@gmail.com' },
      { name: '+62 812-2985-3525', href: 'tel:+6281229853525' },
      { name: 'Surakarta, Indonesia', href: '#' },
    ],
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="section-shell relative border-t border-border py-14 lg:py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-10 top-0 h-48 w-48 rounded-full bg-[#00ff88]/10 blur-3xl" />
        <div className="absolute right-10 bottom-0 h-48 w-48 rounded-full bg-[#ff00ff]/10 blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="cyber-panel p-6 md:p-8 lg:p-10">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
              <div className="lg:col-span-2">
                <p className="text-xs tracking-[0.22em] text-[#00ff88]">END-OF-TRANSMISSION</p>
                <h3 className="mt-3 text-3xl md:text-5xl font-black tracking-[0.1em]">
                  {t('footer.heading')} <span className="text-[#00d4ff]">{t('footer.headingAccent')}</span>
                </h3>
                <p className="mt-4 text-sm text-muted-foreground max-w-md">{t('footer.description')}</p>

                <button
                  onClick={() => scrollToSection('#contact')}
                  className="mt-6 cyber-button inline-flex items-center gap-2"
                >
                  {t('footer.startConversation')}
                  <ArrowUpRight size={15} strokeWidth={1.5} />
                </button>
              </div>

              <div className="lg:col-span-3 grid sm:grid-cols-3 gap-5">
                <div className="cyber-panel-soft p-4">
                  <h4 className="text-xs tracking-[0.16em] text-[#00ff88] mb-3">{t('footer.navigation')}</h4>
                  <ul className="space-y-2">
                    {footerLinks.navigasi.map((link) => (
                      <li key={link.name}>
                        <button
                          onClick={() => scrollToSection(link.href)}
                          className="text-xs text-muted-foreground hover:text-[#00ff88]"
                        >
                          &gt; {link.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="cyber-panel-soft p-4">
                  <h4 className="text-xs tracking-[0.16em] text-[#ff00ff] mb-3">{t('footer.social')}</h4>
                  <ul className="space-y-2">
                    {footerLinks.sosial.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-muted-foreground hover:text-[#ff00ff]"
                        >
                          &gt; {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="cyber-panel-soft p-4">
                  <h4 className="text-xs tracking-[0.16em] text-[#00d4ff] mb-3">{t('footer.contact')}</h4>
                  <ul className="space-y-2">
                    {footerLinks.kontak.map((link) => (
                      <li key={link.name}>
                        <a href={link.href} className="text-xs text-muted-foreground hover:text-[#00d4ff]">
                          &gt; {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-border pt-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="cyber-chamfer-sm border border-[#00ff88]/50 bg-[#00ff88]/10 p-2 text-[#00ff88]">
                  <Code2 size={16} strokeWidth={1.5} />
                </span>
                <p className="text-xs text-muted-foreground">
                  {t('footer.brand')} // {t('footer.brandDesc')}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <p className="text-xs text-muted-foreground">© {currentYear} Naufal Azaria. {t('footer.rights')}</p>
                <button
                  onClick={scrollToTop}
                  className="cyber-button-outline cyber-chamfer-sm min-h-[44px] px-3 text-xs"
                  title={t('footer.backToTop')}
                >
                  TOP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

