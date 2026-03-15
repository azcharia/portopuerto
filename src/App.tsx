import { lazy, Suspense, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import TerminalSplash from './components/TerminalSplash';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

const About = lazy(() => import('./sections/About'));
const Skills = lazy(() => import('./sections/Skills'));
const Projects = lazy(() => import('./sections/Projects'));
const Contact = lazy(() => import('./sections/Contact'));
const Footer = lazy(() => import('./sections/Footer'));

function SectionFallback() {
  return <div className="mx-auto my-10 h-56 w-full max-w-7xl animate-pulse cyber-panel" />;
}

function AppContent() {
  const { isTransitioning } = useLanguage();

  return (
    <div className={`relative bg-background min-h-screen transition-opacity duration-300 ${
      isTransitioning ? 'opacity-60' : 'opacity-100'
    }`}>
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div className="mx-auto mb-8 h-32 w-full max-w-7xl animate-pulse cyber-panel" />}>
        <Footer />
      </Suspense>
    </div>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const splashData = {
    name: 'AZCHARIA',
    tagline: 'ANDROID DEVELOPER',
    statusText: 'SYSTEM READY',
    buttonText: "LET'S GO",
    stats: [
      { value: '10+', label: 'PROJECTS' },
      { value: '1+', label: 'YEARS' },
      { value: '12+', label: 'TECH STACK' },
    ],
  };

  if (showSplash) {
    return <TerminalSplash onComplete={() => setShowSplash(false)} {...splashData} />;
  }

  return (
    <LanguageProvider>
      <AppContent />
      <Analytics />
    </LanguageProvider>
  );
}

export default App;
