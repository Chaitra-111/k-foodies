import React from 'react';
import { BookOpen, Sparkles, MapPin, Calendar, Heart, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { STORY_DATA, BRAND_INFO } from '../data/kfoodiesData';

export const StoryPage: React.FC = () => {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#0a0b0e' }}>
      {/* Editorial Story Hero */}
      <section
        style={{
          padding: '5rem 0 4rem 0',
          background: 'radial-gradient(ellipse at top, rgba(234, 88, 12, 0.14) 0%, transparent 70%)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          textAlign: 'center',
        }}
      >
        <div className="container" style={{ maxWidth: '900px' }}>
          <span className="section-tag" style={{ justifyContent: 'center' }}>
            <BookOpen size={20} color="#f59e0b" />
            The K-Foodies Journey
          </span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', marginBottom: '1.5rem' }}>
            {STORY_DATA.headline}
          </h1>
          <p
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
              color: 'var(--amber-light)',
              fontStyle: 'italic',
              lineHeight: 1.6,
              maxWidth: '750px',
              margin: '0 auto',
            }}
          >
            {STORY_DATA.quote}
          </p>
        </div>
      </section>

      {/* Main Editorial Narrative with Side Imagery */}
      <section className="section-py">
        <div className="container" style={{ maxWidth: '1080px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'center',
              marginBottom: '5rem',
            }}
          >
            {/* Story Text Blocks */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--amber-primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Our Mission & Heritage
              </span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#ffffff', lineHeight: 1.2 }}>
                Putting Bhadradri’s Street Food On The Map
              </h2>
              {STORY_DATA.narrative.map((paragraph, index) => (
                <p
                  key={index}
                  style={{
                    fontSize: '1.02rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.8,
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Visual Collage */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div
                className="glass-card"
                style={{
                  height: '320px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <img
                  src={BRAND_INFO.media.chefWok}
                  alt="Street chef cooking wok fire"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    background: 'rgba(10, 11, 14, 0.85)',
                    padding: '6px 14px',
                    borderRadius: '999px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: '#fbbf24',
                    border: '1px solid rgba(251, 191, 36, 0.3)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  High Energy Sizzle & Punchy Reviews
                </div>
              </div>

              <div
                className="glass-card"
                style={{
                  height: '240px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <img
                  src={BRAND_INFO.media.explodingBurger}
                  alt="Exploding burger creative"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    background: 'rgba(10, 11, 14, 0.85)',
                    padding: '6px 14px',
                    borderRadius: '999px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  Viral Food Entertainment
                </div>
              </div>
            </div>
          </div>

          {/* Regional Focus Spotlight Box */}
          <div
            className="glass-card"
            style={{
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              borderRadius: '24px',
              border: '1px solid rgba(245, 158, 11, 0.25)',
              background: 'linear-gradient(135deg, rgba(22, 25, 34, 0.9) 0%, rgba(12, 14, 20, 0.95) 100%)',
              marginBottom: '5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <MapPin size={24} color="var(--amber-primary)" />
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff' }}>
                Region & Core Focus
              </h3>
            </div>
            <p style={{ fontSize: '1.05rem', color: '#e5e7eb', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Kothagudem Foodies is a vibrant, community-focused food page spotlighting the street food and local cuisine of <strong>Kothagudem</strong> and the broader <strong>Bhadradri Kothagudem district</strong>, including Manuguru, Palwancha, Yellandu, and Bhadrachalam.
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.25rem',
              }}
            >
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.25rem', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                <h4 style={{ color: 'var(--amber-light)', fontSize: '0.95rem', fontWeight: 700, marginBottom: '6px' }}>Regional Biryanis</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Curry leaf ghee rice biryani, spicy Andhra mutton dum & wood-fired pulao.</p>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.25rem', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                <h4 style={{ color: 'var(--amber-light)', fontSize: '0.95rem', fontWeight: 700, marginBottom: '6px' }}>Local Specialties</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Kobbari puvvu (coconut flower snacks), egg cutlets, goli sodas & keema puris.</p>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.25rem', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                <h4 style={{ color: 'var(--amber-light)', fontSize: '0.95rem', fontWeight: 700, marginBottom: '6px' }}>Community Gatherings</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Tabemono Food Festival editions, street vendor expos & fan meetups.</p>
              </div>
            </div>
          </div>

          {/* Timeline of Milestones */}
          <div>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <span className="section-tag" style={{ justifyContent: 'center' }}>
                <Calendar size={20} color="#fbbf24" />
                Evolution & Milestones
              </span>
              <h2 className="section-title">Our Growth Timeline</h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                How a small handheld smartphone review channel transformed into a regional food culture institution.
              </p>
            </div>

            <div style={{ position: 'relative', maxWidth: '850px', margin: '0 auto' }}>
              {/* Timeline Center Line */}
              <div
                style={{
                  position: 'absolute',
                  left: '24px',
                  top: '0',
                  bottom: '0',
                  width: '2px',
                  background: 'linear-gradient(180deg, var(--amber-primary) 0%, rgba(245, 158, 11, 0.1) 100%)',
                }}
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                {STORY_DATA.milestones.map((m, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1.75rem',
                      position: 'relative',
                    }}
                  >
                    {/* Circle Node */}
                    <div
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        background: '#12141c',
                        border: '2px solid var(--amber-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        color: 'var(--amber-light)',
                        fontWeight: 900,
                        fontSize: '0.82rem',
                        boxShadow: '0 0 15px rgba(245, 158, 11, 0.4)',
                        zIndex: 2,
                      }}
                    >
                      {m.year}
                    </div>

                    {/* Timeline Content Card */}
                    <div
                      className="glass-card"
                      style={{
                        padding: '1.75rem',
                        flex: 1,
                        borderRadius: '20px',
                      }}
                    >
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
                        {m.title}
                      </h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                        {m.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Tabemono CTA */}
      <section style={{ padding: '4rem 0', background: '#0e1015', borderTop: '1px solid var(--border-subtle)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '750px' }}>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>
            Experience The Culmination: TABEMONO
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
            See how our love for local food gave birth to Telangana’s most anticipated street food festival.
          </p>
          <Link to="/tabemono-the-food-fest" className="btn-primary" style={{ padding: '0.9rem 2.2rem' }}>
            <span>Explore Tabemono Food Fest</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};
