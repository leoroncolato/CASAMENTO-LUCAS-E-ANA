import { Listra } from './Decoracoes'

export default function Historia() {
  return (
    <section id="historia" className="bg-[#FFFDF7] px-6 py-20 md:py-32">
      <div className="max-w-2xl mx-auto flex flex-col gap-16">

        {/* Bloco 1 */}
        <div className="flex flex-col gap-4">
          <p className="font-josefin text-base md:text-lg text-[#2D2D2D] leading-relaxed">
            Até mesmo as grandes e atemporais histórias começaram em um capítulo, em parágrafo por parágrafo, em linha por linha.
          </p>
          <p className="font-josefin text-base md:text-lg text-[#2D2D2D] leading-relaxed">
            Desejamos a dignidade da grandeza de uma boa história de amor, e assim como as tais, também começamos aos poquinhos. No ordinário construído com cautela. Na cura da descoberta que amar é bom. E ser amado é também liberdade.
          </p>
          <blockquote className="font-soria text-xl md:text-2xl text-[#F2502C] leading-relaxed border-l-2 border-[#F9A852] pl-5 mt-2">
            "E foi assim que no grande parque do colégio lentamente comeeci a aprender a ser amada, suportando o sacrifício de não merecer, apenas para suavizar a dor de quem não ama."
            <span className="block font-josefin text-xs uppercase tracking-widest text-[#CAD17A] mt-3">— Clarice Lispector</span>
          </blockquote>
        </div>

        {/* Foto 1 */}
        <div className="w-full aspect-[3/4] md:aspect-[4/3] bg-[#F9CDBB] rounded-2xl overflow-hidden">
          <img
            src="/fotos/foto1.jpg"
            alt="Lucas e Ana Luiza"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Decoração */}
        <div className="flex justify-center">
          <Listra className="w-32 opacity-40" />
        </div>

        {/* Bloco 2 */}
        <div className="flex flex-col gap-4">
          <p className="font-josefin text-base md:text-lg text-[#2D2D2D] leading-relaxed">
            Como no século XV fomos indiciados a nos conhecer — os pastores? O acaso? Deus — e no lugar que era improvável para um de nós ser bom, em um abraço forte, sentimos o calor do amor que nasceria.
          </p>
          <blockquote className="font-soria text-xl md:text-2xl text-[#91C494] leading-relaxed border-l-2 border-[#CAD17A] pl-5 mt-2">
            "O Amor já está, está sempre. Faltava apenas o golpe da graça — que se chama paixão."
            <span className="block font-josefin text-xs uppercase tracking-widest text-[#CAD17A] mt-3">— Clarice Lispector</span>
          </blockquote>
        </div>

        {/* Foto 2 */}
        <div className="w-full aspect-[3/4] md:aspect-[4/3] bg-[#CAD17A] rounded-2xl overflow-hidden">
          <img
            src="/fotos/foto2.jpg"
            alt="Lucas e Ana Luiza"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Decoração */}
        <div className="flex justify-center">
          <Listra className="w-32 opacity-40" />
        </div>

        {/* Bloco 3 */}
        <div className="flex flex-col gap-4">
          <p className="font-josefin text-base md:text-lg text-[#2D2D2D] leading-relaxed">
            A conversa que começou "inocente" — Lucas assume que já queria e não foi sem intenção — no direct do Instagram, foi fadada de ter como fim o: nunca mais. O para sempre começou ali naquele primeiro oi, que até hoje não deixou de ser nem por um único dia.
          </p>
          <blockquote className="font-soria text-xl md:text-2xl text-[#F26522] leading-relaxed border-l-2 border-[#F9A852] pl-5 mt-2">
            "E quando notou que aceitava em pleno o amor, sua alegria foi tai grande que o coração lhe batia por todo o corpo."
            <span className="block font-josefin text-xs uppercase tracking-widest text-[#CAD17A] mt-3">— Clarice Lispector</span>
          </blockquote>
        </div>

        {/* Foto 3 */}
        <div className="w-full aspect-[3/4] md:aspect-[4/3] bg-[#91C494] rounded-2xl overflow-hidden">
          <img
            src="/fotos/foto3.jpg"
            alt="Lucas e Ana Luiza"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Decoração */}
        <div className="flex justify-center">
          <Listra className="w-32 opacity-40" />
        </div>

        {/* Bloco 4 — conclusão */}
        <div className="flex flex-col gap-4 text-center">
          <p className="font-josefin text-base md:text-lg text-[#2D2D2D] leading-relaxed">
            Agora, depois de muitas noites de lanche fit, chalé, piqueniques, matos, sufocos e cheirinhos no Ronaldo, depois de muitos filmes no sofá nas casas de nossos pais — queremos finalmente ter nosso próprio sofá.
          </p>
          <p className="font-josefin text-base md:text-lg text-[#2D2D2D] leading-relaxed">
            Então, é com muito prazer que compartilhamos a oficialização do livro na nossa família: nosso casamento.
          </p>
          <blockquote className="font-soria text-2xl md:text-3xl text-[#F2502C] leading-relaxed mt-4">
            "A coisa mais extraordinária do mundo é o um homem comum, uma mulher comum e seus filhos comuns."
            <span className="block font-josefin text-xs uppercase tracking-widest text-[#CAD17A] mt-3">— G.K. Chesterton</span>
          </blockquote>
        </div>

      </div>
    </section>
  )
}