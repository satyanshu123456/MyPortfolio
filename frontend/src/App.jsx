import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainLayout from './layouts/MainLayout';
import LoadingScreen from './components/LoadingScreen';

// Lazy loaded page components for optimal performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Skills = lazy(() => import('./pages/Skills'));
const Projects = lazy(() => import('./pages/Projects'));
const Experience = lazy(() => import('./pages/Experience'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Suspense Fallback Spinner
const RouteLoadingFallback = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-cyan-400">
    <div className="w-10 h-10 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
    <span className="text-xs font-mono tracking-widest uppercase text-slate-400">
      Loading Module...
    </span>
  </div>
);

export const App = () => {
  const [initialLoading, setInitialLoading] = useState(true);
  const location = useLocation();

  // Document title updates based on current route
  useEffect(() => {
    const routeTitles = {
      '/': "Satyanshu Gautam | MERN Stack Developer | SATYANSHU.DEV",
      '/about': "About | Satyanshu Gautam - MERN Stack Developer",
      '/skills': "Skills & Technologies | Satyanshu Gautam",
      '/projects': "Projects Roadmap | Satyanshu Gautam",
      '/experience': "Experience & Timeline | Satyanshu Gautam",
      '/contact': "Contact & Inquiries | Satyanshu Gautam",
    };

    document.title = routeTitles[location.pathname] || "Page Not Found | SATYANSHU.DEV";
  }, [location.pathname]);

  return (
    <>
      {initialLoading && (
        <LoadingScreen onLoaded={() => setInitialLoading(false)} minDuration={1000} />
      )}

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<RouteLoadingFallback />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<RouteLoadingFallback />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="skills"
            element={
              <Suspense fallback={<RouteLoadingFallback />}>
                <Skills />
              </Suspense>
            }
          />
          <Route
            path="projects"
            element={
              <Suspense fallback={<RouteLoadingFallback />}>
                <Projects />
              </Suspense>
            }
          />
          <Route
            path="experience"
            element={
              <Suspense fallback={<RouteLoadingFallback />}>
                <Experience />
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense fallback={<RouteLoadingFallback />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<RouteLoadingFallback />}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;

