import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'

type Language = 'en' | 'id'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  isTransitioning: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.badge': 'Information Systems Student',
    'hero.hello': 'HELLO,',
    'hero.im': "I'M AN",
    'hero.role': 'AI-Integrated Mobile Developer',
    'hero.description': 'Specializing in Flutter and generative AI technologies. Proven track record of building and deploying cross-platform applications with integrated AI capabilities. Experienced in architecting conversational AI features and implementing cloud-based solutions.',
    'hero.viewProjects': 'View Projects',
    'hero.contactMe': 'Contact Me',
    'hero.projectsCompleted': 'Projects Completed',
    'hero.yearsExperience': 'Years Experience',
    'hero.techStack': 'Tech Stack',
    
    // About Section
    'about.title': 'About Me',
    'about.heading': 'WHO',
    'about.headingAccent': 'AM I?',
    'about.paragraph1': 'AI-Integrated Mobile Developer specializing in Flutter and generative AI technologies. Proven track record of building and deploying cross-platform applications with integrated AI capabilities. Passionate about creating intelligent mobile experiences that solve real business problems.',
    'about.paragraph2': 'Experienced in architecting ',
    'about.paragraph2Highlight': 'conversational AI features',
    'about.paragraph2Continue': ', fine-tuning LoRA models for digital asset generation, and implementing ',
    'about.paragraph2Highlight2': 'cloud-based backend solutions',
    'about.paragraph3': 'Currently pursuing a Bachelor of Information Systems (GPA: 3.85/4.00) with freelance experience developing mobile and AI applications. Always open to collaboration and new opportunities in AI integration and cloud technologies.',
    'about.name': 'Name',
    'about.age': 'Age',
    'about.ageValue': '26 Years',
    'about.location': 'Location',
    'about.locationValue': 'Surakarta, Indonesia',
    'about.status': 'Status',
    'about.statusValue': 'Information Systems Student (Expected June 2027)',
    'about.email': 'Email',
    'about.education': 'Education',
    'about.educationValue': 'University Duta Bangsa Surakarta',
    'about.systemInfo': 'Bachelor of Information Systems',
    'about.ongoing': 'Expected June 2027',
    'about.systemInfoDesc': 'GPA: 3.85/4.00 - Specializing in mobile application development and AI integration with strong academic performance.',
    'about.experience': 'Professional Experience',
    'about.experienceValue': '2024 - Present',
    'about.experienceDesc': 'Freelance AI-Integrated Mobile Developer: Engineered 3+ cross-platform applications (99.2% crash-free rate serving 500+ users), integrated Gemini API achieving 75% automation, and architected Supabase infrastructure reducing API response time by 35%.',
    'about.leadership': 'Leadership',
    'about.academicAchievement': 'Academic Achievement',
    'about.activeOrganization': 'Active Organization',
    'about.problemSolver': 'Problem Solver',
    'about.yearsOld': 'Years Old',
    
    // Skills Section
    'skills.title': 'Skills',
    'skills.heading': 'SKILL',
    'skills.headingAccent': 'SET',
    'skills.description': 'Technologies and tools I have mastered to develop high-quality applications and innovative solutions.',
    'skills.languagesFrameworks': 'Languages & Frameworks',
    'skills.backendDatabases': 'Backend & Databases',
    'skills.cloudDeployment': 'Cloud & Deployment',
    'skills.aiCreativeTools': 'AI & ML Tools',
    'skills.cleanCode': 'Clean Code',
    'skills.cleanCodeDesc': 'Following SOLID principles and best practices',
    'skills.projectManagement': 'Project Management',
    'skills.projectManagementDesc': 'Team leadership and technical writing',
    'skills.cloudIntegration': 'Cloud Integration',
    'skills.cloudIntegrationDesc': 'Azure, Supabase, and cloud deployment',
    
    // Projects Section
    'projects.title': 'Portfolio',
    'projects.heading': 'MY',
    'projects.headingAccent': 'PROJECTS',
    'projects.description': 'A selection of projects I\'ve built during my studies and freelance work, showcasing my skills in mobile and web development.',
    'projects.mainFeatures': 'Main Features:',
    'projects.liveDemo': 'Live Demo',
    'projects.sourceCode': 'Source Code',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.heading': "LET'S",
    'contact.headingAccent': 'COLLABORATE',
    'contact.description': 'Have an interesting project idea? Or want to discuss technology? Feel free to reach out to me!',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.followMe': 'Follow Me',
    'contact.availableForFreelance': 'Available for freelance projects',
    'contact.name': 'Name',
    'contact.namePlaceholder': 'Your Name',
    'contact.emailPlaceholder': 'your@email.com',
    'contact.subject': 'Subject',
    'contact.subjectPlaceholder': 'Message subject',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Write your message here...',
    'contact.sendMessage': 'Send Message',
    'contact.messageSent': 'Message Sent!',
    
    // Footer
    'footer.heading': 'READY TO JOIN',
    'footer.headingAccent': 'MY TEAM?',
    'footer.description': "I'm always open to new opportunities, interesting collaborations, or just chatting about technology.",
    'footer.startConversation': 'Start Conversation',
    'footer.navigation': 'Navigation',
    'footer.social': 'Social',
    'footer.contact': 'Contact',
    'footer.madeWith': 'Made with',
    'footer.using': 'using React & Tailwind CSS',
    'footer.rights': 'All rights reserved.',
    'footer.backToTop': 'Back to top',
    'footer.brand': 'PORTFOLIO',
    'footer.brandDesc': 'Information Systems student passionate about building innovative mobile applications with Flutter and exploring AI integration.',
  },
  id: {
    // Navigation
    'nav.home': 'Beranda',
    'nav.about': 'Tentang',
    'nav.skills': 'Keahlian',
    'nav.projects': 'Proyek',
    'nav.contact': 'Kontak',
    
    // Hero Section
    'hero.badge': 'Mahasiswa Sistem Informasi',
    'hero.hello': 'HALO,',
    'hero.im': 'SAYA ADALAH',
    'hero.role': 'AI-Integrated Mobile Developer',
    'hero.description': 'Berfokus pada pengembangan Flutter dan teknologi AI generatif. Berpengalaman dalam membangun aplikasi lintas platform dengan kemampuan AI terintegrasi, merancang fitur chatbot konversional, serta mengimplementasikan solusi cloud yang efisien.',
    'hero.viewProjects': 'Lihat Proyek',
    'hero.contactMe': 'Hubungi Saya',
    'hero.projectsCompleted': 'Proyek Selesai',
    'hero.yearsExperience': 'Tahun Pengalaman',
    'hero.techStack': 'Tech Stack',
    
    // About Section
    'about.title': 'Tentang Saya',
    'about.heading': 'MENGENAL',
    'about.headingAccent': 'SAYA LEBIH DEKAT',
    'about.paragraph1': 'Saya adalah seorang AI-Integrated Mobile Developer yang berfokus pada Flutter dan teknologi AI generatif. Saya memiliki rekam jejak dalam membangun dan meluncurkan aplikasi lintas platform yang cerdas untuk memberikan solusi nyata bagi kebutuhan bisnis.',
    'about.paragraph2': 'Berpengalaman dalam merancang ',
    'about.paragraph2Highlight': 'fitur chatbot konversional',
    'about.paragraph2Continue': ', optimasi model LoRA untuk aset digital, serta implementasi ',
    'about.paragraph2Highlight2': 'solusi backend berbasis cloud',
    'about.paragraph3': 'Saat ini saya sedang menempuh studi Sarjana Sistem Informasi (IPK: 3.85/4.00) sembari aktif sebagai developer lepas. Saya selalu terbuka untuk kolaborasi dan peluang baru di bidang integrasi AI serta teknologi cloud.',
    'about.name': 'Nama',
    'about.age': 'Umur',
    'about.ageValue': '26 Tahun',
    'about.location': 'Lokasi',
    'about.locationValue': 'Surakarta, Indonesia',
    'about.status': 'Status',
    'about.statusValue': 'Mahasiswa Sistem Informasi (Lulus Juni 2027)',
    'about.email': 'Email',
    'about.education': 'Pendidikan',
    'about.educationValue': 'Universitas Duta Bangsa Surakarta',
    'about.systemInfo': 'S1 Sistem Informasi',
    'about.ongoing': 'Target Lulus Juni 2027',
    'about.systemInfoDesc': 'IPK: 3.85/4.00 - Fokus pada pengembangan aplikasi mobile dan integrasi AI dengan performa akademik yang unggul.',
    'about.experience': 'Pengalaman Profesional',
    'about.experienceValue': '2024 - Sekarang',
    'about.experienceDesc': 'Freelance AI-Integrated Mobile Developer: Mengembangkan 3+ aplikasi lintas platform (99.2% crash-free rate untuk 500+ pengguna), mengintegrasikan Gemini API untuk mencapai 75% otomatisasi, serta mengelola infrastruktur Supabase.',
    'about.leadership': 'Kepemimpinan',
    'about.academicAchievement': 'Prestasi Akademik',
    'about.activeOrganization': 'Aktif Berorganisasi',
    'about.problemSolver': 'Problem Solver',
    'about.yearsOld': 'Tahun',
    
    // Skills Section
    'skills.title': 'Keahlian',
    'skills.heading': 'KEMAMPUAN',
    'skills.headingAccent': 'TEKNIS',
    'skills.description': 'Teknologi dan perangkat yang saya kuasai untuk menciptakan aplikasi berkualitas tinggi dan solusi inovatif.',
    'skills.languagesFrameworks': 'Bahasa & Framework',
    'skills.backendDatabases': 'Backend & Database',
    'skills.cloudDeployment': 'Cloud & Deployment',
    'skills.aiCreativeTools': 'AI & ML Tools',
    'skills.cleanCode': 'Clean Code',
    'skills.cleanCodeDesc': 'Menerapkan prinsip SOLID dan best practices',
    'skills.projectManagement': 'Manajemen Proyek',
    'skills.projectManagementDesc': 'Kepemimpinan tim dan penulisan teknis',
    'skills.cloudIntegration': 'Integrasi Cloud',
    'skills.cloudIntegrationDesc': 'Azure, Supabase, dan Cloud Deployment',
    
    // Projects Section
    'projects.title': 'Portofolio',
    'projects.heading': 'PROYEK',
    'projects.headingAccent': 'UNGGULAN',
    'projects.description': 'Pilihan proyek yang saya bangun selama masa studi dan kerja lepas, menunjukkan keahlian saya dalam pengembangan mobile dan web.',
    'projects.mainFeatures': 'Fitur Utama:',
    'projects.liveDemo': 'Demo Langsung',
    'projects.sourceCode': 'Kode Sumber',
    
    // Contact Section
    'contact.title': 'Hubungi Saya',
    'contact.heading': 'MARI',
    'contact.headingAccent': 'BERKOLABORASI',
    'contact.description': 'Punya ide proyek menarik atau ingin berdiskusi tentang teknologi? Saya siap membantu Anda!',
    'contact.email': 'Email',
    'contact.phone': 'Telepon',
    'contact.location': 'Lokasi',
    'contact.followMe': 'Ikuti Saya',
    'contact.availableForFreelance': 'Tersedia untuk proyek freelance',
    'contact.name': 'Nama',
    'contact.namePlaceholder': 'Nama Lengkap',
    'contact.emailPlaceholder': 'email@anda.com',
    'contact.subject': 'Subjek',
    'contact.subjectPlaceholder': 'Judul pesan',
    'contact.message': 'Pesan',
    'contact.messagePlaceholder': 'Tuliskan pesan Anda di sini...',
    'contact.sendMessage': 'Kirim Pesan',
    'contact.messageSent': 'Pesan Terhasil Terkirim!',
    
    // Footer
    'footer.heading': 'TERTARIK UNTUK',
    'footer.headingAccent': 'BERKOLABORASI?',
    'footer.description': 'Saya selalu terbuka untuk peluang baru, diskusi teknologi, atau proyek pengembangan aplikasi yang menantang.',
    'footer.startConversation': 'Mulai Percakapan',
    'footer.navigation': 'Navigasi',
    'footer.social': 'Media Sosial',
    'footer.contact': 'Kontak',
    'footer.madeWith': 'Dibuat dengan',
    'footer.using': 'menggunakan React & Tailwind CSS',
    'footer.rights': 'Hak cipta dilindungi.',
    'footer.backToTop': 'Kembali ke atas',
    'footer.brand': 'PORTOFOLIO',
    'footer.brandDesc': 'Mahasiswa Sistem Informasi yang berdedikasi dalam membangun aplikasi mobile inovatif dengan Flutter dan eksplorasi integrasi AI.',
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language') as Language
      return saved || 'en'
    }
    return 'en'
  })
  
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language)
    }
  }, [language])

  const setLanguage = (newLang: Language) => {
    if (newLang !== language) {
      setIsTransitioning(true)
      // Fade out effect
      setTimeout(() => {
        setLanguageState(newLang)
      }, 150)
      // Fade in effect
      setTimeout(() => {
        setIsTransitioning(false)
      }, 300)
    }
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isTransitioning }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
