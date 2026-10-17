import React, { useState } from 'react';
import { Award, Sparkles, Handshake, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SPONSORS } from '../data/kfoodiesData';
import { SponsorGrid } from '../components/SponsorGrid';

export const SponsorsPage: React.FC = () => {
  const [activeTier, setActiveTier] = useState<string>('All');

  const tiers = ['All', 'Title Partner', 'Powered By', 'Associate Partner', 'Festival Partner'];

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#0a0b0e' }}>
      {/* Header */}
      <section
        style={{
          padding: '4.5rem 0 3.5rem 0',
          background: 'radial-gradient(ellipse at top, rgba(245, 158, 11, 0.12) 0%, transparent 70%)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          textAlign: 'center',
        }}
      >
        <div className="container" style={{ maxWidth: '850px' }}>
          <span className="section-tag" style={{ justifyContent: 'center' }}>
            <Award size={20} color="#fbbf24" />
            Our Valued Partners
          </span>
          <h1 className="section-title">Festival & Community Sponsors</h1>
          <p className="section-subtitle" style={{ margin: '0 auto 2.5rem auto' }}>
            We are deeply grateful to the visionary businesses, leading retail powerhouses, and local community brands whose support brought Tabemono Food Fest seasons to life.
          </p>

          {/* Tier Tabs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.65rem',
              flexWrap: 'wrap',
            }}
          >
            {tiers.map((tier) => (
              <button
                key={tier}
                onClick={() => setActiveTier(tier)}
                style={{
                  padding: '0.55rem 1.25rem',
                  borderRadius: '999px',
                  border:
                    activeTier === tier
                      ? '1px solid var(--amber-primary)'
                      : '1px solid var(--border-subtle)',
                  background:
                    activeTier === tier
                      ? 'var(--orange-gradient)'
                      : 'rgba(255, 255, 255, 0.04)',
                  color: activeTier === tier ? '#0a0b0e' : '#e5e7eb',
                  fontWeight: activeTier === tier ? 800 : 600,
                  fontSize: '0.86rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
              >
                {tier}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Sponsors Showcase */}
      <section className="section-py">
        <div className="container">
          {/* Featured Title Partners Banner */}
          {(activeTier === 'All' || activeTier === 'Title Partner') && (
            <div style={{ marginBottom: '4rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}>
                <span className="pulse-dot" />
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  Title Partners
                </h2>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.5rem',
                }}
              >
                {SPONSORS.filter((s) => s.tier === 'Title Partner').map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="glass-card"
                    style={{
                      padding: '2.5rem 2rem',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      border: '1px solid rgba(245, 158, 11, 0.3)',
                      background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(18, 20, 26, 0.9) 100%)',
                    }}
                  >
                    <div style={{ height: '75px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        style={{ maxHeight: '100%', maxWidth: '80%', objectFit: 'contain' }}
                      />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '4px' }}>
                      {sponsor.name}
                    </h3>
                    <span style={{ fontSize: '0.8rem', color: 'var(--amber-light)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {sponsor.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* All Sponsors Grid */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                {activeTier === 'All' ? 'All Official Sponsors & Brand Associates' : `${activeTier}s`}
              </h2>
            </div>

            <SponsorGrid filterTier={activeTier} />
          </div>
        </div>
      </section>

      {/* Become a Sponsor for Season 3 CTA */}
      <section style={{ padding: '5rem 0', background: '#0e1015', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <span className="section-tag" style={{ justifyContent: 'center' }}>
            <Sparkles size={20} color="#f59e0b" />
            Season 3 Sponsorship Now Open
          </span>
          <h2 className="section-title">Elevate Your Brand With Us</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Reach tens of thousands of event visitors on-ground and millions of active food followers digitally across Telangana. Custom branding tiers available.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/collaborations" className="btn-primary" style={{ padding: '0.9rem 2.2rem' }}>
              Request Sponsorship Deck
            </Link>
            <Link to="/contact" className="btn-secondary" style={{ padding: '0.9rem 2.2rem' }}>
              Contact Festival Organizers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
