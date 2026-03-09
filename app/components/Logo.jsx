export default function Logo({ size = 48 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Campus Radices"
    >
      {/* Fondo blanco + borde verde */}
      <circle cx="100" cy="100" r="96" fill="white" stroke="#4a7d3e" strokeWidth="6" />

      {/* Hoja central (apunta arriba) */}
      <path d="M100,56 C97,45 91,31 100,19 C109,31 103,45 100,56Z" fill="#8cc543" />
      {/* Hoja izquierda */}
      <path d="M93,58 C86,49 73,41 62,34 C68,44 81,51 93,58Z" fill="#8cc543" />
      {/* Hoja derecha */}
      <path d="M107,58 C114,49 127,41 138,34 C132,44 119,51 107,58Z" fill="#8cc543" />

      {/* Tronco */}
      <line x1="100" y1="56" x2="100" y2="110" stroke="#8b6535" strokeWidth="8" strokeLinecap="round" />

      {/* Raíces — abanico amplio */}
      <line x1="100" y1="110" x2="12"  y2="136" stroke="#8b6535" strokeWidth="4"   strokeLinecap="round" />
      <line x1="100" y1="110" x2="30"  y2="128" stroke="#8b6535" strokeWidth="4"   strokeLinecap="round" />
      <line x1="100" y1="110" x2="52"  y2="122" stroke="#8b6535" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="100" y1="110" x2="76"  y2="116" stroke="#8b6535" strokeWidth="3"   strokeLinecap="round" />
      <line x1="100" y1="110" x2="124" y2="116" stroke="#8b6535" strokeWidth="3"   strokeLinecap="round" />
      <line x1="100" y1="110" x2="148" y2="122" stroke="#8b6535" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="100" y1="110" x2="170" y2="128" stroke="#8b6535" strokeWidth="4"   strokeLinecap="round" />
      <line x1="100" y1="110" x2="188" y2="136" stroke="#8b6535" strokeWidth="4"   strokeLinecap="round" />

      {/* Texto CAMPUS */}
      <text
        x="100"
        y="153"
        textAnchor="middle"
        fontFamily="Lora, Georgia, serif"
        fontSize="14"
        fontWeight="600"
        letterSpacing="7"
        fill="#4a7d3e"
      >CAMPUS</text>

      {/* Texto RADICES */}
      <text
        x="100"
        y="182"
        textAnchor="middle"
        fontFamily="Lora, Georgia, serif"
        fontSize="34"
        fontWeight="700"
        letterSpacing="2"
        fill="#1e3d0f"
      >RADICES</text>
    </svg>
  );
}
