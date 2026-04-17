'use client'

import { useEffect, useState } from 'react'

interface Props {
  dataAlvo: string
  label: string
}

export default function Countdown({ dataAlvo, label }: Props) {
  const [tempo, setTempo] = useState({ dias: 0, horas: 0, minutos: 0, segundos: 0 })

  useEffect(() => {
    function calcular() {
      const agora = new Date().getTime()
      const alvo = new Date(dataAlvo).getTime()
      const diff = alvo - agora

      if (diff <= 0) return

      setTempo({
        dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
        horas: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutos: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        segundos: Math.floor((diff % (1000 * 60)) / 1000),
      })
    }

    calcular()
    const interval = setInterval(calcular, 1000)
    return () => clearInterval(interval)
  }, [dataAlvo])

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="font-josefin text-xs uppercase tracking-[0.3em] text-[#2D2D2D] opacity-50">
        {label}
      </p>
      <div className="flex gap-4">
        {[
          { valor: tempo.dias, unidade: 'dias' },
          { valor: tempo.horas, unidade: 'horas' },
          { valor: tempo.minutos, unidade: 'min' },
          { valor: tempo.segundos, unidade: 'seg' },
        ].map(({ valor, unidade }) => (
          <div key={unidade} className="flex flex-col items-center gap-1">
            <span className="font-seasons text-4xl md:text-5xl text-[#F2502C] leading-none">
              {String(valor).padStart(2, '0')}
            </span>
            <span className="font-josefin text-xs uppercase tracking-widest text-[#2D2D2D] opacity-40">
              {unidade}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}