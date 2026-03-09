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
      <path d="M100,52 C97,38 89,22 100,10 C111,22 103,38 100,52Z" fill="#8cc543" />
      {/* Hoja izquierda */}
      <path d="M92,55 C83,44 68,35 54,27 C62,40 77,48 92,55Z" fill="#8cc543" />
      {/* Hoja derecha */}
      <path d="M108,55 C117,44 132,35 146,27 C138,40 123,48 108,55Z" fill="#8cc543" />

      {/* Tronco */}
      <line x1="100" y1="52" x2="100" y2="114" stroke="#8b6535" strokeWidth="9" strokeLinecap="round" />

      {/* Raíces — abanico amplio */}
      <line x1="100" y1="114" x2="8"   y2="143" stroke="#8b6535" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="100" y1="114" x2="26"  y2="134" stroke="#8b6535" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="100" y1="114" x2="50"  y2="127" stroke="#8b6535" strokeWidth="4"   strokeLinecap="round" />
      <line x1="100" y1="114" x2="76"  y2="120" stroke="#8b6535" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="100" y1="114" x2="124" y2="120" stroke="#8b6535" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="100" y1="114" x2="150" y2="127" stroke="#8b6535" strokeWidth="4"   strokeLinecap="round" />
      <line x1="100" y1="114" x2="174" y2="134" stroke="#8b6535" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="100" y1="114" x2="192" y2="143" stroke="#8b6535" strokeWidth="4.5" strokeLinecap="round" />

      {/* Texto CAMPUS */}
      <text
        x="100"
        y="160"
        textAnchor="middle"
        fontFamily="Lora, Georgia, serif"
        fontSize="13"
        fontWeight="600"
        letterSpacing="7"
        fill="#4a7d3e"
      >CAMPUS</text>

      {/* Texto RADICES */}
      <text
        x="100"
        y="185"
        textAnchor="middle"
        fontFamily="Lora, Georgia, serif"
        fontSize="33"
        fontWeight="700"
        letterSpacing="2"
        fill="#1e3d0f"
      >RADICES</text>
    </svg>
  );
}
