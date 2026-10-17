import React from 'react';
import { Users, Sparkles, Video, Camera, Award, Code, Briefcase, Mail } from 'lucide-react';
import { TEAM_MEMBERS, BRAND_INFO } from '../data/kfoodiesData';
import { TeamCard } from '../components/TeamCard';

export const TeamPage: React.FC = () => {
  const host = TEAM_MEMBERS.find((m) => m.id === 1);
  const coreTeam = TEAM_MEMBERS.filter((m) => m.id !== 1);

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
            <Users size={20} color="#fbbf24" />
            The Creators & Crew
          </span>
          <h1 className="section-title">Meet The Minds Behind K-Foodies</h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            We are a dedicated collective of storytellers, cinematographers, strategists, and food lovers on a shared mission to put Kothagudem and Telangana’s street food on the world map.
          </p>
        </div>
      </section>

      {/* Featured Lead Host Spotlight */}
      {host && (
        <section style={{ padding: '4rem 0 2rem 0' }}>
          <div className="container">
            <div
              className="glass-card"
              style={{
                borderRadius: '28px',
                overflow: 'hidden',
                border: '1px solid rgba(245, 158, 11, 0.28)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                background: 'linear-gradient(135deg, rgba(22, 25, 34, 0.8) 0%, rgba(12, 14, 20, 0.95) 100%)',
              }}
            >
              {/* Host Portrait */}
              <div
                style={{
                  height: '420px',
                  width: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={host.image}
                  alt={host.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 50%, rgba(12, 14, 20, 0.9) 100%)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    background: 'var(--orange-gradient)',
                    color: '#0a0b0e',
                    fontWeight: 900,
                    fontSize: '0.82rem',
                    padding: '6px 14px',
                    borderRadius: '999px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  Lead Presenter & Host
                </div>
              </div>

              {/* Host Bio */}
              <div
                style={{
                  padding: 'clamp(2rem, 4vw, 3.5rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <span style={{ fontSize: '0.85rem', color: 'var(--amber-light)', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>
                  Founder & Host Spotlight
                </span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 900, color: '#ffffff', marginBottom: '1rem' }}>
                  {host.name}
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                  {host.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', alignItems: 'center' }}>
                  <a
                    href="https://www.youtube.com/@Kothagudemfoodies_143"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                    style={{ padding: '0.75rem 1.5rem', background: '#ef4444', color: '#fff' }}
                  >
                    Watch on YouTube
                  </a>
                  <a
                    href="https://www.instagram.com/kothagudemfoodies/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                    style={{ padding: '0.75rem 1.5rem' }}
                  >
                    Follow on Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Core Team Grid */}
      <section className="section-py">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-tag" style={{ justifyContent: 'center' }}>
              The Core Engine
            </span>
            <h2 className="section-title">The K-Foodies Pillar Team</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              From camera vision and financial structuring to digital development, content strategy, and ground festival logistics.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: '2rem',
            }}
          >
            {coreTeam.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team / Community CTA */}
      <section style={{ padding: '4rem 0', background: '#0e1015', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px' }}>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
            Passionate About Food, Photography, or Events?
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
            We are always seeking enthusiastic interns, videographers, event volunteers, and regional correspondents to expand our food footprint.
          </p>
          <a
            href={`mailto:${BRAND_INFO.contacts.primaryEmail}?subject=Joining K-Foodies Team`}
            className="btn-primary"
            style={{ padding: '0.85rem 2rem' }}
          >
            <Mail size={18} />
            <span>Apply to Join the Team</span>
          </a>
        </div>
      </section>
    </div>
  );
};
