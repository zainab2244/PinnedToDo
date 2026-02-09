type Cloud = {
  id: string;
  x: number;
  y: number;
  size: number;
  rotate: number;
  opacity: number;
};

export default function CloudBackground({ clouds }: { clouds: Cloud[] }) {
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
      {clouds.map((f) => (
        <div
          key={f.id}
          style={{
            position: "absolute",
            left: f.x,
            top: f.y,
            width: f.size*1.5,
            height: f.size*1.5,
            transform: `translate(-50%, -50%)`,
            opacity: f.opacity,
          }}
        >
          <CloudSVG />
        </div>
      ))}
    </div>
  );
}

function CloudSVG() {
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <g>
        <circle cx="51" cy="30" r="18" fill="var(--secondary-color)" />
        <circle cx="31" cy="40" r="15" fill="var(--secondary-color)"/>
        <circle cx="75" cy="37" r="15" fill="var(--secondary-color)" />
        <circle cx="55" cy="44" r="13" fill="var(--secondary-color)" />
        <circle cx="17" cy="37" r="8" fill="var(--secondary-color)" />
        <circle cx="88" cy="40" r="8" fill="var(--secondary-color)" />
      </g>
    </svg>
  );
}
