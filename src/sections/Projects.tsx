import { useMemo, useState } from 'react';
import { ExternalLink, Github, Leaf, ShoppingBag, Smartphone, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Chatty',
      subtitle: 'AI Companion App',
      description: 'Personal chat application with AI character "Akane" powered by Groq API + Kimi K2 for ultra-fast responses (<1 sec) with 256K context window. Features smart reminders, massive memory system, analytics dashboard, backup & restore, and user profile personalization.',
      image: '/images/chatty.png',
      tags: ['Flutter', 'Groq API', 'Kimi K2', 'Riverpod'],
      features: ['AI Chat', 'Smart Reminders', 'Memory System', 'Analytics Dashboard'],
      github: 'https://github.com/azcharia/chatty',
      demo: '#',
      color: '#EC4899',
      icon: <Smartphone className="size-4" style={{ color: '#EC4899' }} />,
      cardDate: 'Groq API + Kimi K2'
    },
    {
      id: 2,
      title: 'Plant Watering Reminder',
      subtitle: 'AI-Powered Plant Care',
      description: 'Offline-first plant care management app with Gemini AI integration for personalized care recommendations. Features health scoring, smart notifications with quiet hours, analytics dashboard, achievement system, and multi-format backup (JSON/CSV) with bilingual support (EN/ID).',
      image: '/images/plantwateringreminder.png',
      tags: ['Flutter', 'Gemini AI', 'Offline-First', 'Riverpod'],
      features: ['AI Recommendations', 'Health Scoring', 'Smart Notifications', 'Multi-format Backup'],
      github: 'https://github.com/azcharia/plant-watering-reminder',
      demo: '#',
      color: '#10B981',
      icon: <Leaf className="size-4" style={{ color: '#10B981' }} />,
      cardDate: 'Flutter + Gemini AI'
    },
    {
      id: 3,
      title: 'SIPENGO',
      subtitle: 'Village Data Management',
      description: 'Comprehensive census and family data management system for village administration. Features complete CRUD for family cards & residents, family tree visualization, photo documentation with cloud storage, Excel/PDF export, Google Maps integration, and real-time statistics dashboard.',
      image: '/images/sipengo.png',
      tags: ['Flutter', 'Supabase', 'Clean Architecture', 'Riverpod'],
      features: ['Family Tree', 'Cloud Storage', 'Export Excel/PDF', 'Google Maps Integration'],
      github: 'https://github.com/azcharia/sipengo',
      demo: '#',
      color: '#3B82F6',
      icon: <Users className="size-4" style={{ color: '#3B82F6' }} />,
      cardDate: 'Flutter + Supabase'
    },
    {
      id: 4,
      title: 'Shoes Retail',
      subtitle: 'Nike E-Commerce App',
      description: 'Full-featured Nike shoe e-commerce application with product browsing, advanced search & filtering, shopping cart management, and detailed product views with size/color selection. Responsive design with offline support using mock data and modular features-based architecture.',
      image: '/images/shoesretail.png',
      tags: ['Flutter', 'E-Commerce', 'Modular Architecture', 'Offline Support'],
      features: ['Product Browsing', 'Search & Filter', 'Shopping Cart', 'Size/Color Selection'],
      github: 'https://github.com/azcharia/shoes-retail',
      demo: '#',
      color: '#F97316',
      icon: <ShoppingBag className="size-4" style={{ color: '#F97316' }} />,
      cardDate: 'Flutter + Offline Support'
    },
  ];

  const selectedProject = useMemo(() => projects[activeProject], [activeProject]);

  return (
    <section
      id="projects"
      className="section-shell relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-8 h-64 w-64 rounded-full bg-[#00ff88]/10 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-[#ff00ff]/10 blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 animate-reveal-up">
            <p className="text-xs tracking-[0.24em] text-[#00ff88] font-['Share_Tech_Mono']">{t('projects.title')}</p>
            <h2 className="mt-2 text-4xl md:text-6xl lg:text-7xl tracking-[0.1em] font-black">
              {t('projects.heading')} <span className="text-[#ff00ff]">{t('projects.headingAccent')}</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mt-4 max-w-3xl">
              {t('projects.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-7 lg:gap-10 items-start">
            <div className="lg:col-span-3 relative">
              <div className="cyber-panel overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-[280px] md:h-[380px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute left-4 bottom-4 right-4 cyber-panel-soft p-4 backdrop-blur-sm">
                  <p className="text-[10px] tracking-[0.18em] text-[#00d4ff]">{selectedProject.cardDate}</p>
                  <h3 className="mt-2 text-2xl md:text-3xl tracking-[0.08em]">{selectedProject.title}</h3>
                  <p className="mt-2 text-xs md:text-sm text-muted-foreground">{selectedProject.subtitle}</p>
                </div>
              </div>

              <div className="relative -mt-6 ml-4 mr-2 md:ml-10 md:mr-10 cyber-panel p-5">
                <p className="text-sm text-muted-foreground leading-relaxed">{selectedProject.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="cyber-chamfer-sm border border-border px-2 py-1 text-[10px] tracking-[0.13em] text-foreground/90">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-button-outline cyber-chamfer-sm min-h-[44px] px-4 text-xs inline-flex items-center gap-2"
                  >
                    <Github size={15} strokeWidth={1.5} />
                    {t('projects.sourceCode')}
                  </a>

                  <button
                    onClick={() => window.open(selectedProject.github, '_blank', 'noopener,noreferrer')}
                    className="cyber-button-secondary min-h-[44px] px-4 text-xs inline-flex items-center gap-2"
                  >
                    <ExternalLink size={15} strokeWidth={1.5} />
                    OPEN PROJECT
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4 stagger-wrap">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setActiveProject(index)}
                  className={`w-full text-left cyber-panel-soft p-4 hover:shadow-[0_0_6px_#00ff88,0_0_18px_#00ff8840] animate-reveal-up ${
                    activeProject === index ? 'border-[#00ff88] shadow-[0_0_5px_#00ff88,0_0_15px_#00ff8840]' : ''
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] tracking-[0.16em] text-muted-foreground">{project.cardDate}</p>
                      <h4 className="mt-1 text-base tracking-[0.08em]">{project.title}</h4>
                      <p className="text-xs mt-1 text-muted-foreground">{project.subtitle}</p>
                    </div>
                    <span className="mt-1 text-[#00ff88]">{project.icon}</span>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {project.features.slice(0, 4).map((feature) => (
                      <p key={feature} className="text-[10px] text-foreground/80">
                        &gt; {feature}
                      </p>
                    ))}
                  </div>
                </button>
              ))}

              <div className="cyber-panel p-4">
                <h4 className="text-xs tracking-[0.16em] text-[#00d4ff] mb-3">STACK SNAPSHOT</h4>
                <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                  <p className="inline-flex items-center gap-2"><Smartphone size={14} strokeWidth={1.5} />Flutter</p>
                  <p className="inline-flex items-center gap-2"><Leaf size={14} strokeWidth={1.5} />Gemini AI</p>
                  <p className="inline-flex items-center gap-2"><Users size={14} strokeWidth={1.5} />Supabase</p>
                  <p className="inline-flex items-center gap-2"><ShoppingBag size={14} strokeWidth={1.5} />Clean Architecture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

