import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Instagram,
  CheckCircle
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Mail, label: t('contact.email'), value: 'naufal.putra50@gmail.com', href: 'mailto:naufal.putra50@gmail.com' },
    { icon: Phone, label: t('contact.phone'), value: '+62 812-2985-3525', href: 'https://wa.me/6281229853525' },
    { icon: MapPin, label: t('contact.location'), value: 'Surakarta, Indonesia', href: 'https://maps.google.com/?q=Surakarta,Indonesia' },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/azcharia', color: '#333' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/azcharia/', color: '#E4405F' },
  ];

  return (
    <section
      id="contact"
      className="section-shell relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[8%] top-[18%] h-72 w-72 rounded-full bg-[#00ff88]/10 blur-3xl" />
        <div className="absolute left-[8%] bottom-[8%] h-72 w-72 rounded-full bg-[#00d4ff]/10 blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 animate-reveal-up">
            <p className="text-xs tracking-[0.24em] text-[#00ff88] font-['Share_Tech_Mono']">{t('contact.title')}</p>
            <h2 className="mt-2 text-4xl md:text-6xl lg:text-7xl font-black tracking-[0.1em]">
              {t('contact.heading')} <span className="text-[#00d4ff]">{t('contact.headingAccent')}</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mt-4 max-w-2xl mx-auto">
              {t('contact.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-8 animate-reveal-up">
              <div className="space-y-6 stagger-wrap">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="cyber-panel-soft flex items-center gap-4 p-5 group hover:shadow-[0_0_6px_#00ff88,0_0_15px_#00ff8840] animate-reveal-up"
                  >
                    <div className="cyber-chamfer-sm border border-[#00ff88]/60 bg-[#00ff88]/10 p-3 text-[#00ff88] group-hover:bg-[#00ff88]/20">
                      <item.icon size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="text-[10px] tracking-[0.15em] text-muted-foreground">{item.label}</div>
                      <div className="text-sm text-foreground group-hover:text-[#00ff88] transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div>
                <h3 className="text-sm tracking-[0.14em] mb-4">{t('contact.followMe')}</h3>
                <div className="flex gap-3 stagger-wrap">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cyber-chamfer-sm border border-border min-h-[44px] min-w-[44px] px-3 text-muted-foreground hover:border-[#00ff88] hover:text-[#00ff88] animate-reveal-up"
                      title={social.label}
                    >
                      <social.icon size={18} strokeWidth={1.5} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="inline-flex items-center gap-3 border border-[#00ff88]/40 bg-[#00ff88]/5 px-5 py-3 cyber-chamfer-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff88] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00ff88]"></span>
                </span>
                <span className="text-xs tracking-[0.12em] text-[#00ff88]">{t('contact.availableForFreelance')}</span>
              </div>
            </div>

            <div className="animate-reveal-up">
              <form onSubmit={handleSubmit} className="cyber-panel p-6 md:p-8 space-y-5">
                <div className="terminal-header">
                  <span className="terminal-dot bg-[#ff3366]" />
                  <span className="terminal-dot bg-[#ffc300]" />
                  <span className="terminal-dot bg-[#00ff88]" />
                  <span className="ml-2 text-[10px] tracking-[0.2em] text-muted-foreground">TRANSMIT.MESSAGE</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs tracking-[0.15em] text-muted-foreground mb-2">{t('contact.name')}</label>
                    <div className="cyber-input-wrap">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full cyber-input"
                        placeholder={t('contact.namePlaceholder')}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.15em] text-muted-foreground mb-2">{t('contact.email')}</label>
                    <div className="cyber-input-wrap">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full cyber-input"
                        placeholder={t('contact.emailPlaceholder')}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-[0.15em] text-muted-foreground mb-2">{t('contact.subject')}</label>
                  <div className="cyber-input-wrap">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full cyber-input"
                      placeholder={t('contact.subjectPlaceholder')}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-[0.15em] text-muted-foreground mb-2">{t('contact.message')}</label>
                  <div className="cyber-input-wrap">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full cyber-input resize-none"
                      placeholder={t('contact.messagePlaceholder')}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className={`w-full min-h-[44px] cyber-chamfer-sm border-2 border-[#00ff88] text-xs tracking-[0.15em] px-6 py-3 inline-flex items-center justify-center gap-2 ${
                    isSubmitted
                      ? 'bg-[#00ff88] text-background shadow-[0_0_5px_#00ff88,0_0_15px_#00ff8860]'
                      : 'text-[#00ff88] hover:bg-[#00ff88] hover:text-background hover:shadow-[0_0_5px_#00ff88,0_0_15px_#00ff8860]'
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle size={20} />
                      {t('contact.messageSent')}
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      {t('contact.sendMessage')}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

