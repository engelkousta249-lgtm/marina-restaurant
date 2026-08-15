export default function Tide({
  background = 'var(--navy)',
  fill = 'var(--sand)',
  flip = false,
}: {
  background?: string;
  fill?: string;
  flip?: boolean;
}) {
  return (
    <div className="tide" style={{ background, transform: flip ? 'rotate(180deg)' : undefined }}>
      <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="tide-anim">
        <path
          d="M0,32 C240,64 480,0 720,24 C960,48 1200,8 1440,32 L1440,64 L0,64 Z"
          fill={fill}
        />
        {!flip && (
          <path
            d="M0,40 C240,16 480,56 720,36 C960,16 1200,48 1440,28"
            fill="none"
            stroke="var(--gold)"
            strokeWidth="1"
            opacity="0.5"
          />
        )}
      </svg>
    </div>
  );
}
