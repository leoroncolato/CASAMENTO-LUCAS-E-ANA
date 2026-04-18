'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import type { Presente } from '@/types'

const CATEGORIAS = ['Cozinha', 'Banheiro', 'Quarto', 'Dispensa', 'Sala', 'Mimo/PIX']

export default function ListaPresentes() {
  const [presentes, setPresentes] = useState<Presente[]>([])
  const [categoria, setCategoria] = useState<string>('Cozinha')
  const [loading, setLoading] = useState(true)
  const [escolhendo, setEscolhendo] = useState<string | null>(null)
  const [codigo, setCodigo] = useState('')
  const [convidadoValidado, setConvidadoValidado] = useState<any>(null)
  const [erroCodigo, setErroCodigo] = useState('')
  const [sucesso, setSucesso] = useState<string | null>(null)

  useEffect(() => {
    buscarPresentes()
  }, [])

  async function buscarPresentes() {
    const { data } = await supabase
      .from('presentes')
      .select('*')
      .order('nome')
    if (data) setPresentes(data)
    setLoading(false)
  }

  async function validarCodigo() {
    setErroCodigo('')
    const { data } = await supabase
      .from('convidados')
      .select('*')
      .eq('codigo', codigo.trim().toUpperCase())
      .single()

    if (!data) {
      setErroCodigo('Código não encontrado.')
      return
    }
    setConvidadoValidado(data)
  }

  async function escolherPresente(presente: Presente) {
    if (!convidadoValidado) return

    if (presente.tipo === 'pix') {
      setSucesso(`Obrigado, ${convidadoValidado.nome}! A chave PIX chegará em breve 💚`)
      setEscolhendo(null)
      return
    }

    const { error } = await supabase
      .from('presentes')
      .update({ disponivel: false, nome_escolhido: convidadoValidado.nome })
      .eq('id', presente.id)

    if (!error) {
      setPresentes(prev =>
        prev.map(p => p.id === presente.id
          ? { ...p, disponivel: false, nome_escolhido: convidadoValidado.nome }
          : p
        )
      )
      setSucesso(`Obrigado, ${convidadoValidado.nome}! Você escolheu: ${presente.nome} 🎁`)
      setEscolhendo(null)
    }
  }

  const presentesFiltrados = presentes
    .filter(p => p.categoria === categoria)

  return (
    <section id="presentes" className="bg-[#FFFDF7] px-6 py-20 md:py-32">
      <div className="max-w-2xl mx-auto flex flex-col gap-10">

        <div className="text-center">
          <p className="font-josefin text-xs uppercase tracking-[0.3em] text-[#CAD17A] mb-3">
            nossa casa pode ter um pouquinho de você
          </p>
          <h2 className="font-seasons text-5xl md:text-6xl text-[#2D2D2D]">
            Lista de Presentes
          </h2>
        </div>

        {/* Validação de código */}
        {!convidadoValidado ? (
          <div className="flex flex-col gap-3 max-w-sm mx-auto w-full">
            <p className="font-josefin text-sm text-[#2D2D2D] text-center">
              Digite seu código para escolher um presente:
            </p>
            <input
              type="text"
              value={codigo}
              onChange={e => { setCodigo(e.target.value); setErroCodigo('') }}
              placeholder="Ex: ANA001"
              className="font-josefin text-sm border border-[#CAD17A] rounded-xl px-4 py-3 bg-white outline-none focus:border-[#F2502C] text-center uppercase tracking-widest"
            />
            {erroCodigo && (
              <p className="font-josefin text-xs text-[#C42311] text-center">{erroCodigo}</p>
            )}
            <button
              onClick={validarCodigo}
              disabled={!codigo.trim()}
              className="font-josefin text-xs uppercase tracking-widest bg-[#F2502C] text-white py-3 rounded-full hover:bg-[#C42311] transition-colors disabled:opacity-40"
            >
              Continuar
            </button>
          </div>
        ) : (
          <p className="font-josefin text-sm text-center text-[#91C494]">
            Olá, <strong>{convidadoValidado.nome}</strong>! Escolha seu presente 🎁
          </p>
        )}

        {/* Filtro categorias */}
        <div className="flex flex-wrap gap-2 justify-center">
          {CATEGORIAS.map(cat => (
            <button
              key={cat}
              onClick={() => setCategoria(cat)}
              className={`font-josefin text-xs uppercase tracking-widest px-5 py-2 rounded-full border transition-colors ${categoria === cat
                  ? 'bg-[#F2502C] text-white border-[#F2502C]'
                  : 'bg-transparent text-[#2D2D2D] border-[#CAD17A] hover:border-[#F2502C]'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {sucesso && (
          <div className="bg-[#CAD17A] text-[#2D2D2D] font-josefin text-sm px-6 py-4 rounded-2xl text-center">
            {sucesso}
            <button onClick={() => setSucesso(null)} className="block mx-auto mt-2 text-xs underline">
              fechar
            </button>
          </div>
        )}

        {loading ? (
          <p className="font-josefin text-sm text-center opacity-50">Carregando...</p>
        ) : (
          <div className="flex flex-col gap-4">
            {presentesFiltrados.map(presente => (
              <div
                key={presente.id}
                className={`rounded-2xl border p-5 flex flex-col gap-3 transition-opacity ${!presente.disponivel && presente.tipo !== 'pix'
                    ? 'opacity-50 border-[#CAD17A]'
                    : 'border-[#F9CDBB] hover:border-[#F2502C]'
                  }`}
              >

                {presente.imagem_url && (
                  <div className="w-full aspect-video rounded-xl overflow-hidden bg-[#F9CDBB]">
                    <img
                      src={presente.imagem_url}
                      alt={presente.nome}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-col gap-1">
                    <p className="font-josefin text-sm font-semibold text-[#2D2D2D]">
                      {presente.nome}
                    </p>
                    {presente.tipo === 'pix' && (
                      <span className="font-josefin text-xs uppercase tracking-widest text-[#91C494]">
                        PIX — qualquer valor
                      </span>
                    )}
                    {!presente.disponivel && presente.tipo !== 'pix' && (
                      <span className="font-josefin text-xs uppercase tracking-widest text-[#CAD17A]">
                        já escolhido
                      </span>
                    )}
                  </div>

                  {convidadoValidado && (presente.disponivel || presente.tipo === 'pix') && (
                    <button
                      onClick={() => setEscolhendo(presente.id)}
                      className="shrink-0 font-josefin text-xs uppercase tracking-widest bg-[#FCF59B] text-[#2D2D2D] px-4 py-2 rounded-full hover:bg-[#F9A852] transition-colors"
                    >
                      Escolher
                    </button>
                  )}
                </div>

                {escolhendo === presente.id && (
                  <div className="flex flex-col gap-2 pt-2 border-t border-[#F9CDBB]">
                    <p className="font-josefin text-xs text-[#2D2D2D]">
                      Confirmar escolha de <strong>{presente.nome}</strong>?
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => escolherPresente(presente)}
                        className="flex-1 font-josefin text-xs uppercase tracking-widest bg-[#F2502C] text-white py-2 rounded-full hover:bg-[#C42311] transition-colors"
                      >
                        Confirmar
                      </button>
                      <button
                        onClick={() => setEscolhendo(null)}
                        className="font-josefin text-xs uppercase tracking-widest text-[#2D2D2D] px-4 py-2 rounded-full border border-[#CAD17A] hover:border-[#F2502C] transition-colors"
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}