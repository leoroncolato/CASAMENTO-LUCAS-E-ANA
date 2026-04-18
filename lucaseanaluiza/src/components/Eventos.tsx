import Countdown from './Countdown'
import { Gatinho, Laranja } from './Decoracoes'

export default function Eventos() {
  return (
    <section id="eventos" className="bg-[#FFFDF7] px-6 py-20 md:py-32">
      <div className="max-w-2xl mx-auto flex flex-col gap-12">

        {/* Título */}
        <div className="text-center">
          <p className="font-josefin text-xs uppercase tracking-[0.3em] text-[#CAD17A] mb-3">
            celebre conosco
          </p>
          <h2 className="font-seasons text-5xl md:text-6xl text-[#2D2D2D]">
            Os Eventos
          </h2>
        </div>

        {/* Contadores regressivos */}
        <div className="flex flex-col gap-8 items-center py-4">
          <Countdown dataAlvo="2026-07-11T00:00:00" label="faltam para o chá de panela" />
          <div className="w-full h-px bg-[#CAD17A] opacity-30" />
          <Countdown dataAlvo="2026-09-26T00:00:00" label="faltam para o casamento" />
        </div>

        {/* Card Chá de Panela */}
        <div className="relative rounded-3xl overflow-hidden bg-[#FCF59B] p-8 md:p-10 flex flex-col gap-4">
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#F9A852] opacity-30 blur-2xl" />
          <p className="font-josefin text-xs uppercase tracking-[0.3em] text-[#F26522]">
            primeiro evento
          </p>
          <h3 className="font-seasons text-4xl md:text-5xl text-[#2D2D2D]">
            Chá de Panela
          </h3>
          <div className="flex flex-col gap-1 font-josefin text-sm text-[#2D2D2D]">
            <p>📅 11 de Julho de 2026</p>
            <p>📍 Chácara Planície - GO-080 - Goiânia, GO</p>
          </div>
          <a
            href="https://maps.app.goo.gl/wCJKyhRaDVmp7RK1A"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-josefin text-xs uppercase tracking-widest text-[#F26522] hover:text-[#C42311] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            Ver no Google Maps
          </a>

          <p className="font-josefin text-sm text-[#2D2D2D] leading-relaxed">
            Será nosso momento de reunir com quem amamos e celebrarmos o nosso início como Sr. e Sra. Sua presença é muito importante.
          </p>
          <a
            href="/confirmar/cha-de-panela"
            className="mt-2 inline-block text-center bg-[#F2502C] text-white font-josefin text-xs uppercase tracking-widest py-4 px-8 rounded-full hover:bg-[#C42311] transition-colors"
          >
            Confirmar Presença
          </a>
        </div>

        {/* Card Casamento */}
        <div className="relative rounded-3xl overflow-hidden bg-[#CAD17A] p-8 md:p-10 flex flex-col gap-4">
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#91C494] opacity-40 blur-2xl" />
          <p className="font-josefin text-xs uppercase tracking-[0.3em] text-[#2D2D2D] opacity-60">
            segundo evento
          </p>
          <h3 className="font-seasons text-4xl md:text-5xl text-[#2D2D2D]">
            Casamento
          </h3>
          <div className="flex flex-col gap-1 font-josefin text-sm text-[#2D2D2D]">
            <p>📅 26 de Setembro de 2026</p>
            <p>📍 Em breve</p>
          </div>
          <p className="font-josefin text-sm text-[#2D2D2D] leading-relaxed">
            O grand finale e oficialização da nossa união, acontecerá em um começo de noite, contando apenas com uma cerimônia civil.
          </p>
          <a
            href="/confirmar/casamento"
            className="mt-2 inline-block text-center bg-[#2D2D2D] text-white font-josefin text-xs uppercase tracking-widest py-4 px-8 rounded-full hover:bg-[#F2502C] transition-colors"
          >
            Confirmar Presença
          </a>
        </div>

        {/* Link presentes */}
        <div className="text-center">
          <p className="font-josefin text-sm text-[#2D2D2D] mb-4">
            Nossa casa pode ter um pouquinho de você 🏡
          </p>

          <a
            href="/presentes"
            className="font-josefin text-xs uppercase tracking-widest text-[#F2502C] border-b border-[#F2502C] pb-1 hover:text-[#C42311] hover:border-[#C42311] transition-colors"
          >
            Ver lista de presentes
          </a>
        </div>

      </div>

      {/* Easter-Egg heheheheh */}
      <div className="relative mt-8 flex justify-center">
        <Laranja className="w-8 h-8 opacity-70" />
        <div className="absolute bottom-0 right-6 opacity-10 hover:opacity-80 transition-opacity duration-500 cursor-default" title="🐱">
          <Gatinho className="w-12 h-12" />
        </div>
      </div>
    </section>
  )
}
