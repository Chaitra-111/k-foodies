import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { CollaborationsPage } from './pages/CollaborationsPage';
import { TeamPage } from './pages/TeamPage';
import { StoryPage } from './pages/StoryPage';
import { SponsorsPage } from './pages/SponsorsPage';
import { TabemonoPage } from './pages/TabemonoPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top helper component
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--bg-dark)' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/food" element={<MenuPage />} />
            <Route path="/collaborations" element={<CollaborationsPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="/sponsors" element={<SponsorsPage />} />
            <Route path="/tabemono-the-food-fest" element={<TabemonoPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Legacy route compatibility mappings */}
            <Route path="/about" element={<StoryPage />} />
            <Route path="/events" element={<TabemonoPage />} />
            <Route path="/tabemono2" element={<TabemonoPage />} />
            <Route path="/tabemono3" element={<TabemonoPage />} />

            {/* Catch-all 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
