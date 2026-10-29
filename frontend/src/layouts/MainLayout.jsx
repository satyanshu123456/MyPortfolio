import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';

export const MainLayout = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-x-hidden transition-colors duration-300">
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Persistent Navigation */}
      <Navbar />

      {/* Main Page Route Content */}
      <main className="flex-grow pt-24 sm:pt-28 pb-12 w-full">
        <Outlet />
      </main>

      {/* Persistent Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;

