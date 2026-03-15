import { Calendar, GraduationCap, Mail, MapPin, Shield, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const personalInfo = [
    { icon: User, label: t('about.name'), value: 'Naufal Azaria Sumpeno Putra' },
    { icon: Calendar, label: t('about.age'), value: t('about.ageValue') },
    { icon: MapPin, label: t('about.location'), value: t('about.locationValue') },
    { icon: GraduationCap, label: t('about.status'), value: t('about.statusValue') },
    { icon: Mail, label: t('about.email'), value: 'naufal.putra50@gmail.com' },
  ];

  return (
    <section
      id="about"
      className="section-shell relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-4 top-0 h-64 w-64 rounded-full bg-[#00d4ff]/10 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-[#ff00ff]/10 blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 lg:mb-16 animate-reveal-up">
            <p className="text-xs tracking-[0.24em] text-[#00ff88] font-['Share_Tech_Mono']">{t('about.title')}</p>
            <h2 className="mt-2 text-4xl md:text-6xl lg:text-7xl font-black tracking-[0.1em]">
              {t('about.heading')} <span className="text-[#00d4ff] animate-rgb">{t('about.headingAccent')}</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 animate-reveal-up">
              <div className="cyber-panel p-6 md:p-8">
                <div className="terminal-header">
                  <span className="terminal-dot bg-[#ff3366]" />
                  <span className="terminal-dot bg-[#ffc300]" />
                  <span className="terminal-dot bg-[#00ff88]" />
                  <span className="ml-2 text-[10px] tracking-[0.2em] text-muted-foreground">BIOGRAPHY.EXE</span>
                </div>

                <div className="space-y-5 text-sm md:text-base leading-relaxed text-muted-foreground">
                  <p>
                    &gt; {t('about.paragraph1')}
                  </p>
                  <p>
                    &gt; {t('about.paragraph2')} <span className="text-[#00ff88]">{t('about.paragraph2Highlight')}</span>
                    {t('about.paragraph2Continue')} <span className="text-[#00d4ff]">{t('about.paragraph2Highlight2')}</span>.
                  </p>
                  <p>
                    &gt; {t('about.paragraph3')}
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 stagger-wrap">
                {personalInfo.map((item) => (
                  <div
                    key={item.label}
                    className="cyber-panel-soft p-4 hover:shadow-[0_0_5px_#00ff88,0_0_14px_#00ff8830]"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 text-[#00ff88]">
                        <item.icon size={18} strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-[10px] tracking-[0.2em] text-muted-foreground">{item.label}</p>
                        <p className="text-sm text-foreground mt-1">{item.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-reveal-up">
              <div className="cyber-panel p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <div className="cyber-chamfer-sm border border-[#00ff88] bg-[#00ff88]/10 p-3 text-[#00ff88]">
                    <GraduationCap size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl tracking-[0.08em]">{t('about.education')}</h3>
                    <p className="text-sm text-muted-foreground">{t('about.educationValue')}</p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="cyber-panel-soft p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm text-foreground">{t('about.systemInfo')}</p>
                      <span className="cyber-chamfer-sm border border-[#00d4ff]/60 bg-[#00d4ff]/10 px-2 py-1 text-[10px] tracking-[0.14em] text-[#00d4ff]">
                        {t('about.ongoing')}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{t('about.systemInfoDesc')}</p>
                  </div>

                  <div className="cyber-panel-soft p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm text-foreground">{t('about.experience')}</p>
                      <span className="cyber-chamfer-sm border border-[#ff00ff]/60 bg-[#ff00ff]/10 px-2 py-1 text-[10px] tracking-[0.14em] text-[#ff00ff]">
                        {t('about.experienceValue')}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{t('about.experienceDesc')}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[t('about.leadership'), t('about.academicAchievement'), t('about.activeOrganization'), t('about.problemSolver')].map((tag) => (
                    <span
                      key={tag}
                      className="cyber-chamfer-sm border border-border px-2 py-1 text-[10px] tracking-[0.16em] text-foreground/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3 border border-[#00ff88]/40 bg-[#00ff88]/5 p-3 cyber-chamfer-sm">
                  <Shield size={16} className="text-[#00ff88]" strokeWidth={1.5} />
                  <p className="text-xs tracking-[0.12em] text-[#00ff88]">IDENTITY VERIFIED // READY FOR COLLABORATION</p>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 cyber-panel-soft p-4 hidden md:block">
                <p className="text-3xl font-black text-[#ff00ff]">26</p>
                <p className="text-[10px] tracking-[0.15em] text-muted-foreground">{t('about.yearsOld')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
