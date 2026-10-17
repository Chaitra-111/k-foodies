import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Handshake,
  CheckCircle,
  Sparkles,
  Store,
  Camera,
  ArrowRight,
  TrendingUp,
  Award,
  Send,
  Zap,
} from 'lucide-react';
import { BRAND_INFO, COLLABORATION_PILLARS, SPONSORS } from '../data/kfoodiesData';
import { SponsorGrid } from '../components/SponsorGrid';

export const CollaborationsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const trackParam = searchParams.get('track');
  const initialTrack = trackParam && ['sponsor', 'stall', 'media', 'review'].includes(trackParam) ? trackParam : 'sponsor';

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeAdjustedNotice, setActiveAdjustedNotice] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    brandOrRestaurant: '',
    email: '',
    phone: '',
    collabType: initialTrack,
    message: '',
  });

  useEffect(() => {
    const t = searchParams.get('track');
    if (t && ['sponsor', 'stall', 'media', 'review'].includes(t)) {
      setFormData((prev) => ({ ...prev, collabType: t }));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // Adjust dropdown and smoothly scroll directly to form with focus & glow effect
  const handleSelectTrack = (trackType: string, trackLabel: string) => {
    setFormData((prev) => ({ ...prev, collabType: trackType }));
    setActiveAdjustedNotice(trackLabel);

    setTimeout(() => {
      const formEl = document.getElementById('collab-form');
      const selectEl = document.getElementById('collab-track-select') as HTMLSelectElement | null;
      if (selectEl) {
        selectEl.value = trackType;
        selectEl.focus();
        // Dynamic pulse animation on the dropdown
        selectEl.style.transition = 'all 0.3s ease';
        selectEl.style.borderColor = 'var(--amber-primary)';
        selectEl.style.boxShadow = '0 0 25px rgba(245, 158, 11, 0.7)';
        setTimeout(() => {
          selectEl.style.borderColor = 'rgba(255, 255, 255, 0.12)';
          selectEl.style.boxShadow = 'none';
        }, 2200);
      }
      if (formEl) {
        const yOffset = -90;
        const y = formEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
      }
    }, 40);
  };

  const trackNames: Record<string, string> = {
    sponsor: 'Festival Sponsor / Title Partner',
    stall: 'Tabemono Food Festival Stall Booking',
    media: 'Media, Influencer & Content Collab',
    review: 'Restaurant / Street Cart Review Request',
  };

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#0a0b0e' }}>
      {/* Header */}
      <section
        style={{
          padding: '4.5rem 0 3.5rem 0',
          background: 'radial-gradient(ellipse at top, rgba(234, 88, 12, 0.15) 0%, transparent 70%)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          textAlign: 'center',
        }}
      >
        <div className="container" style={{ maxWidth: '850px' }}>
          <span className="section-tag" style={{ justifyContent: 'center' }}>
            <Handshake size={20} color="#f59e0b" />
            Partner With Kothagudem Foodies
          </span>
          <h1 className="section-title">Collaborate With Us</h1>
          <p className="section-subtitle" style={{ margin: '0 auto 2.5rem auto' }}>
            Partner with us to showcase your brand, serve your creations at Tabemono Food Fest, and connect with a vibrant community celebrating food, creativity, and local entrepreneurship.
          </p>

          {/* Metric Badges */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1rem',
            }}
          >
            {BRAND_INFO.stats.map((s, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.09)',
                  padding: '8px 18px',
                  borderRadius: '999px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span style={{ color: 'var(--amber-primary)', fontWeight: 800 }}>{s.value}</span>
                <span style={{ color: '#d1d5db', fontSize: '0.85rem' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Collaboration Tracks */}
      <section className="section-py">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
              marginBottom: '4.5rem',
            }}
          >
            {COLLABORATION_PILLARS.map((collab, idx) => {
              const icons = [
                <Sparkles key="1" size={26} color="#0a0b0e" />,
                <Store key="2" size={26} color="#0a0b0e" />,
                <Camera key="3" size={26} color="#0a0b0e" />,
              ];

              return (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '2.5rem 2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '14px',
                      background: 'var(--orange-gradient)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                    }}
                  >
                    {icons[idx]}
                  </div>

                  <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.85rem' }}>
                    {collab.title}
                  </h2>

                  <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.75rem', flex: 1 }}>
                    {collab.desc}
                  </p>

                  <div style={{ marginBottom: '2rem' }}>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--amber-light)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.85rem' }}>
                      Key Collaboration Benefits
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                      {collab.benefits.map((benefit, i) => (
                        <li key={i} style={{ fontSize: '0.86rem', color: '#e5e7eb', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                          <CheckCircle size={16} color="var(--amber-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    id={`track-btn-${idx === 0 ? 'sponsor' : idx === 1 ? 'stall' : 'media'}`}
                    onClick={() => {
                      const trackMap: Record<number, { key: string; label: string }> = {
                        0: { key: 'sponsor', label: 'Festival Sponsor / Title Partner' },
                        1: { key: 'stall', label: 'Tabemono Food Festival Stall Booking' },
                        2: { key: 'media', label: 'Media, Influencer & Content Collab' },
                      };
                      const selected = trackMap[idx] || { key: 'sponsor', label: 'Festival Sponsor / Title Partner' };
                      handleSelectTrack(selected.key, selected.label);
                    }}
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', cursor: 'pointer', gap: '8px' }}
                  >
                    <span>
                      {idx === 0
                        ? 'Apply as Festival Sponsor'
                        : idx === 1
                        ? 'Book Tabemono Food Stall'
                        : 'Partner as Media & Influencer'}
                    </span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Past Collaboration Partners */}
          <div style={{ marginBottom: '4.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="section-tag" style={{ justifyContent: 'center' }}>
                Proven Track Record
              </span>
              <h2 className="section-title">Brands We Have Partnered With</h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Join major commercial partners, retail malls, regional brands, and local restaurants that have unlocked massive footfalls with K-Foodies.
              </p>
            </div>

            <SponsorGrid limit={12} />
          </div>

          {/* Collaboration Inquiry Form */}
          <div
            id="collab-form"
            className="glass-card"
            style={{
              maxWidth: '750px',
              margin: '0 auto',
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              borderRadius: '28px',
              border: '1px solid rgba(245, 158, 11, 0.25)',
              scrollMarginTop: '100px',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
                Start a Collaboration
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Fill out the details below, and our team will get in touch within 24 hours.
              </p>
            </div>

            {formSubmitted ? (
              <div
                style={{
                  background: 'rgba(34, 197, 94, 0.1)',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                  padding: '2rem',
                  borderRadius: '16px',
                  textAlign: 'center',
                }}
              >
                <CheckCircle size={48} color="#22c55e" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
                  Collaboration Inquiry Received!
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  Thank you, <strong>{formData.name}</strong>. Our management team will reach out to you at <strong>{formData.email}</strong> or <strong>{formData.phone}</strong> regarding your inquiry for {formData.brandOrRestaurant || 'your brand'}.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="btn-secondary"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label className="form-label">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Reddy"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="form-label">Brand / Stall / Organization *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sri Balaji Biryani / Brand X"
                      className="form-input"
                      value={formData.brandOrRestaurant}
                      onChange={(e) => setFormData({ ...formData, brandOrRestaurant: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="form-label">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="form-input"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem', flexWrap: 'wrap', gap: '6px' }}>
                    <label className="form-label" style={{ marginBottom: 0 }}>Collaboration Track *</label>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        fontSize: '0.76rem',
                        color: 'var(--amber-light)',
                        background: 'rgba(245, 158, 11, 0.12)',
                        border: '1px solid rgba(245, 158, 11, 0.3)',
                        padding: '3px 10px',
                        borderRadius: '999px',
                        fontWeight: 600,
                      }}
                    >
                      <Zap size={12} color="var(--amber-primary)" />
                      <span>Auto-adjusted: {trackNames[formData.collabType] || formData.collabType}</span>
                    </span>
                  </div>
                  <select
                    id="collab-track-select"
                    className="form-input"
                    value={formData.collabType}
                    onChange={(e) => {
                      setFormData({ ...formData, collabType: e.target.value });
                      setActiveAdjustedNotice(null);
                    }}
                    style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                  >
                    <option value="sponsor" style={{ background: '#12141c' }}>Festival Sponsor / Title Partner</option>
                    <option value="stall" style={{ background: '#12141c' }}>Tabemono Food Festival Stall Booking</option>
                    <option value="media" style={{ background: '#12141c' }}>Media, Influencer & Content Collab</option>
                    <option value="review" style={{ background: '#12141c' }}>Restaurant / Street Cart Review Request</option>
                  </select>
                </div>

                <div>
                  <label className="form-label">Message / Proposal Details</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your brand, specialty dishes, or what you would like to achieve together..."
                    className="form-input"
                    style={{ resize: 'vertical' }}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ padding: '0.95rem', fontSize: '1rem', marginTop: '0.5rem' }}
                >
                  <Send size={18} />
                  <span>Send Collaboration Request</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
