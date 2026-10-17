import React from 'react';
import { Star, MapPin, ExternalLink, Clock, Tag } from 'lucide-react';
import { FoodItem } from '../types';

interface FoodCardProps {
  item: FoodItem;
  onOpenDetails?: (item: FoodItem) => void;
}

export const FoodCard: React.FC<FoodCardProps> = ({ item, onOpenDetails }) => {
  return (
    <div
      className="glass-card"
      style={{
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      {/* Image Wrap */}
      <div
        className="img-wrap"
        style={{
          height: '220px',
          width: '100%',
          position: 'relative',
          borderRadius: '16px 16px 0 0',
        }}
      >
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={(e) => {
            // Fallback if image fails
            e.currentTarget.src = '/images/chef-wok-fire.jpeg';
          }}
        />

        {/* Gradient shadow overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(10,11,14,0.85) 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Top Badges */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            right: '12px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 2,
          }}
        >
          {item.badge ? (
            <span
              style={{
                background: 'rgba(234, 88, 12, 0.92)',
                color: '#ffffff',
                fontSize: '0.72rem',
                fontWeight: 800,
                padding: '4px 10px',
                borderRadius: '999px',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                boxShadow: '0 4px 12px rgba(234, 88, 12, 0.4)',
                backdropFilter: 'blur(8px)',
              }}
            >
              {item.badge}
            </span>
          ) : <span />}

          {item.rating ? (
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                background: 'rgba(10, 11, 14, 0.85)',
                border: '1px solid rgba(251, 191, 36, 0.4)',
                padding: '4px 9px',
                borderRadius: '999px',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#fbbf24',
                backdropFilter: 'blur(8px)',
              }}
            >
              <Star size={12} fill="#fbbf24" strokeWidth={0} />
              <span>{item.rating}</span>
            </div>
          ) : null}
        </div>

        {/* Price tag floating at bottom right of image */}
        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            right: '12px',
            zIndex: 2,
            background: 'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)',
            color: '#0a0b0e',
            fontWeight: 900,
            fontSize: '0.98rem',
            padding: '5px 12px',
            borderRadius: '12px',
            boxShadow: '0 4px 14px rgba(0,0,0,0.5)',
          }}
        >
          {item.price}
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          padding: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}
      >
        {/* Cuisine / Restaurant */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.8rem',
            color: 'var(--amber-light)',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            marginBottom: '0.35rem',
          }}
        >
          <Tag size={12} />
          <span>{item.cuisines}</span>
        </div>

        {/* Dish Title */}
        <h3
          style={{
            fontSize: '1.2rem',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.3,
            marginBottom: '0.5rem',
          }}
        >
          {item.name}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: '0.86rem',
            color: 'var(--text-muted)',
            lineHeight: 1.5,
            marginBottom: '1rem',
            flex: 1,
          }}
        >
          {item.description}
        </p>

        {/* Address */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.45rem',
            fontSize: '0.78rem',
            color: 'var(--text-dim)',
            marginBottom: '1.1rem',
            lineHeight: 1.4,
          }}
        >
          <MapPin size={14} color="var(--amber-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <span>{item.address}</span>
        </div>

        {/* Footer Actions */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '0.85rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          {item.link && item.link !== '#' ? (
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.84rem',
                color: 'var(--amber-light)',
                textDecoration: 'none',
                fontWeight: 600,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              <span>View on Maps</span>
              <ExternalLink size={13} />
            </a>
          ) : (
            <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Kothagudem Spot</span>
          )}

          {onOpenDetails && (
            <button
              onClick={() => onOpenDetails(item)}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid var(--border-subtle)',
                color: '#ffffff',
                padding: '4px 12px',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Details
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
