import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  UtensilsCrossed,
  Eye,
  Users,
  Video,
  Handshake,
  MapPin,
  Calendar,
  Flame,
  Award,
  Play,
  RotateCcw,
} from 'lucide-react';
import { BRAND_INFO, FOOD_ITEMS, TEAM_MEMBERS, COLLABORATION_PILLARS, SPONSORS } from '../data/kfoodiesData';
import { FoodCard } from '../components/FoodCard';
import { TeamCard } from '../components/TeamCard';
import { VideoPlayer } from '../components/VideoPlayer';
import { SponsorGrid } from '../components/SponsorGrid';
import { AnimatedCounter } from '../components/AnimatedCounter';

export const HomePage: React.FC = () => {
  const featuredFoods = FOOD_ITEMS.slice(0, 4);
  const featuredTeam = TEAM_MEMBERS.slice(0, 4);

  // Intro Animation State: 'playing' (pasta pagoda with fire) -> 'zooming' (zooms out from fire) -> 'done' (home page pops up)
  const [introPhase, setIntroPhase] = useState<'playing' | 'zooming' | 'done'>('playing');

  // Trigger the zoom-out transition
  const handleTransition = () => {
    if (introPhase !== 'playing') return;
    setIntroPhase('zooming');
    setTimeout(() => {
      setIntroPhase('done');
    }, 850);
  };

  // Replay intro anytime
  const handleReplayIntro = () => {
    setIntroPhase('playing');
  };

  useEffect(() => {
    if (introPhase === 'playing') {
      const timer = setTimeout(() => {
        handleTransition();
      }, 3800);
      return () => clearTimeout(timer);
    }
  }, [introPhase]);

  return (
    <div style={{ position: 'relative' }}>
      {/* =========================================================================
          CINEMATIC TRANSLUCENT INTRO (Pasta Pagoda Zoom-Out & Fire Reveal)
          ========================================================================= */}
      {(introPhase === 'playing' || introPhase === 'zooming') && (
        <div
          onClick={handleTransition}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: '#07080b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            overflow: 'hidden',
            transition: 'opacity 0.85s ease',
            opacity: introPhase === 'zooming' ? 0 : 1,
            pointerEvents: introPhase === 'zooming' ? 'none' : 'auto',
          }}
        >
          {/* Centered Translucent Video with High-Definition Native Crispness */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.85s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.85s ease',
              transform: introPhase === 'zooming' ? 'scale(0.98)' : 'scale(1)',
              opacity: introPhase === 'zooming' ? 0 : 1,
            }}
          >
            <video
              src={BRAND_INFO.media.videoHero}
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: 'translateZ(0)',
                WebkitBackfaceVisibility: 'hidden',
                backfaceVisibility: 'hidden',
                imageRendering: '-webkit-optimize-contrast',
              }}
            />
          </div>

          {/* Clean dark vignette overlay (Preserves native 1080p hardware clarity with zero filter blur) */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(circle at center, transparent 35%, rgba(6, 7, 9, 0.72) 100%)',
              pointerEvents: 'none',
            }}
          />

          {/* Minimalist click-anywhere cue */}
          <div
            style={{
              position: 'absolute',
              bottom: '32px',
              color: 'rgba(255, 255, 255, 0.45)',
              fontSize: '0.8rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              pointerEvents: 'none',
              transition: 'opacity 0.3s ease',
              opacity: introPhase === 'zooming' ? 0 : 0.75,
            }}
          >
            Click anywhere to enter
          </div>

          {/* Quick Skip Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIntroPhase('done');
            }}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              zIndex: 30,
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: 'rgba(255, 255, 255, 0.6)',
              padding: '6px 14px',
              borderRadius: '999px',
              fontSize: '0.78rem',
              fontWeight: 600,
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.2s ease',
            }}
          >
            Skip ✕
          </button>
        </div>
      )}

      {/* Main Website Wrapper with Smooth Pop-Up Animation */}
      <div
        className={
          introPhase === 'zooming'
            ? 'site-popup-animating'
            : introPhase === 'playing'
            ? 'site-popup-hidden'
            : 'site-popup-ready'
        }
      >
        {/* =========================================================================
            HERO SECTION (Cinematic Video Background with TastyBites Typography)
            ========================================================================= */}
        <section
          style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '120px',
            paddingBottom: '80px',
            overflow: 'hidden',
          }}
        >
        {/* Background Video (pasta-pagoda-wok) */}
        <video
          src={BRAND_INFO.media.videoHero}
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.56) contrast(1.1) saturate(1.2)',
            opacity: 0.92,
          }}
        />

        {/* Cinematic soft vignette overlay allowing video motion to be visible */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at center, rgba(10, 11, 14, 0.28) 0%, rgba(10, 11, 14, 0.82) 100%), linear-gradient(180deg, rgba(10, 11, 14, 0.35) 0%, rgba(10, 11, 14, 0.92) 100%)',
            pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(245, 158, 11, 0.18)',
              border: '1px solid rgba(245, 158, 11, 0.45)',
              padding: '6px 16px',
              borderRadius: '999px',
              color: '#fbbf24',
              fontSize: '0.86rem',
              fontWeight: 700,
              marginBottom: '1.5rem',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
            }}
          >
            <span className="pulse-dot" />
            <span>Kothagudem’s #1 Food Discovery & Review Network</span>
          </div>

          {/* Main Title */}
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              maxWidth: '960px',
              margin: '0 auto 1.5rem auto',
              textShadow: '0 4px 30px rgba(0, 0, 0, 0.85), 0 2px 6px rgba(0, 0, 0, 0.9)',
            }}
          >
            Elevating <span className="shimmer-text">Street Food</span> & Community Culture
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#e5e7eb',
              lineHeight: 1.6,
              maxWidth: '720px',
              margin: '0 auto 2.5rem auto',
              textShadow: '0 2px 14px rgba(0, 0, 0, 0.95)',
            }}
          >
            From midnight tawa fries to the explosive <strong style={{ color: '#fbbf24' }}>Tabemono Food Festival</strong>, we spotlight the authentic dishes, local chefs, and flavors of Kothagudem & Bhadradri region.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '3.5rem',
            }}
          >
            <Link to="/food" className="btn-primary" style={{ padding: '0.9rem 2.2rem', fontSize: '1rem' }}>
              <UtensilsCrossed size={18} />
              <span>Explore Menu & Prices</span>
            </Link>

            <Link
              to="/tabemono-the-food-fest"
              className="btn-secondary"
              style={{
                padding: '0.9rem 2rem',
                fontSize: '1rem',
                border: '1px solid rgba(245, 158, 11, 0.4)',
                background: 'rgba(245, 158, 11, 0.1)',
                color: '#fbbf24',
              }}
            >
              <Sparkles size={18} color="#f59e0b" />
              <span>Tabemono Food Fest</span>
            </Link>

            {/* Replay Fire Intro Trigger */}
            <button
              onClick={handleReplayIntro}
              title="Watch the Pasta Pagoda fire zoom-out transition again"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.9rem 1.6rem',
                fontSize: '0.94rem',
                fontWeight: 700,
                borderRadius: '999px',
                border: '1px solid rgba(234, 88, 12, 0.5)',
                background: 'rgba(234, 88, 12, 0.16)',
                color: '#fbbf24',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(234, 88, 12, 0.32)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(245, 158, 11, 0.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(234, 88, 12, 0.16)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <RotateCcw size={16} />
              <span>Replay Fire Intro</span>
            </button>
          </div>

          {/* Stats Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              maxWidth: '1000px',
              margin: '0 auto',
            }}
          >
            {BRAND_INFO.stats.map((stat, i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  padding: '1.25rem 1rem',
                  borderRadius: '16px',
                  background: 'rgba(16, 18, 24, 0.7)',
                }}
              >
                <div
                  style={{
                    fontSize: '2.1rem',
                    fontWeight: 900,
                    color: '#ffffff',
                    lineHeight: 1,
                    marginBottom: '6px',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  <span style={{ color: 'var(--amber-primary)' }}>
                    <AnimatedCounter
                      end={stat.valueNum || 100}
                      suffix={stat.suffix || ''}
                    />
                  </span>
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#f3f4f6', marginBottom: '2px' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-dim)' }}>
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED FOOD & MENU PREVIEW (Authentic prices & dishes)
          ========================================================================= */}
      <section className="section-py" style={{ background: '#0b0c10', position: 'relative' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '1.5rem',
              marginBottom: '3rem',
            }}
          >
            <div>
              <span className="section-tag">
                <Flame size={20} color="#ea580c" />
                Crispy, Spicy & Authentic
              </span>
              <h2 className="section-title">Featured Bites & Real Prices</h2>
              <p className="section-subtitle">
                Authentic street flavors and beloved dishes reviewed and curated directly from Kothagudem stalls.
              </p>
            </div>

            <Link to="/food" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <span>View Full Menu & Prices</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {featuredFoods.map((food) => (
              <FoodCard key={food.id} item={food} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          TABEMONO THE FOOD FEST SPOTLIGHT (Season 1, 2, 3 Experience)
          ========================================================================= */}
      <section
        className="section-py"
        style={{
          background: 'linear-gradient(180deg, #0b0c10 0%, #111319 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            {/* Left Content */}
            <div>
              <span className="section-tag">
                <Sparkles size={20} color="#f59e0b" />
                The Ultimate Cultural Phenomenon
              </span>
              <h2 className="section-title">TABEMONO THE FOOD FEST</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Tabemono wasn’t just a food fest — it was a celebration of culinary art, music, community, and street food heritage. With its accessible ₹50 entry, record-breaking crowds at Prakasham Stadium and Sarada Vidhyalaya Ground, and 25+ curated stalls, it set a new benchmark for Telangana food festivals.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(245, 158, 11, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Calendar size={20} color="var(--amber-primary)" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#ffffff' }}>Past Editions & Upcoming Season 3</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>June 2024 (Season 1) • March 2025 (Season 2) • Season 3 Coming Soon</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(234, 88, 12, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <MapPin size={20} color="var(--orange-primary)" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#ffffff' }}>Iconic Grounds</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Prakasham Stadium & Sri Sarada Vidhyalaya Ground, Kothagudem</div>
                  </div>
                </div>
              </div>

              <Link to="/tabemono-the-food-fest" className="btn-primary" style={{ padding: '0.85rem 2rem' }}>
                <span>Explore Tabemono Festival</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Right Video Showcase */}
            <div>
              <VideoPlayer
                src={BRAND_INFO.media.videoTabemono1}
                title="Tabemono Food Fest Live Aftermovie"
                height="440px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          OUR STORY PREVIEW (Beyond the Plate)
          ========================================================================= */}
      <section className="section-py" style={{ background: '#090a0d' }}>
        <div className="container">
          <div
            className="glass-card"
            style={{
              padding: 'clamp(2rem, 5vw, 4rem)',
              borderRadius: '28px',
              border: '1px solid rgba(255, 255, 255, 0.09)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Subtle glow */}
            <div
              style={{
                position: 'absolute',
                top: '-100px',
                right: '-100px',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(234, 88, 12, 0.2) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <span className="section-tag" style={{ justifyContent: 'center' }}>
                Beyond The Plate
              </span>
              <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
                Why We Feast Together
              </h2>

              <p
                style={{
                  fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
                  lineHeight: 1.8,
                  color: '#e5e7eb',
                  fontStyle: 'italic',
                  marginBottom: '2rem',
                }}
              >
                “We believe good food connects people in ways words often cannot. Food is more than taste—it’s culture, friendship, and celebration. Every bite carries history, every recipe holds memories, and every gathering becomes a story.”
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/story" className="btn-primary" style={{ padding: '0.8rem 1.8rem' }}>
                  <span>Read Our Full Story</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/team" className="btn-secondary" style={{ padding: '0.8rem 1.8rem' }}>
                  <span>Meet The Creators</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          COLLABORATIONS PREVIEW (3 Pillars)
          ========================================================================= */}
      <section className="section-py" style={{ background: '#0e1015' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-tag" style={{ justifyContent: 'center' }}>
              <Handshake size={20} color="#f59e0b" />
              Partnerships & Growth
            </span>
            <h2 className="section-title">Collaborate With Us</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Partner with K-Foodies to showcase your brand, serve your culinary creations, and connect with a vibrant community that celebrates food and culture.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.75rem',
              marginBottom: '3rem',
            }}
          >
            {COLLABORATION_PILLARS.map((collab, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    background: 'var(--orange-gradient)',
                    color: '#0a0b0e',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                    fontWeight: 900,
                  }}
                >
                  <Award size={26} />
                </div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
                  {collab.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem', flex: 1 }}>
                  {collab.desc}
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {collab.benefits.slice(0, 2).map((b, i) => (
                    <li key={i} style={{ fontSize: '0.82rem', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--amber-primary)', fontWeight: 800 }}>✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/collaborations"
                  className="btn-secondary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          TEAM PREVIEW
          ========================================================================= */}
      <section className="section-py" style={{ background: '#0a0b0e' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '1.5rem',
              marginBottom: '3rem',
            }}
          >
            <div>
              <span className="section-tag">
                <Users size={20} color="#fbbf24" />
                The People Behind The Camera
              </span>
              <h2 className="section-title">Meet The K-Foodies Team</h2>
              <p className="section-subtitle">
                The passionate hosts, cinematographers, strategists, and event planners putting Kothagudem on the culinary map.
              </p>
            </div>

            <Link to="/team" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <span>View All Team Members</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {featuredTeam.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SPONSORS PREVIEW
          ========================================================================= */}
      <section className="section-py" style={{ background: '#0e1014' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-tag" style={{ justifyContent: 'center' }}>
              Trusted by Top Brands
            </span>
            <h2 className="section-title">Our Proud Sponsors & Partners</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Valued partners who supported Tabemono Food Festival editions and community food initiatives.
            </p>
          </div>

          <SponsorGrid limit={8} />

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/sponsors" className="btn-secondary" style={{ padding: '0.75rem 1.8rem' }}>
              <span>View All 17+ Sponsors</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BOTTOM CALL TO ACTION BANNER
          ========================================================================= */}
      <section
        style={{
          padding: '5rem 0',
          background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(234, 88, 12, 0.18) 100%)',
          borderTop: '1px solid rgba(245, 158, 11, 0.25)',
          borderBottom: '1px solid rgba(245, 158, 11, 0.25)',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900, color: '#ffffff', marginBottom: '1rem' }}>
            Know an Underrated Street Food Spot?
          </h2>
          <p style={{ color: '#e5e7eb', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
            Send us recommendations, invite us for a food review, or book a stall for the upcoming Tabemono Food Fest Season 3!
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary" style={{ padding: '0.9rem 2.2rem' }}>
              Get In Touch With Us
            </Link>
            <Link to="/collaborations" className="btn-secondary" style={{ padding: '0.9rem 2.2rem' }}>
              Sponsorship & Stall Booking
            </Link>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};
