import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from '../components/SocialIcons';
import { BRAND_INFO } from '../data/kfoodiesData';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    type: 'general',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            <MessageSquare size={20} color="#fbbf24" />
            Connect With The Crew
          </span>
          <h1 className="section-title">Get In Touch With K-Foodies</h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Have a food spot for us to review? Interested in festival stalls, brand collaborations, or media inquiries? Reach out directly to our team.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="section-py">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
            }}
          >
            {/* Left Info Column */}
            <div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.5rem' }}>
                Contact Information
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                Whether you are a food lover with a hidden gem suggestion or a brand seeking partnership at Tabemono Food Fest, we look forward to hearing from you.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                {/* Email Box */}
                <div
                  className="glass-card"
                  style={{ padding: '1.25rem', display: 'flex', alignItems: 'flex-start', gap: '14px' }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'rgba(245, 158, 11, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={20} color="var(--amber-primary)" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', marginBottom: '2px' }}>
                      Primary Editorial Email
                    </h4>
                    <a
                      href={`mailto:${BRAND_INFO.contacts.primaryEmail}`}
                      style={{ color: 'var(--amber-light)', fontSize: '0.92rem', textDecoration: 'none' }}
                    >
                      {BRAND_INFO.contacts.primaryEmail}
                    </a>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: '4px' }}>
                      Finance: {BRAND_INFO.contacts.financeEmail}
                    </div>
                  </div>
                </div>

                {/* Location Box */}
                <div
                  className="glass-card"
                  style={{ padding: '1.25rem', display: 'flex', alignItems: 'flex-start', gap: '14px' }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'rgba(234, 88, 12, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={20} color="var(--orange-primary)" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', marginBottom: '2px' }}>
                      Headquarters & Core Region
                    </h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                      Kothagudem, Bhadradri Kothagudem District, Telangana 507101
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem' }}>
                  Official Social Channels
                </h3>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a
                    href={BRAND_INFO.contacts.instagram}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '0.85rem 1rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '12px',
                      color: '#ffffff',
                      textDecoration: 'none',
                    }}
                  >
                    <InstagramIcon size={20} color="#ec4899" />
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Instagram</div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>@kothagudemfoodies</div>
                    </div>
                  </a>

                  <a
                    href={BRAND_INFO.contacts.youtube}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '0.85rem 1rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '12px',
                      color: '#ffffff',
                      textDecoration: 'none',
                    }}
                  >
                    <YoutubeIcon size={20} color="#ef4444" />
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>YouTube</div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>@Kothagudemfoodies_143</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div>
              <div
                className="glass-card"
                style={{
                  padding: 'clamp(2rem, 4vw, 3rem)',
                  borderRadius: '24px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
                  Send A Direct Message
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.75rem' }}>
                  Fill in your details below and we will get back to you promptly.
                </p>

                {submitted ? (
                  <div
                    style={{
                      background: 'rgba(34, 197, 94, 0.1)',
                      border: '1px solid rgba(34, 197, 94, 0.3)',
                      padding: '2rem',
                      borderRadius: '16px',
                      textAlign: 'center',
                    }}
                  >
                    <CheckCircle2 size={44} color="#22c55e" style={{ margin: '0 auto 1rem auto' }} />
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
                      Message Dispatched!
                    </h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
                      Thank you for contacting K-Foodies. Our team has received your message and will reply to <strong>{formData.email}</strong> shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-secondary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                    <div>
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        className="form-input"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="yourname@gmail.com"
                        className="form-input"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="form-label">Inquiry Purpose *</label>
                      <select
                        className="form-input"
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        style={{ cursor: 'pointer' }}
                      >
                        <option value="general" style={{ background: '#12141c' }}>General Inquiry / Message</option>
                        <option value="review" style={{ background: '#12141c' }}>Recommend a Street Food Spot / Review Request</option>
                        <option value="tabemono" style={{ background: '#12141c' }}>Tabemono Food Fest Stall or Tickets</option>
                        <option value="sponsor" style={{ background: '#12141c' }}>Sponsorship & Brand Promotion</option>
                      </select>
                    </div>

                    <div>
                      <label className="form-label">Subject</label>
                      <input
                        type="text"
                        placeholder="Brief summary of your message"
                        className="form-input"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="form-label">Message *</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Write your message here..."
                        className="form-input"
                        style={{ resize: 'vertical' }}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary"
                      style={{ padding: '0.9rem', fontSize: '0.98rem', marginTop: '0.5rem' }}
                    >
                      <Send size={18} />
                      <span>Submit Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
