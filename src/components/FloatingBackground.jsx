import { useEffect, useRef } from 'react';

// Small drifting particles: outline shapes and code glyphs in the accent tone.
const glyphs = ['</>', '{ }', '( )', '01', ';', '=>', '#', '[ ]'];
const kinds = ['ring', 'dot', 'plus', 'square', 'glyph', 'ring', 'glyph', 'triangle'];

// Deterministic pseudo-random so the layout is stable between renders.
const rand = (seed) => {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
};

const particles = Array.from({ length: 22 }, (_, i) => {
  const kind = kinds[i % kinds.length];
  return {
    id: i,
    kind,
    text: kind === 'glyph' ? glyphs[i % glyphs.length] : null,
    left: `${(rand(i + 1) * 96 + 2).toFixed(1)}%`,
    size: Math.round(10 + rand(i + 7) * 18),
    duration: `${(22 + rand(i + 13) * 26).toFixed(1)}s`,
    delay: `-${(rand(i + 21) * 40).toFixed(1)}s`,
    drift: `${Math.round((rand(i + 31) - 0.5) * 120)}px`,
    spin: `${Math.round((rand(i + 41) - 0.5) * 540)}deg`,
    opacity: (0.3 + rand(i + 51) * 0.25).toFixed(2),
  };
});

export default function FloatingBackground() {
  const layer = useRef(null);

  // Gentle parallax on the large blobs following the pointer.
  useEffect(() => {
    const el = layer.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    const onMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty('--px', (e.clientX / window.innerWidth - 0.5).toFixed(3));
        el.style.setProperty('--py', (e.clientY / window.innerHeight - 0.5).toFixed(3));
      });
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={layer} className="floating-bg" aria-hidden="true">
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      <div className="bg-blob blob-3"></div>
      <div className="bg-blob blob-4"></div>
      <div className="bg-grid"></div>
      {particles.map((p) => (
        <span
          key={p.id}
          className={`float-particle particle-${p.kind}`}
          style={{
            left: p.left,
            '--size': `${p.size}px`,
            '--duration': p.duration,
            '--delay': p.delay,
            '--drift': p.drift,
            '--spin': p.spin,
            '--alpha': p.opacity,
          }}
        >
          {p.text}
        </span>
      ))}
    </div>
  );
}
