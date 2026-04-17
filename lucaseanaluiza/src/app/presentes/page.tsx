import ListaPresentes from '@/components/ListaPresentes'

export default function Presentes() {
  return (
    <main>
      <div className="bg-[#FFFDF7] px-6 pt-12 pb-4 text-center">
        <a href="/" className="font-josefin text-xs uppercase tracking-widest text-[#2D2D2D] opacity-40 hover:opacity-70 transition-opacity">
          ← Lucas & Ana Luiza
        </a>
      </div>
      <ListaPresentes />
    </main>
  )
}