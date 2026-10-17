import React from 'react';
import { SPONSORS } from '../data/kfoodiesData';
import { Sponsor } from '../types';

interface SponsorGridProps {
  filterTier?: string;
  limit?: number;
}

export const SponsorGrid: React.FC<SponsorGridProps> = ({ filterTier, limit }) => {
  let displaySponsors = SPONSORS;
  if (filterTier && filterTier !== 'All') {
    displaySponsors = displaySponsors.filter((s) => s.tier === filterTier);
  }
  if (limit) {
    displaySponsors = displaySponsors.slice(0, limit);
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
        gap: '1.25rem',
      }}
    >
      {displaySponsors.map((sponsor) => (
        <div
          key={sponsor.id}
          className="glass-card"
          style={{
            padding: '1.5rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            position: 'relative',
            minHeight: '130px',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Logo container */}
          <div
            style={{
              height: '52px',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '0.75rem',
            }}
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              loading="lazy"
              style={{
                maxHeight: '100%',
                maxWidth: '85%',
                objectFit: 'contain',
                filter: 'brightness(0.95)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'brightness(1.15)';
                e.currentTarget.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'brightness(0.95)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
              onError={(e) => {
                // Fallback to text if missing
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>

          <span
            style={{
              fontSize: '0.84rem',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.2,
              marginBottom: '4px',
            }}
          >
            {sponsor.name}
          </span>

          <span
            style={{
              fontSize: '0.68rem',
              color: 'var(--amber-light)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              fontWeight: 600,
            }}
          >
            {sponsor.category}
          </span>
        </div>
      ))}
    </div>
  );
};
