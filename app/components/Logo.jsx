export default function Logo({ size = 48, showText = true, textColor = 'light' }) {
  // textColor: 'light' = white text (for dark backgrounds), 'dark' = dark text (for light backgrounds)
  const campusColor = textColor === 'light' ? '#8cc543' : '#5a8e2a';
  const radicesColor = textColor === 'light' ? '#ffffff' : '#1e3d0f';

  return (
    <div className="flex items-center gap-3">
      {/* SVG icon — approximate representation of the Campus Radices mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Circle border */}
        <circle cx="50" cy="50" r="47" fill="white" stroke="#6ab233" strokeWidth="3.5" />

        {/* Center leaf (pointing up) */}
        <path
          d="M50,29 C48,24 44,17 50,10 C56,17 52,24 50,29Z"
          fill="#8cc543"
        />
        {/* Left leaf */}
        <path
          d="M46,30 C43,26 36,22 31,18 C34,23 40,27 46,30Z"
          fill="#8cc543"
        />
        {/* Right leaf */}
        <path
          d="M54,30 C57,26 64,22 69,18 C66,23 60,27 54,30Z"
          fill="#8cc543"
        />

        {/* Trunk */}
        <line x1="50" y1="29" x2="50" y2="52" stroke="#8b6535" strokeWidth="3.5" strokeLinecap="round" />

        {/* Roots — fan pattern */}
        <line x1="50" y1="52" x2="11" y2="68" stroke="#8b6535" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="50" y1="52" x2="22" y2="65" stroke="#8b6535" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="50" y1="52" x2="33" y2="61" stroke="#8b6535" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="50" y1="52" x2="42" y2="57" stroke="#8b6535" strokeWidth="2" strokeLinecap="round" />
        <line x1="50" y1="52" x2="58" y2="57" stroke="#8b6535" strokeWidth="2" strokeLinecap="round" />
        <line x1="50" y1="52" x2="67" y2="61" stroke="#8b6535" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="50" y1="52" x2="78" y2="65" stroke="#8b6535" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="50" y1="52" x2="89" y2="68" stroke="#8b6535" strokeWidth="2.5" strokeLinecap="round" />
      </svg>

      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className="text-[10px] tracking-[0.25em] font-semibold uppercase"
            style={{ color: campusColor }}
          >
            Campus
          </span>
          <span
            className="text-[1.45rem] font-display font-bold leading-tight tracking-wide"
            style={{ color: radicesColor }}
          >
            RADICES
          </span>
        </div>
      )}
    </div>
  );
}
