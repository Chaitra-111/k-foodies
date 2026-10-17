import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, UtensilsCrossed, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../data/kfoodiesData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', shortName: 'Home', path: '/' },
    { name: 'Menu & Prices', shortName: 'Menu', path: '/food' },
    { name: 'Collaborations', shortName: 'Collabs', path: '/collaborations' },
    { name: 'Team', shortName: 'Team', path: '/team' },
    { name: 'Our Story', shortName: 'Story', path: '/story' },
    { name: 'Sponsors', shortName: 'Sponsors', path: '/sponsors' },
    {
      name: 'TABEMONO FEST',
      shortName: 'TABEMONO',
      path: '/tabemono-the-food-fest',
      isFestival: true,
    },
    { name: 'Contact', shortName: 'Contact', path: '/contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: '76px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 1rem',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        background: isScrolled
          ? 'rgba(10, 11, 14, 0.95)'
          : 'rgba(10, 11, 14, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: isScrolled
          ? '1px solid rgba(255, 255, 255, 0.08)'
          : '1px solid rgba(255, 255, 255, 0.05)',
        boxShadow: isScrolled
          ? '0 10px 30px -10px rgba(0, 0, 0, 0.7)'
          : 'none',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          maxWidth: '1360px',
          paddingLeft: '0.75rem',
          paddingRight: '0.75rem',
          gap: '0.75rem',
        }}
      >
        {/* Brand Logo - Left Anchor */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
            color: 'inherit',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '2px solid var(--amber-primary)',
              boxShadow: '0 0 14px rgba(245, 158, 11, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#0d0e12',
              flexShrink: 0,
            }}
          >
            <img
              src={BRAND_INFO.media.logoArt}
              alt="K-Foodies Logo"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span
              style={{
                fontSize: '1.18rem',
                fontWeight: 900,
                letterSpacing: '0.06em',
                lineHeight: 1.1,
                color: '#ffffff',
              }}
            >
              K-FOODIES
            </span>
            <span
              style={{
                fontSize: '0.6rem',
                letterSpacing: '0.22em',
                color: 'var(--amber-light)',
                fontWeight: 700,
                marginTop: '2px',
                textTransform: 'uppercase',
              }}
            >
              Food & Community
            </span>
          </div>
        </Link>

        {/* Center Desktop Navigation */}
        <nav
          className="desktop-nav"
          style={{
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.35rem',
            whiteSpace: 'nowrap',
          }}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `nav-link-pill ${link.isFestival ? 'nav-link-festival' : ''} ${isActive ? 'active' : ''}`
              }
              style={({ isActive }) => ({
                height: '38px',
                padding: link.isFestival ? '0 0.82rem' : '0 0.72rem',
                fontSize: '0.84rem',
                fontWeight: link.isFestival ? 800 : isActive ? 700 : 500,
                color: link.isFestival
                  ? '#fbbf24'
                  : isActive
                  ? '#ffffff'
                  : 'rgba(255, 255, 255, 0.75)',
                textDecoration: 'none',
                borderRadius: '999px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.35rem',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                background: link.isFestival
                  ? 'rgba(245, 158, 11, 0.14)'
                  : isActive
                  ? 'rgba(255, 255, 255, 0.08)'
                  : 'transparent',
                border: link.isFestival
                  ? '1px solid rgba(245, 158, 11, 0.35)'
                  : isActive
                  ? '1px solid rgba(255, 255, 255, 0.12)'
                  : '1px solid transparent',
                boxShadow: link.isFestival
                  ? '0 0 14px rgba(245, 158, 11, 0.18)'
                  : 'none',
              })}
            >
              {link.isFestival && <Sparkles size={13} color="#f59e0b" />}
              <span className="nav-label-full">{link.name}</span>
              <span className="nav-label-compact">{link.shortName}</span>
              {link.isFestival && (
                <span
                  style={{
                    fontSize: '0.58rem',
                    background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
                    color: '#ffffff',
                    padding: '1px 6px',
                    borderRadius: '999px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    marginLeft: '2px',
                    boxShadow: '0 2px 6px rgba(234, 88, 12, 0.3)',
                  }}
                >
                  S3
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right CTA Button & Mobile Menu Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexShrink: 0 }}>
          <Link
            to="/food"
            className="btn-primary desktop-cta"
            style={{
              height: '38px',
              padding: '0 1.15rem',
              fontSize: '0.84rem',
              fontWeight: 700,
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              borderRadius: '999px',
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(245, 158, 11, 0.28)',
              whiteSpace: 'nowrap',
            }}
          >
            <UtensilsCrossed size={14} />
            <span>Explore Menu</span>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="mobile-toggle"
            style={{
              width: '38px',
              height: '38px',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid var(--border-subtle)',
              color: '#ffffff',
              borderRadius: '10px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '76px',
            left: 0,
            right: 0,
            background: 'rgba(10, 11, 14, 0.98)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '1.25rem 1.5rem 2rem 1.5rem',
            backdropFilter: 'blur(24px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.65rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
          }}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem 1rem',
                borderRadius: '12px',
                fontSize: '0.96rem',
                fontWeight: link.isFestival ? 800 : isActive ? 700 : 500,
                color: link.isFestival
                  ? '#fbbf24'
                  : isActive
                  ? '#ffffff'
                  : 'rgba(255, 255, 255, 0.8)',
                background: link.isFestival
                  ? 'rgba(245, 158, 11, 0.16)'
                  : isActive
                  ? 'rgba(255, 255, 255, 0.08)'
                  : 'transparent',
                border: link.isFestival
                  ? '1px solid rgba(245, 158, 11, 0.35)'
                  : '1px solid transparent',
                textDecoration: 'none',
              })}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {link.isFestival && <Sparkles size={16} color="#f59e0b" />}
                {link.name}
              </span>
              <ArrowRight size={16} style={{ opacity: 0.6 }} />
            </NavLink>
          ))}

          <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.75rem' }}>
            <Link
              to="/food"
              className="btn-primary"
              style={{ flex: 1, padding: '0.75rem', textAlign: 'center' }}
            >
              View Menu & Prices
            </Link>
            <Link
              to="/contact"
              className="btn-secondary"
              style={{ flex: 1, padding: '0.75rem', textAlign: 'center' }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}

      {/* Responsive media styling for header alignment */}
      <style>{`
        /* Enable desktop navigation starting at 1024px (laptops & desktops) */
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-cta {
            display: inline-flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }

        /* Label switches: compact on laptop screens (1024px - 1239px), full on wide screens */
        .nav-label-compact {
          display: inline;
        }
        .nav-label-full {
          display: none;
        }

        @media (min-width: 1240px) {
          .nav-label-compact {
            display: none !important;
          }
          .nav-label-full {
            display: inline !important;
          }
        }

        /* Compact spacing for 1024px - 1239px (e.g. 1065px laptop screens) */
        @media (min-width: 1024px) and (max-width: 1239px) {
          .desktop-nav {
            gap: 0.22rem !important;
          }
          .desktop-nav .nav-link-pill {
            padding: 0 0.52rem !important;
            font-size: 0.81rem !important;
            height: 36px !important;
          }
          .desktop-cta {
            padding: 0 0.95rem !important;
            font-size: 0.81rem !important;
            height: 36px !important;
          }
        }

        /* Spacious layout for large desktop screens (>= 1240px) */
        @media (min-width: 1240px) {
          .desktop-nav {
            gap: 0.45rem !important;
          }
          .desktop-nav .nav-link-pill {
            padding: 0 0.85rem !important;
            font-size: 0.85rem !important;
            height: 38px !important;
          }
          .desktop-cta {
            padding: 0 1.25rem !important;
            font-size: 0.85rem !important;
            height: 38px !important;
          }
        }

        /* Smooth interactive hover transitions */
        .desktop-nav .nav-link-pill:hover {
          color: #ffffff !important;
          background: rgba(255, 255, 255, 0.08) !important;
          border-color: rgba(255, 255, 255, 0.15) !important;
          transform: translateY(-1px);
        }

        .desktop-nav .nav-link-festival:hover {
          background: rgba(245, 158, 11, 0.22) !important;
          border-color: rgba(245, 158, 11, 0.55) !important;
        }
      `}</style>
    </header>
  );
};
