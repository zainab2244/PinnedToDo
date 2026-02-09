type Flower = {
  id: string;
  x: number;
  y: number;
  size: number;
  rotate: number;
  opacity: number;
};

export default function FlowerBackground({ flowers }: { flowers: Flower[] }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none", // ✅ never blocks your UI clicks
        zIndex: 1,            // ✅ behind everything
      }}
    >
      {flowers.map((f) => (
        <div
          key={f.id}
          style={{
            position: "absolute",
            left: f.x,
            top: f.y,
            width: f.size,
            height: f.size,
            transform: `translate(-50%, -50%) rotate(${f.rotate}deg)`,
            opacity: f.opacity,
          }}
        >
          <FlowerSVG />
        </div>
      ))}
    </div>
  );
}

function FlowerSVG() {
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <g>
        <circle cx="50" cy="25" r="18" fill="var(--accent-color)" />
        <circle cx="74" cy="50" r="18" fill="var(--accent-color)" />
        <circle cx="50" cy="74" r="18" fill="var(--accent-color)" />
        <circle cx="25" cy="50" r="18" fill="var(--accent-color)" />
        <circle cx="50" cy="50" r="12" fill="var(--secondary-accent-color)" />
      </g>
    </svg>
  );
}
