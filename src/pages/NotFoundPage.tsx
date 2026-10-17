import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div
      style={{
        paddingTop: '100px',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <div className="glass-card" style={{ maxWidth: '520px', padding: '3.5rem 2rem', borderRadius: '24px' }}>
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'rgba(245, 158, 11, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem auto',
          }}
        >
          <UtensilsCrossed size={32} color="var(--amber-primary)" />
        </div>

        <h1 style={{ fontSize: '3.5rem', fontWeight: 900, color: '#ffffff', lineHeight: 1, marginBottom: '0.5rem' }}>
          404
        </h1>

        <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--amber-light)', marginBottom: '1rem' }}>
          Page Not Found
        </h2>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
          Looks like this dish isn’t on the menu! The page you were looking for doesn’t exist or has moved.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/" className="btn-primary" style={{ padding: '0.8rem 1.6rem' }}>
            <Home size={18} />
            <span>Back to Home</span>
          </Link>
          <Link to="/food" className="btn-secondary" style={{ padding: '0.8rem 1.6rem' }}>
            <span>View Food Menu</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
