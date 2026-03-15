import { useEffect, useState } from 'react';
import { 
  Code2, 
  Database, 
  Smartphone, 
  Cloud, 
  GitBranch,
  Terminal
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TECH_TEXTS = ['Flutter', 'Groq API', 'Supabase', 'ComfyUI', 'Gemini AI', 'Azure', 'LoRA'];

const Skills = () => {
  const { t } = useLanguage();
  const [techIndex, setTechIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTechIndex((prev) => (prev + 1) % TECH_TEXTS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const skillCategories = [
    {
      title: t('skills.languagesFrameworks'),
      icon: Smartphone,
      skills: [
        { name: 'Flutter', level: 85 },
        { name: 'Dart', level: 85 },
        { name: 'Android SDK', level: 80 },
        { name: 'Cross-Platform Dev', level: 80 },
      ],
    },
    {
      title: t('skills.backendDatabases'),
      icon: Database,
      skills: [
        { name: 'Supabase', level: 85 },
        { name: 'RESTful APIs', level: 80 },
        { name: 'MySQL', level: 80 },
        { name: 'Authentication API', level: 85 },
      ],
    },
    {
      title: t('skills.cloudDeployment'),
      icon: Cloud,
      skills: [
        { name: 'Microsoft Azure', level: 70 },
        { name: 'Cloud Functions', level: 70 },
        { name: 'Deployment', level: 75 },
      ],
    },
    {
      title: t('skills.aiCreativeTools'),
      icon: Terminal,
      skills: [
        { name: 'Groq API & Kimi K2', level: 85 },
        { name: 'Google Gemini AI', level: 80 },
        { name: 'LoRA Fine-tuning', level: 75 },
        { name: 'ComfyUI', level: 75 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="section-shell relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[8%] top-[15%] h-72 w-72 rounded-full bg-[#00ff88]/10 blur-3xl" />
        <div className="absolute right-[10%] bottom-[15%] h-72 w-72 rounded-full bg-[#00d4ff]/10 blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 animate-reveal-up">
            <p className="text-xs tracking-[0.24em] text-[#00ff88] font-['Share_Tech_Mono']">{t('skills.title')}</p>
            <h2 className="mt-4 text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-[0.1em] text-[#00ff88] cyber-glitch" data-text={TECH_TEXTS[techIndex]}>
              {TECH_TEXTS[techIndex]}
            </h2>
            <p className="mt-5 max-w-3xl mx-auto text-sm md:text-base text-muted-foreground leading-relaxed">
              {t('skills.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 -skew-y-1 stagger-wrap">
            {skillCategories.map((category, catIndex) => (
              <div
                key={category.title}
                className="cyber-panel p-6 lg:p-8 hover:shadow-[0_0_6px_#00ff88,0_0_16px_#00ff8840] transition-shadow animate-reveal-up"
                style={{ animationDelay: `${catIndex * 120}ms` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="cyber-chamfer-sm border border-[#00ff88]/60 bg-[#00ff88]/10 p-2 text-[#00ff88]">
                    <category.icon size={18} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg tracking-[0.08em]">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-foreground/90 font-['Share_Tech_Mono']">{skill.name}</span>
                        <span className="text-xs text-[#00d4ff] tracking-[0.12em]">{skill.level}%</span>
                      </div>
                      <div className="h-2 border border-border bg-background">
                        <div
                          className="h-full bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#ff00ff]"
                          style={{
                            width: `${skill.level}%`,
                            transition: 'width 700ms cubic-bezier(0.4, 0, 0.2, 1)',
                            transitionDelay: `${(catIndex * 4 + skillIndex) * 80}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-4 stagger-wrap">
            <div className="cyber-panel-soft p-5 text-center">
              <Code2 size={22} className="mx-auto text-[#00ff88]" strokeWidth={1.5} />
              <h4 className="mt-3 text-sm tracking-[0.08em]">{t('skills.cleanCode')}</h4>
              <p className="mt-2 text-xs text-muted-foreground">{t('skills.cleanCodeDesc')}</p>
            </div>
            <div className="cyber-panel-soft p-5 text-center">
              <GitBranch size={22} className="mx-auto text-[#ff00ff]" strokeWidth={1.5} />
              <h4 className="mt-3 text-sm tracking-[0.08em]">{t('skills.projectManagement')}</h4>
              <p className="mt-2 text-xs text-muted-foreground">{t('skills.projectManagementDesc')}</p>
            </div>
            <div className="cyber-panel-soft p-5 text-center">
              <Cloud size={22} className="mx-auto text-[#00d4ff]" strokeWidth={1.5} />
              <h4 className="mt-3 text-sm tracking-[0.08em]">{t('skills.cloudIntegration')}</h4>
              <p className="mt-2 text-xs text-muted-foreground">{t('skills.cloudIntegrationDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

