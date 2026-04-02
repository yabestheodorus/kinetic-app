import React, { useState } from 'react';

const SHOE_COLORS = [
  // { id: 'midnight', hex: '#0D0D0D', name: 'Midnight Black' },
  // { id: 'chalk', hex: '#F5F0EB', name: 'Chalk White' },
  // { id: 'volt', hex: '#C8FF00', name: 'Volt' },
  // { id: 'scarlet', hex: '#D62B2B', name: 'Scarlet' },
  // { id: 'cobalt', hex: '#1E4FCC', name: 'Cobalt Blue' },
  // { id: 'slate', hex: '#4A5568', name: 'Slate Grey' },
  // { id: 'ember', hex: '#F97316', name: 'Ember Orange' },
  // { id: 'forest', hex: '#2D6A4F', name: 'Forest' },
  // { id: 'sand', hex: '#C9A96E', name: 'Desert Sand' },
  // { id: 'rose', hex: '#E91E8C', name: 'Neon Rose' },

  // New Nike-style colors
  { id: 'volt_green', hex: '#D7FF00', name: 'Volt Green' },
  { id: 'hyper_crimson', hex: '#FF3B30', name: 'Hyper Crimson' },
  { id: 'laser_orange', hex: '#FF6A00', name: 'Laser Orange' },
  { id: 'photo_blue', hex: '#00A6FF', name: 'Photo Blue' },
  { id: 'deep_royal', hex: '#0033A0', name: 'Deep Royal' },
  { id: 'ghost_grey', hex: '#E5E7EB', name: 'Ghost Grey' },
  { id: 'anthracite', hex: '#2B2B2B', name: 'Anthracite' },
  { id: 'lime_blast', hex: '#BFFF00', name: 'Lime Blast' },
  { id: 'infrared', hex: '#FF2D55', name: 'Infrared' },
  { id: 'teal_strike', hex: '#00BFA6', name: 'Teal Strike' },
];

const isLightColor = (hex) => hex === '#F5F0EB' || hex === '#C9A96E' || hex === '#C8FF00';

// ─── Single row of swatches ────────────────────────────────────────────────
const SwatchRow = ({ label, activeId, onChange }) => {
  const activeColor = SHOE_COLORS.find(c => c.id === activeId);
  const light = isLightColor(activeColor.hex);

  return (
    <div className="flex flex-col gap-2.5">
      {/* Row header */}
      <div className="flex items-center justify-between">
        <span className="font-label text-[9px] tracking-[0.35em] uppercase text-on-surface-variant">
          {label}
        </span>
        <span
          key={activeId}
          className="font-headline text-[10px] font-bold tracking-widest uppercase"
          style={{ color: light ? '#aaa' : activeColor.hex }}
        >
          {activeColor.name}
        </span>
      </div>

      {/* Swatches */}
      <div className="flex items-center gap-2 flex-wrap">
        {SHOE_COLORS.map((color) => {
          const isActive = color.id === activeId;
          const lg = isLightColor(color.hex);

          return (
            <button
              key={color.id}
              id={`swatch-${label.replace(/\s/g, '-').toLowerCase()}-${color.id}`}
              title={color.name}
              onClick={() => { onChange(color) }}
              aria-label={`Select ${color.name} for ${label}`}
              aria-pressed={isActive}
              className="relative flex-shrink-0 focus:outline-none transition-transform duration-200 hover:scale-110 active:scale-95"
            >
              {/* Active ring */}
              <span
                className="absolute inset-0 rounded-full pointer-events-none transition-all duration-300"
                style={{
                  outline: isActive
                    ? `2px solid ${lg ? '#999' : color.hex}`
                    : '2px solid transparent',
                  outlineOffset: '3px',
                }}
              />
              {/* Circle */}
              <span
                className="block w-6 h-6 rounded-full border border-white/10 shadow"
                style={{ backgroundColor: color.hex }}
              >
                {isActive && (
                  <span className="flex items-center justify-center w-full h-full">
                    <svg viewBox="0 0 12 12" className="w-2.5 h-2.5" fill="none"
                      stroke={lg ? '#111' : '#fff'}
                      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>

      {/* Accent bar */}
      <div
        className="h-px rounded-full transition-all duration-500"
        style={{
          background: `linear-gradient(to right, ${activeColor.hex}, transparent)`,
          opacity: 0.5,
        }}
      />
    </div>
  );
};

// ─── Main component ────────────────────────────────────────────────────────
const ColorPallete = ({ onColorChange }) => {

  // internal state
  const [primary, setPrimary] = useState(SHOE_COLORS[0]);   // Midnight Black
  const [secondary, setSecondary] = useState(SHOE_COLORS[1]);   // Chalk White
  const [rope, setRope] = useState(SHOE_COLORS[2]);   // Volt


  const notify = (newPrimary, newSecondary, newRope) => {
    if (onColorChange) {
      onColorChange({
        primaryColor: newPrimary.hex,
        secondaryColor: newSecondary.hex,
        ropeColor: newRope.hex,
      });
    }
  };

  const handlePrimary = (color) => {
    setPrimary(color);
    notify(color, secondary, rope);
  };
  const handleSecondary = (color) => {
    setSecondary(color);
    notify(primary, color, rope);
  };
  const handleRope = (color) => {
    setRope(color);
    notify(primary, secondary, color);
  };

  return (
    <div className="flex flex-col gap-6 mb-10 z-50">
      <SwatchRow label="Primary" activeId={primary.id} onChange={handlePrimary} />
      <SwatchRow label="Secondary" activeId={secondary.id} onChange={handleSecondary} />
      <SwatchRow label="Rope" activeId={rope.id} onChange={handleRope} />
    </div>
  );
};

export default ColorPallete;
