// variant="light" → fondo blanco, texto oscuro (sobre fondos claros o navbar oscuro)
// variant="dark"  → fondo transparente, texto claro (sobre fondos oscuros: hero, footer)
export default function Logo({ size = 48, variant = 'light' }) {
  const isDark = variant === 'dark';
  const circleFill   = isDark ? 'transparent' : 'white';
  const circleStroke = isDark ? '#5a8e2a'     : '#5a8e2a';
  const campusColor  = isDark ? '#8cc543'     : '#5a8e2a';
  const radicesColor = isDark ? '#ffffff'     : '#1e3d0f';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Campus Radices"
    >
      {/* Círculo */}
      <circle cx="100" cy="100" r="96" fill={circleFill} stroke={circleStroke} strokeWidth="5" />

      {/* Hoja central — apunta hacia arriba */}
      <path
        d="M100,60 C96,48 93,34 100,20 C107,34 104,48 100,60Z"
        fill="#8cc543"
      />
      {/* Hoja izquierda — diagonal superior izquierda */}
      <path
        d="M94,57 C87,47 76,37 63,30 C68,42 80,50 94,57Z"
        fill="#8cc543"
      />
      {/* Hoja derecha — diagonal superior derecha */}
      <path
        d="M106,57 C113,47 124,37 137,30 C132,42 120,50 106,57Z"
        fill="#8cc543"
      />

      {/* Tronco */}
      <path
        d="M96,60 Q98,82 100,105 Q102,82 104,60"
        fill="#8b6535"
        stroke="#8b6535" strokeWidth="1"
      />

      {/* Raíces — abanico con 10 ramas, simétricas */}
      {/* Izquierda */}
      <line x1="100" y1="105" x2="12"  y2="128" stroke="#8b6535" strokeWidth="5"   strokeLinecap="round" />
      <line x1="100" y1="105" x2="28"  y2="122" stroke="#8b6535" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="100" y1="105" x2="48"  y2="117" stroke="#8b6535" strokeWidth="4"   strokeLinecap="round" />
      <line x1="100" y1="105" x2="70"  y2="113" stroke="#8b6535" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="100" y1="105" x2="86"  y2="110" stroke="#8b6535" strokeWidth="3"   strokeLinecap="round" />
      {/* Derecha */}
      <line x1="100" y1="105" x2="114" y2="110" stroke="#8b6535" strokeWidth="3"   strokeLinecap="round" />
      <line x1="100" y1="105" x2="130" y2="113" stroke="#8b6535" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="100" y1="105" x2="152" y2="117" stroke="#8b6535" strokeWidth="4"   strokeLinecap="round" />
      <line x1="100" y1="105" x2="172" y2="122" stroke="#8b6535" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="100" y1="105" x2="188" y2="128" stroke="#8b6535" strokeWidth="5"   strokeLinecap="round" />

      {/* Texto CAMPUS */}
      <text
        x="100"
        y="148"
        textAnchor="middle"
        fontFamily="Montserrat, Arial, sans-serif"
        fontSize="14"
        fontWeight="500"
        letterSpacing="5"
        fill={campusColor}
      >CAMPUS</text>

      {/* Texto RADICES */}
      <text
        x="100"
        y="178"
        textAnchor="middle"
        fontFamily="Montserrat, Arial, sans-serif"
        fontSize="36"
        fontWeight="700"
        letterSpacing="1"
        fill={radicesColor}
      >RADICES</text>
    </svg>
  );
}
