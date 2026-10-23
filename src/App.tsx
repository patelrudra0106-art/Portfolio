import { Routes, Route } from 'react-router-dom';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { HireSection } from './components/HireSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyPage } from './pages/CaseStudyPage';

const HomePage = () => (
  <div className="main-wrapper min-h-screen">
    <main>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <HireSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:slug" element={<CaseStudyPage />} />
    </Routes>
  );
}

export default App;
