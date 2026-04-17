export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#FFFDF7] overflow-hidden px-6 text-center">

            {/* Foto de fundo */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/fotos/hero.jpg"
                    alt="Lucas e Ana Luiza"
                    className="w-full h-full object-cover object-center"
                />
                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
            </div>

            {/* Conteúdo */}
            {/* Conteúdo */}
            <div className="relative z-10 flex flex-col items-center">
                <p className="font-josefin text-xs uppercase tracking-[0.3em] text-[#FCF59B] mb-4">
                    você está convidado
                </p>

                <h1 className="font-seasons text-6xl md:text-8xl text-white leading-tight mb-2">
                    Lucas
                </h1>
                <p className="font-soria text-3xl md:text-4xl text-[#F9A852] mb-2">&</p>
                <h1 className="font-seasons text-6xl md:text-8xl text-white leading-tight mb-8">
                    Ana Luiza
                </h1>

                <div className="flex flex-col sm:flex-row gap-6 text-center">
                    <div>
                        <p className="font-josefin text-xs uppercase tracking-widest text-[#91C494]">Chá de Panela</p>
                        <p className="font-josefin text-sm text-white mt-1">11 de Julho de 2026</p>
                    </div>
                    <div className="hidden sm:block w-px bg-white/30" />
                    <div>
                        <p className="font-josefin text-xs uppercase tracking-widest text-[#F9A852]">Casamento</p>
                        <p className="font-josefin text-sm text-white mt-1">26 de Setembro de 2026</p>
                    </div>
                </div>
            </div>


            <a
                href="#historia"
                className="absolute bottom-10 animate-bounce text-[#CAD17A]"
                aria-label="Rolar para baixo"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
            </a>

        </section>
    );
}