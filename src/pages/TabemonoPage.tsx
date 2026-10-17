import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Sparkles,
  Calendar,
  MapPin,
  Store,
  Video,
  Search,
  CheckCircle2,
  Camera,
  Send,
  ArrowRight,
  Clock,
  Ticket,
} from 'lucide-react';
import {
  BRAND_INFO,
  TABEMONO_STALLS_EDITION_1,
  TABEMONO_STALLS_EDITION_2,
} from '../data/kfoodiesData';
import { VideoPlayer } from '../components/VideoPlayer';
import { ImageLightbox } from '../components/ImageLightbox';

export const TabemonoPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialSeasonParam = searchParams.get('season');
  const initialSeason: 3 | 1 | 2 =
    initialSeasonParam === '1' ? 1 : initialSeasonParam === '2' ? 2 : 3;

  // Ordered: Season 3 (Upcoming), Season 1 (Debut), Season 2 (Mega)
  const [activeSeason, setActiveSeason] = useState<3 | 1 | 2>(initialSeason);
  const [stallSearch, setStallSearch] = useState<string>('');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const s = searchParams.get('season');
    if (s === '1') setActiveSeason(1);
    else if (s === '2') setActiveSeason(2);
    else if (s === '3') setActiveSeason(3);
  }, [searchParams]);

  // Registration Form State for Season 3
  const [regSubmitted, setRegSubmitted] = useState<boolean>(false);
  const [regData, setRegData] = useState({
    name: '',
    phone: '',
    stallOrBrand: '',
    foodCategory: 'biryani',
    type: 'stall',
    notes: '',
  });

  const handleRegSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegSubmitted(true);
  };

  // Direct smoothly to the hero section with the logo emblem fully visible at the top
  const handleSeasonSelect = (seasonId: 3 | 1 | 2) => {
    setActiveSeason(seasonId);
    setStallSearch('');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  interface SeasonMetaItem {
    id: number;
    tag: string;
    title: string;
    subtitle: string;
    date: string;
    venue: string;
    entry: string;
    headline: string;
    description: string;
    stallCountText: string;
    isUpcoming: boolean;
    logo?: string;
    video?: string;
    videoTitle?: string;
    stalls?: typeof TABEMONO_STALLS_EDITION_1;
    gallery: { src: string; caption: string }[];
  }

  const seasonMeta: Record<3 | 1 | 2, SeasonMetaItem> = {
    3: {
      id: 3,
      tag: 'Upcoming Mega Edition',
      title: 'TABEMONO SEASON 3',
      subtitle: 'The Next Evolution • Vendor & Sponsor Registrations Active',
      logo: '/images/kfoodies-live/main-BdW8YIOs.png',
      date: 'Coming Soon • Late 2026 / 2027',
      venue: 'Prakasham Stadium & Grand Grounds, Kothagudem',
      entry: 'Early Bird Pass Registrations Active',
      headline: 'TASTE THE FUTURE OF TELANGANA FOOD CULTURE',
      description:
        'Preparations for Tabemono Season 3 are officially underway! Building upon the record-breaking success of our first two editions, Season 3 will expand to grander grounds, 40+ curated stalls, international & regional food stalls, live acoustic music, creator meet-and-greets, and brand showcases.',
      stallCountText: '40+ Planned Stalls',
      isUpcoming: true,
      gallery: [],
    },
    1: {
      id: 1,
      tag: 'Historic Debut Edition',
      title: 'TABEMONO SEASON 1',
      subtitle: 'The Historic Festival That Sparked A Movement',
      logo: '/images/kfoodies-live/main-BdW8YIOs.png',
      date: '09/06/2024 (June 9, 2024)',
      venue: 'Sri Sarada Vidhyalaya School Ground, Kothagudem',
      entry: '₹50/- Public Entry Pass',
      headline: 'A CELEBRATION OF FOOD, CULTURE & COMMUNITY',
      description:
        'Tabemono wasn’t just a food fest — it was a celebration of food, culture, community, and culinary art. With its ₹50 entry, high-energy crowd, and Instagram-worthy presence, it successfully cemented itself as one of the most memorable public events in Kothagudem’s recent history — setting the stage for even bigger editions to come.',
      video: BRAND_INFO.media.videoTabemono1,
      videoTitle: 'Tabemono Season 1 • Official Live Highlights (Sarada Vidhyalaya)',
      stalls: TABEMONO_STALLS_EDITION_1,
      stallCountText: 'All 20 Participating Stalls',
      isUpcoming: false,
      gallery: [
        { src: '/images/kfoodies-live/banner-DiHVY9Zf.jpg', caption: 'Sarada Vidhyalaya Main Entrance Crowds' },
        { src: '/images/kfoodies-live/main-BdW8YIOs.png', caption: 'Tabemono Season 1 Opening Ceremony' },
        { src: '/images/kfoodies-live/dhaba-DhSDqm1a.jpeg', caption: 'Local Food Stall Counters at Season 1' },
        { src: '/images/kfoodies-live/cart-L-qzmNkf.jpeg', caption: 'Amul & Refreshment Stalls' },
      ],
    },
    2: {
      id: 2,
      tag: 'Record-Breaking Stadium Edition',
      title: 'TABEMONO SEASON 2',
      subtitle: 'A True Cultural Phenomenon at Prakasham Stadium',
      logo: '/images/kfoodies-live/t2logo-oUVkyJTK.png',
      date: 'March 2025',
      venue: 'Prakasham Stadium, Kothagudem',
      entry: 'Pocket-Friendly Community Pass',
      headline: 'TASTE IT ALL, ONE STALL AT A TIME',
      description:
        'On the grand success of its first edition, Tabemono returned bigger and bolder — transforming from a food fest into a true cultural phenomenon. With 25 curated stalls, diverse cuisines, vibrant performances, and a massive social media wave, Season 2 drew record-breaking crowds and redefined what a food festival could be in Kothagudem. Supported by premier partners like Vasundhara Shopping Mall.',
      video: BRAND_INFO.media.videoTabemono2,
      videoTitle: 'Tabemono Season 2 • Prakasham Stadium Mega Highlights',
      stalls: TABEMONO_STALLS_EDITION_2,
      stallCountText: 'All 25 Verified Stalls',
      isUpcoming: false,
      gallery: [
        { src: '/images/kfoodies-live/purishawarma-DOsaXRzf.jpeg', caption: 'Season 2 Viral Fusion Bites' },
        { src: '/images/chef-wok-fire.jpeg', caption: 'Live Barbecue & Wok Counters' },
        { src: '/images/kfoodies-live/side image-CrOBJnoY.jpeg', caption: 'Biryani Special Stalls at Prakasham Stadium' },
        { src: '/images/kfoodies-live/shakes-zTILArjz.jpeg', caption: 'Thick Milkshakes & Dessert Hub' },
      ],
    },
  };

  const current = seasonMeta[activeSeason];

  const currentStalls = (activeSeason === 1 ? TABEMONO_STALLS_EDITION_1 : activeSeason === 2 ? TABEMONO_STALLS_EDITION_2 : []);

  const filteredStalls = currentStalls.filter(
    (s) =>
      s.name.toLowerCase().includes(stallSearch.toLowerCase()) ||
      s.location.toLowerCase().includes(stallSearch.toLowerCase()) ||
      s.stall.toLowerCase().includes(stallSearch.toLowerCase())
  );

  return (
    <div style={{ paddingTop: '76px', minHeight: '100vh', background: '#07080b' }}>
      {/* =========================================================================
          PERSISTENT STICKY SEASON SELECTOR (Season 3, Season 1, Season 2)
          ========================================================================= */}
      <section
        style={{
          background: 'rgba(10, 11, 14, 0.96)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          position: 'sticky',
          top: '76px',
          zIndex: 40,
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          padding: '0.85rem 0',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.85rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--amber-light)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Select Festival Edition:
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.55rem',
              flexWrap: 'wrap',
            }}
          >
            {/* Season 3 Button (First) */}
            <button
              onClick={() => handleSeasonSelect(3)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '0.55rem 1.25rem',
                borderRadius: '999px',
                cursor: 'pointer',
                fontWeight: 800,
                fontSize: '0.86rem',
                transition: 'all 0.25s ease',
                border: activeSeason === 3 ? '1px solid var(--amber-primary)' : '1px solid rgba(255, 255, 255, 0.12)',
                background:
                  activeSeason === 3
                    ? 'var(--orange-gradient)'
                    : 'rgba(255, 255, 255, 0.05)',
                color: activeSeason === 3 ? '#0a0b0e' : '#ffffff',
                boxShadow: activeSeason === 3 ? '0 4px 18px rgba(245, 158, 11, 0.45)' : 'none',
              }}
            >
              <Sparkles size={14} />
              <span>Season 3 (Upcoming & Register)</span>
              <span
                style={{
                  fontSize: '0.62rem',
                  background: activeSeason === 3 ? '#0a0b0e' : '#ea580c',
                  color: '#ffffff',
                  padding: '1px 6px',
                  borderRadius: '999px',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                }}
              >
                Upcoming
              </span>
            </button>

            {/* Season 1 Button (Second) */}
            <button
              onClick={() => handleSeasonSelect(1)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '0.55rem 1.15rem',
                borderRadius: '999px',
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: '0.86rem',
                transition: 'all 0.25s ease',
                border: activeSeason === 1 ? '1px solid var(--amber-primary)' : '1px solid rgba(255, 255, 255, 0.12)',
                background:
                  activeSeason === 1
                    ? 'var(--orange-gradient)'
                    : 'rgba(255, 255, 255, 0.05)',
                color: activeSeason === 1 ? '#0a0b0e' : '#d1d5db',
                boxShadow: activeSeason === 1 ? '0 4px 18px rgba(245, 158, 11, 0.4)' : 'none',
              }}
            >
              <span>Season 1 (Sarada Vidhyalaya)</span>
            </button>

            {/* Season 2 Button (Third) */}
            <button
              onClick={() => handleSeasonSelect(2)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '0.55rem 1.15rem',
                borderRadius: '999px',
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: '0.86rem',
                transition: 'all 0.25s ease',
                border: activeSeason === 2 ? '1px solid var(--amber-primary)' : '1px solid rgba(255, 255, 255, 0.12)',
                background:
                  activeSeason === 2
                    ? 'var(--orange-gradient)'
                    : 'rgba(255, 255, 255, 0.05)',
                color: activeSeason === 2 ? '#0a0b0e' : '#d1d5db',
                boxShadow: activeSeason === 2 ? '0 4px 18px rgba(245, 158, 11, 0.4)' : 'none',
              }}
            >
              <span>Season 2 (Prakasham Stadium - 25 Stalls)</span>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          DYNAMIC HERO FOR THE SELECTED SEASON (Scroll Target)
          ========================================================================= */}
      <section
        id="season-hero"
        style={{
          padding: '4.5rem 0 3.5rem 0',
          position: 'relative',
          overflow: 'hidden',
          background:
            activeSeason === 3
              ? 'radial-gradient(ellipse at center, rgba(245, 158, 11, 0.22) 0%, rgba(7, 8, 11, 0.98) 75%)'
              : activeSeason === 2
              ? 'radial-gradient(ellipse at center, rgba(234, 88, 12, 0.2) 0%, rgba(7, 8, 11, 0.98) 75%)'
              : 'radial-gradient(ellipse at center, rgba(245, 158, 11, 0.16) 0%, rgba(7, 8, 11, 0.98) 75%)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          {/* Authentic Logo emblem */}
          <div
            id="season-logo"
            style={{
              maxWidth: '220px',
              height: '92px',
              margin: '0 auto 1.35rem auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              filter: 'drop-shadow(0 8px 24px rgba(245, 158, 11, 0.45))',
            }}
          >
            <img
              src={current.logo || BRAND_INFO.media.tabemonoLogo}
              alt={current.title}
              style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
              onError={(e) => {
                e.currentTarget.src = '/images/kfoodies-live/main-BdW8YIOs.png';
              }}
            />
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(245, 158, 11, 0.15)',
              border: '1px solid rgba(245, 158, 11, 0.35)',
              padding: '6px 18px',
              borderRadius: '999px',
              color: '#fbbf24',
              fontSize: '0.85rem',
              fontWeight: 800,
              marginBottom: '1rem',
            }}
          >
            <span className="pulse-dot" />
            <span>{current.tag}</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              lineHeight: 1.12,
              marginBottom: '1.25rem',
            }}
          >
            {current.title}
          </h1>

          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              maxWidth: '820px',
              margin: '0 auto 2.5rem auto',
            }}
          >
            {current.description}
          </p>

          {/* Quick Info Badges */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1.25rem',
              maxWidth: '900px',
              margin: '0 auto 2.5rem auto',
            }}
          >
            <div
              className="glass-card"
              style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <Calendar size={22} color="var(--amber-primary)" />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Event Date</div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff' }}>{current.date}</div>
              </div>
            </div>

            <div
              className="glass-card"
              style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <MapPin size={22} color="var(--orange-primary)" />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Official Venue</div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff' }}>{current.venue}</div>
              </div>
            </div>

            <div
              className="glass-card"
              style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <Store size={22} color="#fbbf24" />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Stall Lineup</div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff' }}>{current.stallCountText}</div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {activeSeason === 3 ? (
              <a href="#season3-register" className="btn-primary" style={{ padding: '0.85rem 2.2rem' }}>
                <Sparkles size={18} />
                <span>Register For Season 3</span>
              </a>
            ) : (
              <>
                <a href="#stalls" className="btn-primary" style={{ padding: '0.85rem 2.2rem' }}>
                  <span>Explore Season {activeSeason} Stalls</span>
                  <ArrowRight size={18} />
                </a>
                <a href="#video-showcase" className="btn-secondary" style={{ padding: '0.85rem 2rem' }}>
                  <Video size={18} />
                  <span>Watch Highlights Video</span>
                </a>
              </>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SEASON 3 EXCLUSIVE: COMING SOON SECTION & REGISTRATION
          (Teaser, fake stalls & moments removed as requested!)
          ========================================================================= */}
      {activeSeason === 3 && (
        <>
          {/* Prominent COMING SOON Banner */}
          <section
            style={{
              padding: '5rem 0 3.5rem 0',
              background: '#090a0e',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              textAlign: 'center',
            }}
          >
            <div className="container" style={{ maxWidth: '850px' }}>
              <div
                className="glass-card"
                style={{
                  padding: 'clamp(3rem, 6vw, 4.5rem) 2rem',
                  borderRadius: '28px',
                  border: '2px solid rgba(245, 158, 11, 0.45)',
                  background:
                    'radial-gradient(ellipse at center, rgba(245, 158, 11, 0.16) 0%, rgba(14, 16, 22, 0.95) 70%)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.85), 0 0 45px rgba(245, 158, 11, 0.25)',
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 16px',
                    borderRadius: '999px',
                    background: 'rgba(245, 158, 11, 0.15)',
                    border: '1px solid rgba(245, 158, 11, 0.35)',
                    color: 'var(--amber-light)',
                    fontSize: '0.84rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    marginBottom: '1.5rem',
                  }}
                >
                  <Clock size={16} color="var(--amber-primary)" />
                  <span>The Next Chapter Is Loading</span>
                </div>

                <h2
                  className="shimmer-text"
                  style={{
                    fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
                    fontWeight: 900,
                    letterSpacing: '0.06em',
                    lineHeight: 1.1,
                    marginBottom: '1.25rem',
                  }}
                >
                  COMING SOON......
                </h2>

                <p
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
                    lineHeight: 1.7,
                    maxWidth: '680px',
                    margin: '0 auto 2.5rem auto',
                  }}
                >
                  The official teaser, confirmed stall roster, and festival program for <strong>Tabemono Season 3</strong> are currently under preparation. We are designing our grandest edition yet with 40+ stalls, concert-grade acoustic stages, and massive culinary surprises!
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '1rem',
                  }}
                >
                  <a
                    href="#season3-register"
                    className="btn-primary"
                    style={{ padding: '0.9rem 2.2rem', fontSize: '1rem' }}
                  >
                    <Sparkles size={18} />
                    <span>Register For Early Stall Allotment</span>
                  </a>

                  <button
                    onClick={() => handleSeasonSelect(2)}
                    className="btn-secondary"
                    style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}
                  >
                    <span>Explore Season 2 Stalls (25)</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Season 3 Registration Form */}
          <section
            id="season3-register"
            className="section-py"
            style={{
              background: 'linear-gradient(180deg, #090a0e 0%, #11141e 100%)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div className="container" style={{ maxWidth: '850px' }}>
              <div
                className="glass-card"
                style={{
                  padding: 'clamp(2rem, 5vw, 3.5rem)',
                  borderRadius: '28px',
                  border: '1px solid rgba(245, 158, 11, 0.35)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.8), 0 0 35px rgba(245, 158, 11, 0.15)',
                }}
              >
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                  <span className="section-tag" style={{ justifyContent: 'center' }}>
                    <Sparkles size={20} color="#fbbf24" />
                    Vendor & Visitor Participation
                  </span>
                  <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 900, color: '#ffffff', marginBottom: '0.75rem' }}>
                    Register For Tabemono Season 3
                  </h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                    Reserve your food stall space, discuss sponsorship partnership packages, or request priority notification for ticket passes.
                  </p>
                </div>

                {regSubmitted ? (
                  <div
                    style={{
                      background: 'rgba(34, 197, 94, 0.12)',
                      border: '1px solid rgba(34, 197, 94, 0.4)',
                      padding: '2.5rem 2rem',
                      borderRadius: '20px',
                      textAlign: 'center',
                    }}
                  >
                    <CheckCircle2 size={54} color="#22c55e" style={{ margin: '0 auto 1.25rem auto' }} />
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.65rem' }}>
                      Registration Received Successfully!
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                      Thank you <strong>{regData.name}</strong>. Our Tabemono Season 3 team has registered your interest for <strong>{regData.stallOrBrand || 'Season 3 Participation'}</strong>. We will reach out to <strong>{regData.phone}</strong> with allotment instructions.
                    </p>
                    <button
                      onClick={() => setRegSubmitted(false)}
                      className="btn-secondary"
                    >
                      Register Another Stall or Contact
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleRegSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                      <div>
                        <label className="form-label">Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Charan Reddy"
                          className="form-input"
                          value={regData.name}
                          onChange={(e) => setRegData({ ...regData, name: e.target.value })}
                        />
                      </div>

                      <div>
                        <label className="form-label">Phone / WhatsApp Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          className="form-input"
                          value={regData.phone}
                          onChange={(e) => setRegData({ ...regData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                      <div>
                        <label className="form-label">Participation Type *</label>
                        <select
                          className="form-input"
                          value={regData.type}
                          onChange={(e) => setRegData({ ...regData, type: e.target.value })}
                          style={{ cursor: 'pointer' }}
                        >
                          <option value="stall" style={{ background: '#12141c' }}>Food Stall Vendor (Reserve Stall)</option>
                          <option value="sponsor" style={{ background: '#12141c' }}>Brand Sponsor / Partner</option>
                          <option value="passes" style={{ background: '#12141c' }}>Visitor / Early Bird Pass Notification</option>
                          <option value="influencer" style={{ background: '#12141c' }}>Media / Food Influencer All-Access</option>
                        </select>
                      </div>

                      <div>
                        <label className="form-label">Stall Name / Restaurant / Brand *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Royal Biryani / Sweet Delights"
                          className="form-input"
                          value={regData.stallOrBrand}
                          onChange={(e) => setRegData({ ...regData, stallOrBrand: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="form-label">Specialty Dishes / Proposed Offerings</label>
                      <textarea
                        rows={3}
                        placeholder="List the signature items, combo offers, or cuisine style you plan to serve at Season 3..."
                        className="form-input"
                        style={{ resize: 'vertical' }}
                        value={regData.notes}
                        onChange={(e) => setRegData({ ...regData, notes: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary"
                      style={{ padding: '1rem', fontSize: '1rem', marginTop: '0.5rem' }}
                    >
                      <Send size={18} />
                      <span>Submit Tabemono Season 3 Registration</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </section>
        </>
      )}

      {/* =========================================================================
          SEASONS 1 & 2: DYNAMIC VIDEO SHOWCASE
          ========================================================================= */}
      {activeSeason !== 3 && current.video && (
        <section id="video-showcase" className="section-py" style={{ background: '#0a0b0e' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-tag" style={{ justifyContent: 'center' }}>
                <Video size={20} color="#f59e0b" />
                Season {activeSeason} Official Aftermovie
              </span>
              <h2 className="section-title">
                {activeSeason === 1 ? 'Season 1 Debut Highlights (Sarada Vidhyalaya Ground)' : 'Season 2 Stadium Highlights (Prakasham Stadium)'}
              </h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                {activeSeason === 1
                  ? 'Relive the historic June 09, 2024 debut festival at Sri Sarada Vidhyalaya School Ground with ₹50 entry.'
                  : 'Experience the electric stadium atmosphere at Prakasham Stadium with 25 official stalls.'}
              </p>
            </div>

            <div style={{ maxWidth: '960px', margin: '0 auto' }}>
              <VideoPlayer
                key={`video-season-${activeSeason}`}
                src={current.video}
                title={current.videoTitle}
                height="480px"
              />
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          SEASONS 1 & 2: OFFICIAL STALLS ROSTER
          (All 25 for Season 2, All 20 for Season 1)
          ========================================================================= */}
      {activeSeason !== 3 && (
        <section id="stalls" className="section-py" style={{ background: '#0e1015' }}>
          <div className="container">
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                gap: '1.5rem',
                marginBottom: '2.5rem',
              }}
            >
              <div>
                <span className="section-tag">
                  <Store size={20} color="var(--amber-light)" />
                  Official Stall Roster
                </span>
                <h2 className="section-title">
                  Tabemono Season {activeSeason} Stalls ({currentStalls.length})
                </h2>
                <p className="section-subtitle">
                  {activeSeason === 2
                    ? 'All 25 verified participating stalls from Prakasham Stadium, Kothagudem.'
                    : 'All 20 authentic stalls from the historic Sri Sarada Vidhyalaya Ground debut.'}
                </p>
              </div>

              {/* Stalls Search Bar */}
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  placeholder={`Search Season ${activeSeason} stalls...`}
                  value={stallSearch}
                  onChange={(e) => setStallSearch(e.target.value)}
                  className="form-input"
                  style={{
                    padding: '0.55rem 1rem 0.55rem 2.4rem',
                    fontSize: '0.88rem',
                    width: '260px',
                    borderRadius: '999px',
                  }}
                />
                <Search
                  size={16}
                  color="var(--text-muted)"
                  style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)' }}
                />
              </div>
            </div>

            {/* Stalls Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
                gap: '1.25rem',
              }}
            >
              {filteredStalls.map((stall, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '1.4rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span
                      style={{
                        background: 'rgba(245, 158, 11, 0.15)',
                        color: 'var(--amber-light)',
                        fontWeight: 800,
                        fontSize: '0.75rem',
                        padding: '3px 8px',
                        borderRadius: '6px',
                      }}
                    >
                      {stall.stall}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>
                      Tabemono Season {stall.edition}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.4rem' }}>
                    {stall.name}
                  </h3>

                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    {stall.location}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          SEASONS 1 & 2: FESTIVAL GALLERY MOMENTS
          ========================================================================= */}
      {activeSeason !== 3 && current.gallery.length > 0 && (
        <section className="section-py" style={{ background: '#0a0b0e' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-tag" style={{ justifyContent: 'center' }}>
                <Camera size={20} color="#fbbf24" />
                Season {activeSeason} Gallery
              </span>
              <h2 className="section-title">Visual Moments From Season {activeSeason}</h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Click any image to view in full-screen festival lightbox.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {current.gallery.map((img, i) => (
                <div
                  key={i}
                  className="glass-card img-wrap"
                  style={{
                    height: '240px',
                    cursor: 'pointer',
                    position: 'relative',
                  }}
                  onClick={() => setLightboxIndex(i)}
                >
                  <img src={img.src} alt={img.caption} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, transparent 50%, rgba(10,11,14,0.92) 100%)',
                      display: 'flex',
                      alignItems: 'flex-end',
                      padding: '1rem',
                    }}
                  >
                    <span style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: 700 }}>
                      {img.caption}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Modal (for Season 1 & 2) */}
      {activeSeason !== 3 && current.gallery.length > 0 && (
        <ImageLightbox
          images={current.gallery}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNext={() =>
            setLightboxIndex((prev) => (prev !== null ? (prev + 1) % current.gallery.length : null))
          }
          onPrev={() =>
            setLightboxIndex((prev) =>
              prev !== null ? (prev - 1 + current.gallery.length) % current.gallery.length : null
            )
          }
        />
      )}
    </div>
  );
};
