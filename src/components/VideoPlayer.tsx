import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  height?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  poster,
  title,
  autoPlay = true,
  loop = true,
  muted = true,
  height = '480px',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: height,
        borderRadius: '24px',
        overflow: 'hidden',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(245, 158, 11, 0.15)',
        background: '#090a0d',
      }}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
        onClick={togglePlay}
      />

      {/* Subtle top & bottom vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.7) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Title pill if provided */}
      {title && (
        <div
          style={{
            position: 'absolute',
            top: '18px',
            left: '18px',
            background: 'rgba(10, 11, 14, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(12px)',
            color: '#ffffff',
            padding: '6px 14px',
            borderRadius: '999px',
            fontSize: '0.85rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span className="pulse-dot" />
          <span>{title}</span>
        </div>
      )}

      {/* Floating control bar */}
      <div
        style={{
          position: 'absolute',
          bottom: '18px',
          right: '18px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(10, 11, 14, 0.8)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          backdropFilter: 'blur(16px)',
          borderRadius: '999px',
          padding: '6px 12px',
          zIndex: 10,
        }}
      >
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause' : 'Play'}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#ffffff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            padding: '4px',
          }}
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} fill="#ffffff" />}
        </button>

        <button
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute' : 'Mute'}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#ffffff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            padding: '4px',
          }}
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>

        <button
          onClick={handleFullscreen}
          aria-label="Fullscreen"
          style={{
            background: 'transparent',
            border: 'none',
            color: '#ffffff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            padding: '4px',
          }}
        >
          <Maximize2 size={16} />
        </button>
      </div>
    </div>
  );
};
