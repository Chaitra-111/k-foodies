import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Sparkles, Heart } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from './SocialIcons';
import { BRAND_INFO } from '../data/kfoodiesData';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        background: '#07080a',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
        overflow: 'hidden',
        marginTop: 'auto',
      }}
    >
      {/* Background ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '-150px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '500px',
          height: '250px',
          background: 'radial-gradient(ellipse at center, rgba(245, 158, 11, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ paddingTop: '4.5rem', paddingBottom: '3.5rem', position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '3.5rem',
          }}
        >
          {/* Brand info */}
          <div style={{ maxWidth: '340px' }}>
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                textDecoration: 'none',
                color: 'inherit',
                marginBottom: '1.25rem',
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid var(--amber-primary)',
                  boxShadow: '0 0 15px rgba(245, 158, 11, 0.4)',
                }}
              >
                <img
                  src={BRAND_INFO.media.logoArt}
                  alt="K-Foodies Logo"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 900, letterSpacing: '0.06em', color: '#ffffff' }}>
                  K-FOODIES
                </h3>
                <span style={{ fontSize: '0.68rem', letterSpacing: '0.22em', color: 'var(--amber-light)', fontWeight: 700 }}>
                  FOOD & COMMUNITY
                </span>
              </div>
            </Link>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Elevating street food culture, travel entertainment, and community festivals across Kothagudem and Bhadradri district.
            </p>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href={BRAND_INFO.contacts.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#e1306c';
                  e.currentTarget.style.borderColor = '#e1306c';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                }}
              >
                <InstagramIcon size={18} />
              </a>

              <a
                href={BRAND_INFO.contacts.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#ef4444';
                  e.currentTarget.style.borderColor = '#ef4444';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                }}
              >
                <YoutubeIcon size={18} />
              </a>

              <a
                href={`mailto:${BRAND_INFO.contacts.primaryEmail}`}
                aria-label="Email"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#f59e0b';
                  e.currentTarget.style.borderColor = '#f59e0b';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                }}
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '0.98rem', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '0.04em' }}>
              Explore
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                { name: 'Home', path: '/' },
                { name: 'Food & Menu', path: '/food' },
                { name: 'Collaborations & Brands', path: '/collaborations' },
                { name: 'Our Team', path: '/team' },
                { name: 'Our Story', path: '/story' },
                { name: 'Our Sponsors', path: '/sponsors' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    style={{
                      color: 'var(--text-muted)',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--amber-primary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tabemono Editions */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '0.98rem', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '0.04em', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Sparkles size={16} color="#f59e0b" />
              Tabemono Food Fest
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <Link
                  to="/tabemono-the-food-fest?season=1"
                  style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--amber-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  Season 1 (Sarada Vidhyalaya)
                </Link>
              </li>
              <li>
                <Link
                  to="/tabemono-the-food-fest?season=2"
                  style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--amber-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  Season 2 (Prakasham Stadium)
                </Link>
              </li>
              <li>
                <Link
                  to="/tabemono-the-food-fest?season=3"
                  style={{ color: '#fbbf24', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}
                >
                  Season 3 — Coming Soon!
                </Link>
              </li>
              <li style={{ marginTop: '0.5rem' }}>
                <Link
                  to="/collaborations?track=stall"
                  className="btn-primary"
                  style={{ padding: '0.45rem 1rem', fontSize: '0.8rem' }}
                >
                  Book a Stall
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '0.98rem', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '0.04em' }}>
              Contact & Inquiries
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <MapPin size={18} color="var(--amber-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Kothagudem, Bhadradri District, Telangana, India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Mail size={18} color="var(--amber-primary)" style={{ flexShrink: 0 }} />
                <a
                  href={`mailto:${BRAND_INFO.contacts.primaryEmail}`}
                  style={{ color: 'inherit', textDecoration: 'none' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--amber-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'inherit')}
                >
                  {BRAND_INFO.contacts.primaryEmail}
                </a>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)', marginTop: '0.5rem' }}>
                Open for brand collaborations, food stall registrations, and media inquiries.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.85rem',
            color: 'var(--text-dim)',
          }}
        >
          <p>© {new Date().getFullYear()} K-Foodies (Kothagudem Foodies). All rights reserved.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span>Crafted with</span>
            <Heart size={14} color="#ea580c" fill="#ea580c" />
            <span>for Food Lovers across Telangana</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
