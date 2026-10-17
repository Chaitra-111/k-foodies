import React from 'react';
import { Mail, ExternalLink } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from './SocialIcons';
import type { TeamMember } from '../types';

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div
      className="glass-card"
      style={{
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transition: 'all 0.35s ease',
      }}
    >
      {/* Photo Container */}
      <div
        className="img-wrap"
        style={{
          height: '280px',
          width: '100%',
          position: 'relative',
          background: 'linear-gradient(180deg, #181a24 0%, #0d0e14 100%)',
        }}
      >
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top center',
          }}
          onError={(e) => {
            e.currentTarget.src = '/images/k-foodies-logo-art.jpeg';
          }}
        />

        {/* Ambient bottom shadow overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(10,11,14,0.95) 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Role Pill */}
        <div
          style={{
            position: 'absolute',
            bottom: '14px',
            left: '14px',
            background: 'rgba(245, 158, 11, 0.95)',
            color: '#0a0b0e',
            fontSize: '0.75rem',
            fontWeight: 800,
            padding: '4px 12px',
            borderRadius: '999px',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            boxShadow: '0 4px 12px rgba(245, 158, 11, 0.35)',
          }}
        >
          {member.role}
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}
      >
        <h3
          style={{
            fontSize: '1.35rem',
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '0.65rem',
            letterSpacing: '-0.01em',
          }}
        >
          {member.name}
        </h3>

        <p
          style={{
            fontSize: '0.88rem',
            color: 'var(--text-muted)',
            lineHeight: 1.6,
            marginBottom: '1.25rem',
            flex: 1,
          }}
        >
          {member.description}
        </p>

        {/* Socials & Email links */}
        <div
          style={{
            paddingTop: '1rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', gap: '0.6rem' }}>
            {member.socials.map((social, idx) => (
              <a
                key={idx}
                href={social.url || '#'}
                target={social.url?.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                title={social.name}
                aria-label={`${member.name} ${social.name}`}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = social.color;
                  e.currentTarget.style.borderColor = social.color;
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {social.icon === 'youtube' && <YoutubeIcon size={16} />}
                {social.icon === 'instagram' && <InstagramIcon size={16} />}
                {social.icon === 'mail' && <Mail size={16} />}
              </a>
            ))}
          </div>

          <a
            href={`mailto:${member.email}`}
            style={{
              fontSize: '0.8rem',
              color: 'var(--text-dim)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--amber-light)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-dim)')}
          >
            <span>Connect</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  );
};
