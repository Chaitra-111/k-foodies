import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageLightboxProps {
  images: { src: string; caption?: string }[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    if (currentIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, onClose, onNext, onPrev]);

  if (currentIndex === null || !images[currentIndex]) return null;

  const currentItem = images[currentIndex];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'rgba(5, 6, 8, 0.95)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close image modal"
        style={{
          position: 'absolute',
          top: '24px',
          right: '24px',
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid var(--border-subtle)',
          color: '#ffffff',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 110,
        }}
      >
        <X size={22} />
      </button>

      {/* Prev Button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous image"
          style={{
            position: 'absolute',
            left: '24px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255, 255, 255, 0.12)',
            border: '1px solid var(--border-subtle)',
            color: '#ffffff',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 110,
          }}
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {/* Image and Caption Container */}
      <div
        style={{
          maxWidth: '90vw',
          maxHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentItem.src}
          alt={currentItem.caption || 'K-Foodies festival capture'}
          style={{
            maxWidth: '100%',
            maxHeight: '75vh',
            objectFit: 'contain',
            borderRadius: '16px',
            boxShadow: '0 25px 60px rgba(0,0,0,0.9)',
          }}
        />
        {currentItem.caption && (
          <p
            style={{
              marginTop: '1rem',
              color: '#ffffff',
              fontSize: '1rem',
              fontWeight: 600,
              textAlign: 'center',
            }}
          >
            {currentItem.caption}
          </p>
        )}
        <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: '4px' }}>
          {currentIndex + 1} of {images.length}
        </span>
      </div>

      {/* Next Button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next image"
          style={{
            position: 'absolute',
            right: '24px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255, 255, 255, 0.12)',
            border: '1px solid var(--border-subtle)',
            color: '#ffffff',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 110,
          }}
        >
          <ChevronRight size={28} />
        </button>
      )}
    </div>
  );
};
