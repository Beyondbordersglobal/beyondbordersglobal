// Interactive SVG world map with animated trade routes.
// Equirectangular projection: lng -> x = (lng+180)/360*1000, lat -> y = (90-lat)/180*500

const HUBS = [
  { name: "India", lat: 20.5, lng: 78.9 },
  { name: "China", lat: 35.8, lng: 104.1 },
  { name: "UAE", lat: 24.4, lng: 54.3 },
  { name: "UK", lat: 54.0, lng: -2.0 },
  { name: "Europe", lat: 50.1, lng: 10.4 },
  { name: "Canada", lat: 56.1, lng: -106.3 },
  { name: "USA", lat: 38.9, lng: -98.0 },
  { name: "Africa", lat: 1.6, lng: 22.0 },
  { name: "SE Asia", lat: 1.3, lng: 110.0 },
  { name: "Australia", lat: -25.3, lng: 133.8 },
];

const project = (lat: number, lng: number) => ({
  x: ((lng + 180) / 360) * 1000,
  y: ((90 - lat) / 180) * 500,
});

const INDIA = project(HUBS[0].lat, HUBS[0].lng);

export function WorldMap() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-gold/20 bg-navy-deep">
      <svg viewBox="0 0 1000 500" className="w-full h-auto" role="img" aria-label="Global trade network map">
        <defs>
          <radialGradient id="bgGlow" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="oklch(0.25 0.08 258)" />
            <stop offset="100%" stopColor="oklch(0.10 0.04 258)" />
          </radialGradient>
          <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="oklch(0.76 0.13 82)" stopOpacity="0.1" />
            <stop offset="50%" stopColor="oklch(0.85 0.13 82)" stopOpacity="1" />
            <stop offset="100%" stopColor="oklch(0.76 0.13 82)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect width="1000" height="500" fill="url(#bgGlow)" />

        {/* Dotted continents — abstract */}
        <g fill="oklch(0.55 0.10 258)" opacity="0.35">
          {Array.from({ length: 380 }).map((_, i) => {
            const x = (i * 53) % 1000;
            const y = ((i * 91) % 500);
            // exclude oceans roughly
            const onLand =
              (x > 100 && x < 280 && y > 80 && y < 260) || // N America
              (x > 250 && x < 360 && y > 240 && y < 400) || // S America
              (x > 430 && x < 580 && y > 80 && y < 200) || // Europe
              (x > 460 && x < 600 && y > 200 && y < 380) || // Africa
              (x > 580 && x < 820 && y > 90 && y < 280) || // Asia
              (x > 760 && x < 900 && y > 320 && y < 420); // Oceania
            return onLand ? <circle key={i} cx={x} cy={y} r="1.6" /> : null;
          })}
        </g>

        {/* Trade routes from India to all hubs */}
        {HUBS.slice(1).map((h, i) => {
          const p = project(h.lat, h.lng);
          const mx = (INDIA.x + p.x) / 2;
          const my = (INDIA.y + p.y) / 2 - Math.abs(p.x - INDIA.x) * 0.25;
          return (
            <path
              key={h.name}
              d={`M ${INDIA.x} ${INDIA.y} Q ${mx} ${my} ${p.x} ${p.y}`}
              stroke="url(#routeGrad)"
              strokeWidth="1.2"
              fill="none"
              className="animate-draw-line"
              style={{ animationDelay: `${i * 0.25}s` }}
            />
          );
        })}

        {/* Hubs */}
        {HUBS.map((h) => {
          const p = project(h.lat, h.lng);
          const isOrigin = h.name === "India";
          return (
            <g key={h.name}>
              <circle cx={p.x} cy={p.y} r={isOrigin ? 6 : 4} fill="oklch(0.85 0.13 82)" />
              <circle
                cx={p.x}
                cy={p.y}
                r={isOrigin ? 6 : 4}
                fill="oklch(0.85 0.13 82)"
                opacity="0.6"
                className="animate-ping-dot"
                style={{ transformOrigin: `${p.x}px ${p.y}px` }}
              />
              <text
                x={p.x + 8}
                y={p.y + 4}
                fill="oklch(0.95 0.04 82)"
                fontSize="11"
                fontFamily="Inter, sans-serif"
                fontWeight={isOrigin ? 700 : 500}
              >
                {h.name}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
