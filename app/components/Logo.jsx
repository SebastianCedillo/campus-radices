export default function Logo({ size = 48 }) {
  return (
    <svg
      width={size}
      height={size * 0.85}
      viewBox="0 0 100 85"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Campus Radices"
    >
      {/* Hoja central */}
      <path d="M50,42 C47,33 44,21 50,11 C56,21 53,33 50,42Z" fill="#8cc543" />
      {/* Hoja izquierda */}
      <path d="M45,40 C39,32 29,25 21,19 C25,29 35,35 45,40Z" fill="#8cc543" />
      {/* Hoja derecha */}
      <path d="M55,40 C61,32 71,25 79,19 C75,29 65,35 55,40Z" fill="#8cc543" />
      {/* Tronco */}
      <line x1="50" y1="42" x2="50" y2="58" stroke="#8b6535" strokeWidth="5" strokeLinecap="round" />
      {/* Raíces */}
      <line x1="50" y1="58" x2="5"  y2="72" stroke="#8b6535" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="50" y1="58" x2="18" y2="68" stroke="#8b6535" strokeWidth="3"   strokeLinecap="round" />
      <line x1="50" y1="58" x2="33" y2="63" stroke="#8b6535" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="50" y1="58" x2="67" y2="63" stroke="#8b6535" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="50" y1="58" x2="82" y2="68" stroke="#8b6535" strokeWidth="3"   strokeLinecap="round" />
      <line x1="50" y1="58" x2="95" y2="72" stroke="#8b6535" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}
