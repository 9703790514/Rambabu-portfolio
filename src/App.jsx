import { lazy, Suspense } from 'react';
import './App.scss';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedBackground from './components/ui/AnimatedBackground';
import ScrollProgress from './components/ui/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const Resume = lazy(() => import('./pages/Resume'));

// Loading component
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin h-12 w-12 border-4 border-purple-500 border-t-transparent rounded-full" />
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      {/* Scroll to top on route change */}
      <ScrollToTop />
      
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Main App Structure */}
      <div className="relative min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;

