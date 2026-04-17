export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#FFFDF7] overflow-hidden px-6 text-center">

            {/* Decoração de fundo — círculos de cor */}
            <div className="absolute top-[-80px] left-[-80px] w-72 h-72 rounded-full bg-[#F9A852] opacity-20 blur-3xl" />
            <div className="absolute bottom-[-60px] right-[-60px] w-64 h-64 rounded-full bg-[#91C494] opacity-20 blur-3xl" />
            <div className="absolute top-1/2 right-[-40px] w-48 h-48 rounded-full bg-[#E94151] opacity-10 blur-2xl" />

            {/* Conteúdo */}
            <p className="font-josefin text-xs uppercase tracking-[0.3em] text-[#F2502C] mb-4">
                você está convidado
            </p>

            <h1 className="font-seasons text-6xl md:text-8xl text-[#2D2D2D] leading-tight mb-2">
                Lucas
            </h1>
            <p className="font-soria text-3xl md:text-4xl text-[#F2502C] mb-2">&</p>
            <h1 className="font-seasons text-6xl md:text-8xl text-[#2D2D2D] leading-tight mb-8">
                Ana Luíza
            </h1>

            <div className="flex flex-col sm:flex-row gap-6 text-center">
                <div>
                    <p className="font-josefin text-xs uppercase tracking-widest text-[#91C494]">Chá de Panela</p>
                    <p className="font-josefin text-sm text-[#2D2D2D] mt-1">11 de Julho de 2026</p>
                </div>
                <div className="hidden sm:block w-px bg-[#CAD17A]" />
                <div>
                    <p className="font-josefin text-xs uppercase tracking-widest text-[#F2502C]">Casamento</p>
                    <p className="font-josefin text-sm text-[#2D2D2D] mt-1">26 de Setembro de 2026</p>
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