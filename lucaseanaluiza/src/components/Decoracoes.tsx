export function Laranja({ className = '' }: { className?: string }) {
    return (
      <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="32" r="22" fill="#F26522" />
        <ellipse cx="30" cy="32" rx="22" ry="22" fill="#F26522" />
        <path d="M22 20 Q30 14 38 20" stroke="#CAD17A" strokeWidth="2" fill="none" />
        <path d="M30 10 Q34 4 30 2 Q28 6 30 10Z" fill="#91C494" />
        <ellipse cx="24" cy="28" rx="4" ry="6" fill="#F9A852" opacity="0.4" transform="rotate(-20 24 28)" />
      </svg>
    )
  }
  
  export function RamoOliveira({ className = '' }: { className?: string }) {
    return (
      <svg className={className} viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 110 Q40 60 40 20" stroke="#CAD17A" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="28" cy="85" rx="10" ry="6" fill="#91C494" transform="rotate(-30 28 85)" />
        <ellipse cx="52" cy="70" rx="10" ry="6" fill="#CAD17A" transform="rotate(30 52 70)" />
        <ellipse cx="25" cy="55" rx="10" ry="6" fill="#91C494" transform="rotate(-25 25 55)" />
        <ellipse cx="54" cy="42" rx="10" ry="6" fill="#CAD17A" transform="rotate(25 54 42)" />
        <ellipse cx="28" cy="30" rx="8" ry="5" fill="#91C494" transform="rotate(-20 28 30)" />
      </svg>
    )
  }
  
  export function Listra({ className = '' }: { className?: string }) {
    return (
      <svg className={className} viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 4 Q50 0 100 4 Q150 8 200 4" stroke="#F9A852" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }
  
  export function Gatinho({ className = '' }: { className?: string }) {
    return (
      <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Corpo */}
        <ellipse cx="40" cy="52" rx="22" ry="18" fill="#F26522" />
        {/* Cabeça */}
        <circle cx="40" cy="30" r="18" fill="#F26522" />
        {/* Orelhas */}
        <polygon points="22,18 16,4 30,14" fill="#F26522" />
        <polygon points="58,18 64,4 50,14" fill="#F26522" />
        <polygon points="23,17 18,7 29,15" fill="#F9CDBB" />
        <polygon points="57,17 62,7 51,15" fill="#F9CDBB" />
        {/* Rosto */}
        <circle cx="33" cy="27" r="4" fill="white" />
        <circle cx="47" cy="27" r="4" fill="white" />
        <circle cx="34" cy="28" r="2.5" fill="#2D2D2D" />
        <circle cx="48" cy="28" r="2.5" fill="#2D2D2D" />
        <circle cx="35" cy="27" r="1" fill="white" />
        <circle cx="49" cy="27" r="1" fill="white" />
        {/* Nariz e boca */}
        <ellipse cx="40" cy="33" rx="2" ry="1.5" fill="#E94151" />
        <path d="M38 34.5 Q40 37 42 34.5" stroke="#E94151" strokeWidth="1" fill="none" strokeLinecap="round" />
        {/* Bigodes */}
        <line x1="42" y1="33" x2="56" y2="31" stroke="#FFFDF7" strokeWidth="1" strokeLinecap="round" />
        <line x1="42" y1="34" x2="56" y2="35" stroke="#FFFDF7" strokeWidth="1" strokeLinecap="round" />
        <line x1="38" y1="33" x2="24" y2="31" stroke="#FFFDF7" strokeWidth="1" strokeLinecap="round" />
        <line x1="38" y1="34" x2="24" y2="35" stroke="#FFFDF7" strokeWidth="1" strokeLinecap="round" />
        {/* Rabinho */}
        <path d="M62 52 Q72 45 68 35 Q65 28 70 24" stroke="#F26522" strokeWidth="4" fill="none" strokeLinecap="round" />
      </svg>
    )
  }