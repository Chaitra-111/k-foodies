import React, { useState, useMemo } from 'react';
import { Search, Flame, Utensils, Star, MapPin, ExternalLink, X } from 'lucide-react';
import { FOOD_ITEMS } from '../data/kfoodiesData';
import { FoodItem } from '../types';
import { FoodCard } from '../components/FoodCard';

export const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Delicacies' },
    { id: 'street-food', label: 'Street Eats & Chats' },
    { id: 'biryani-meals', label: 'Biryani & Traditional Meals' },
    { id: 'fast-food', label: 'Fast Food & Fusions' },
    { id: 'desserts-beverages', label: 'Desserts & Beverages' },
  ];

  const filteredFoods = useMemo(() => {
    return FOOD_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.cuisines.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.address.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#0a0b0e' }}>
      {/* Page Header */}
      <section
        style={{
          padding: '4rem 0 3rem 0',
          background: 'radial-gradient(ellipse at top, rgba(245, 158, 11, 0.12) 0%, transparent 70%)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          textAlign: 'center',
        }}
      >
        <div className="container" style={{ maxWidth: '850px' }}>
          <span className="section-tag" style={{ justifyContent: 'center' }}>
            <Flame size={20} color="#ea580c" />
            Authentic Flavors of Kothagudem
          </span>
          <h1 className="section-title">Food, Menu & Real Prices</h1>
          <p className="section-subtitle" style={{ margin: '0 auto 2rem auto' }}>
            Every price, rating, and location listed below is verified from authentic Kothagudem street food stalls and eateries reviewed by our team.
          </p>

          {/* Search bar */}
          <div
            style={{
              position: 'relative',
              maxWidth: '500px',
              margin: '0 auto',
            }}
          >
            <input
              type="text"
              placeholder="Search dish, stall name, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input"
              style={{
                paddingLeft: '2.8rem',
                borderRadius: '999px',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
              }}
            />
            <Search
              size={18}
              color="var(--text-muted)"
              style={{
                position: 'absolute',
                left: '1.1rem',
                top: '50%',
                transform: 'translateY(-50%)',
              }}
            />
          </div>
        </div>
      </section>

      {/* Categories & Filter Bar */}
      <section style={{ padding: '2rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.65rem',
              flexWrap: 'wrap',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.6rem 1.25rem',
                  borderRadius: '999px',
                  border:
                    activeCategory === cat.id
                      ? '1px solid var(--amber-primary)'
                      : '1px solid var(--border-subtle)',
                  background:
                    activeCategory === cat.id
                      ? 'var(--orange-gradient)'
                      : 'rgba(255, 255, 255, 0.04)',
                  color: activeCategory === cat.id ? '#0a0b0e' : '#e5e7eb',
                  fontWeight: activeCategory === cat.id ? 800 : 600,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow:
                    activeCategory === cat.id
                      ? '0 4px 15px rgba(245, 158, 11, 0.35)'
                      : 'none',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="section-py">
        <div className="container">
          {filteredFoods.length > 0 ? (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
                gap: '2rem',
              }}
            >
              {filteredFoods.map((item) => (
                <FoodCard
                  key={item.id}
                  item={item}
                  onOpenDetails={(food) => setSelectedFood(food)}
                />
              ))}
            </div>
          ) : (
            <div
              className="glass-card"
              style={{
                padding: '4rem 2rem',
                textAlign: 'center',
                maxWidth: '500px',
                margin: '0 auto',
              }}
            >
              <Utensils size={48} color="var(--amber-primary)" style={{ margin: '0 auto 1rem auto' }} />
              <h3 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                No dishes found
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                We couldn't find any dishes matching "{searchQuery}". Try selecting another category or clear your search query.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="btn-primary"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Details Modal */}
      {selectedFood && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            background: 'rgba(5, 6, 8, 0.85)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setSelectedFood(null)}
        >
          <div
            className="glass-card"
            style={{
              maxWidth: '580px',
              width: '100%',
              borderRadius: '24px',
              overflow: 'hidden',
              position: 'relative',
              background: '#12141c',
              border: '1px solid rgba(255, 255, 255, 0.14)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedFood(null)}
              aria-label="Close modal"
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(10, 11, 14, 0.75)',
                border: '1px solid var(--border-subtle)',
                color: '#ffffff',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
              }}
            >
              <X size={18} />
            </button>

            {/* Modal Image */}
            <div style={{ height: '260px', width: '100%', position: 'relative' }}>
              <img
                src={selectedFood.image}
                alt={selectedFood.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(18,20,28,1) 100%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  right: '16px',
                  background: 'var(--orange-gradient)',
                  color: '#0a0b0e',
                  fontWeight: 900,
                  fontSize: '1.25rem',
                  padding: '6px 16px',
                  borderRadius: '12px',
                }}
              >
                {selectedFood.price}
              </div>
            </div>

            {/* Modal Content */}
            <div style={{ padding: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--amber-light)', fontWeight: 700, textTransform: 'uppercase' }}>
                  {selectedFood.cuisines}
                </span>
                {selectedFood.rating && (
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      background: 'rgba(251, 191, 36, 0.15)',
                      color: '#fbbf24',
                      padding: '2px 8px',
                      borderRadius: '999px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                    }}
                  >
                    <Star size={11} fill="#fbbf24" strokeWidth={0} />
                    {selectedFood.rating}
                  </span>
                )}
              </div>

              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
                {selectedFood.name}
              </h2>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {selectedFood.description}
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  padding: '0.85rem 1rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '12px',
                  border: '1px solid var(--border-subtle)',
                  marginBottom: '1.5rem',
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                }}
              >
                <MapPin size={18} color="var(--amber-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{selectedFood.address}</span>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                {selectedFood.link && selectedFood.link !== '#' ? (
                  <a
                    href={selectedFood.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                    style={{ flex: 1, padding: '0.85rem' }}
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <button
                    disabled
                    className="btn-secondary"
                    style={{ flex: 1, opacity: 0.6, cursor: 'not-allowed' }}
                  >
                    Location verified in Kothagudem
                  </button>
                )}
                <button
                  onClick={() => setSelectedFood(null)}
                  className="btn-secondary"
                  style={{ padding: '0.85rem 1.5rem' }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
