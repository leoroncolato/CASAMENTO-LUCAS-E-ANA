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
      <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Gradiente do Pelo */}
          <radialGradient id="orangeFur" cx="50%" cy="50%" r="50%" fx="50%" fy="40%">
            <stop offset="0%" stopColor="#F9A03F" />
            <stop offset="70%" stopColor="#E26A00" />
            <stop offset="100%" stopColor="#B34A00" />
          </radialGradient>
          
          {/* Gradiente da Orelha Interna */}
          <radialGradient id="innerEar" cx="50%" cy="100%" r="100%">
            <stop offset="0%" stopColor="#FFD1BA" />
            <stop offset="100%" stopColor="#D95C00" />
          </radialGradient>
          
          {/* Gradiente dos Olhos */}
          <linearGradient id="eyeGreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A4D13A" />
            <stop offset="100%" stopColor="#1E6105" />
          </linearGradient>
        </defs>
  
        {/* --- Orelhas --- */}
        {/* Orelha Esquerda */}
        <path d="M 40 80 Q 20 20 50 10 Q 70 30 80 50 Z" fill="url(#orangeFur)" />
        <path d="M 45 75 Q 30 30 50 20 Q 65 35 70 55 Z" fill="url(#innerEar)" />
        {/* Orelha Direita */}
        <path d="M 160 80 Q 180 20 150 10 Q 130 30 120 50 Z" fill="url(#orangeFur)" />
        <path d="M 155 75 Q 170 30 150 20 Q 135 35 130 55 Z" fill="url(#innerEar)" />
  
        {/* --- Base do Rosto --- */}
        <ellipse cx="100" cy="110" rx="75" ry="65" fill="url(#orangeFur)" />
  
        {/* --- Listras Rajadas (M da testa e laterais) --- */}
        <path d="M 100 45 L 100 75" stroke="#9A3800" strokeWidth="4" strokeLinecap="round" opacity="0.7" fill="none" />
        <path d="M 85 50 Q 90 75 85 85" stroke="#9A3800" strokeWidth="4" strokeLinecap="round" opacity="0.7" fill="none" />
        <path d="M 115 50 Q 110 75 115 85" stroke="#9A3800" strokeWidth="4" strokeLinecap="round" opacity="0.7" fill="none" />
        <path d="M 70 60 Q 75 75 75 80" stroke="#9A3800" strokeWidth="3" strokeLinecap="round" opacity="0.6" fill="none" />
        <path d="M 130 60 Q 125 75 125 80" stroke="#9A3800" strokeWidth="3" strokeLinecap="round" opacity="0.6" fill="none" />
        {/* Listras bochecha */}
        <path d="M 35 110 Q 50 115 45 125" stroke="#9A3800" strokeWidth="3" strokeLinecap="round" opacity="0.5" fill="none" />
        <path d="M 165 110 Q 150 115 155 125" stroke="#9A3800" strokeWidth="3" strokeLinecap="round" opacity="0.5" fill="none" />
  
        {/* --- Focinho e Queixo (Áreas claras) --- */}
        <ellipse cx="100" cy="155" rx="20" ry="15" fill="#FFF2E5" />
        <ellipse cx="82" cy="140" rx="22" ry="18" fill="#FFFDF7" />
        <ellipse cx="118" cy="140" rx="22" ry="18" fill="#FFFDF7" />
  
        {/* --- Olhos --- */}
        {/* Base Amendoada */}
        <path d="M 50 105 Q 72.5 88 92 105 Q 72.5 117 50 105 Z" fill="url(#eyeGreen)" stroke="#222" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M 150 105 Q 127.5 88 108 105 Q 127.5 117 150 105 Z" fill="url(#eyeGreen)" stroke="#222" strokeWidth="2.5" strokeLinejoin="round" />
        
        {/* Pupilas em fenda */}
        <ellipse cx="71" cy="103" rx="3.5" ry="11" fill="#111" />
        <ellipse cx="129" cy="103" rx="3.5" ry="11" fill="#111" />
        
        {/* Brilho Especular (Luz nos olhos) */}
        <circle cx="68" cy="98" r="2.5" fill="#FFF" opacity="0.9" />
        <circle cx="126" cy="98" r="2.5" fill="#FFF" opacity="0.9" />
        <circle cx="73" cy="108" r="1" fill="#FFF" opacity="0.5" />
        <circle cx="131" cy="108" r="1" fill="#FFF" opacity="0.5" />
  
        {/* --- Nariz --- */}
        <path d="M 90 130 Q 100 128 110 130 L 102 142 Q 100 144 98 142 Z" fill="#E47070" stroke="#B24444" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M 93 132 L 107 132 L 100 138 Z" fill="#F08F8F" opacity="0.8" /> {/* Reflexo do nariz */}
  
        {/* --- Boca --- */}
        <path d="M 100 142 L 100 150 Q 85 155 80 146" stroke="#4A2000" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M 100 142 L 100 150 Q 115 155 120 146" stroke="#4A2000" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        
        {/* Pontinhos do bigode no focinho */}
        <circle cx="75" cy="138" r="1" fill="#D3A992" />
        <circle cx="85" cy="135" r="1" fill="#D3A992" />
        <circle cx="80" cy="144" r="1" fill="#D3A992" />
        <circle cx="125" cy="138" r="1" fill="#D3A992" />
        <circle cx="115" cy="135" r="1" fill="#D3A992" />
        <circle cx="120" cy="144" r="1" fill="#D3A992" />
  
        {/* --- Bigodes --- */}
        {/* Bigodes Laterais (Focinho) */}
        <g stroke="#FFFFFF" strokeWidth="1.5" fill="none" opacity="0.8" strokeLinecap="round">
          <path d="M 70 140 Q 30 130 10 135" />
          <path d="M 68 145 Q 20 145 5 155" />
          <path d="M 72 150 Q 30 160 15 175" />
  
          <path d="M 130 140 Q 170 130 190 135" />
          <path d="M 132 145 Q 180 145 195 155" />
          <path d="M 128 150 Q 170 160 185 175" />
        </g>
  
        {/* Pelinhos das Sobrancelhas */}
        <g stroke="#FFFFFF" strokeWidth="1" fill="none" opacity="0.7" strokeLinecap="round">
          <path d="M 65 80 Q 50 60 40 50" />
          <path d="M 70 75 Q 60 50 55 40" />
          <path d="M 135 80 Q 150 60 160 50" />
          <path d="M 130 75 Q 140 50 145 40" />
        </g>
  
        {/* Pelinhos das Orelhas */}
        <g stroke="#FFFDF7" strokeWidth="1.5" fill="none" opacity="0.8" strokeLinecap="round">
           <path d="M 45 65 Q 60 40 70 50" />
           <path d="M 50 70 Q 65 50 75 60" />
           <path d="M 155 65 Q 140 40 130 50" />
           <path d="M 150 70 Q 135 50 125 60" />
        </g>
      </svg>
    )
  }