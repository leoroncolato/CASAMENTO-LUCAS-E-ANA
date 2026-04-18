'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

type Evento = 'cha' | 'casamento'
interface Props { evento: Evento }

const INFO = {
  cha: {
    titulo: 'Chá de Panela',
    data: '11 de Julho de 2026',
    local: 'Chácara Planície',
    cor: '#FCF59B',
    corBotao: '#F2502C',
  },
  casamento: {
    titulo: 'Casamento',
    data: '26 de Setembro de 2026',
    local: 'Em breve',
    cor: '#CAD17A',
    corBotao: '#2D2D2D',
  },
}

export default function FormConfirmacao({ evento }: Props) {
  const [codigo, setCodigo] = useState('')
  const [convidado, setConvidado] = useState<any>(null)
  const [erro, setErro] = useState('')
  const [acompanhantes, setAcompanhantes] = useState(0)
  const [nomesAcompanhantes, setNomesAcompanhantes] = useState<string[]>([])
  const [observacao, setObservacao] = useState('')
  const [sucesso, setSucesso] = useState(false)
  const [loading, setLoading] = useState(false)

  const info = INFO[evento]

  function atualizarQtd(nova: number) {
    const qtd = Math.max(0, nova)
    setAcompanhantes(qtd)
    setNomesAcompanhantes(prev => {
      const arr = [...prev]
      while (arr.length < qtd) arr.push('')
      return arr.slice(0, qtd)
    })
  }

  function atualizarNome(index: number, valor: string) {
    setNomesAcompanhantes(prev => {
      const arr = [...prev]
      arr[index] = valor
      return arr
    })
  }

  async function validarCodigo() {
    setErro('')
    setLoading(true)
    const { data } = await supabase
      .from('convidados')
      .select('*')
      .eq('codigo', codigo.trim().toUpperCase())
      .single()

    setLoading(false)

    if (!data) { setErro('Código não encontrado.'); return }
    if (data.evento !== evento && data.evento !== 'ambos') {
      setErro('Esse código não é válido para este evento.')
      return
    }
    setConvidado(data)
  }

  async function confirmar() {
    if (!convidado) return
    setLoading(true)

    const { error } = await supabase
      .from('confirmacoes')
      .insert({
        convidado_id: convidado.id,
        evento,
        acompanhantes,
        nomes_acompanhantes: nomesAcompanhantes.filter(n => n.trim()),
        observacao,
      })

    setLoading(false)
    if (error) { setErro('Erro ao confirmar. Tente novamente.'); return }
    setSucesso(true)
  }

  if (sucesso) {
    return (
      <div className="min-h-screen bg-[#FFFDF7] flex items-center justify-center px-6">
        <div className="text-center flex flex-col gap-4 max-w-sm">
          <p className="text-5xl">🎉</p>
          <h2 className="font-seasons text-4xl text-[#2D2D2D]">Confirmado!</h2>
          <p className="font-josefin text-sm text-[#2D2D2D] leading-relaxed">
            {convidado.nome}, sua presença no <strong>{info.titulo}</strong> está confirmada. Mal podemos esperar pra te ver lá!
          </p>
          <a href="/" className="font-josefin text-xs uppercase tracking-widest text-[#F2502C] border-b border-[#F2502C] pb-1 mx-auto mt-4">
            Voltar ao site
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen px-6 py-20 flex flex-col items-center justify-center" style={{ backgroundColor: info.cor + '33' }}>
      <div className="w-full max-w-md flex flex-col gap-8">

        <div className="text-center">
          <a href="/" className="font-josefin text-xs uppercase tracking-widest text-[#2D2D2D] opacity-40 hover:opacity-70 transition-opacity">
            ← Lucas & Ana Luiza
          </a>
          <h1 className="font-seasons text-5xl text-[#2D2D2D] mt-4">{info.titulo}</h1>
          <p className="font-josefin text-sm text-[#2D2D2D] opacity-60 mt-2">{info.data} · {info.local}</p>
        </div>

        {!convidado ? (
          <div className="flex flex-col gap-4">
            <p className="font-josefin text-sm text-[#2D2D2D] text-center">
              Digite o código que você recebeu pelo WhatsApp:
            </p>
            <input
              type="text"
              value={codigo}
              onChange={e => setCodigo(e.target.value)}
              placeholder="Ex: ANA001"
              className="font-josefin text-sm border border-[#CAD17A] rounded-xl px-4 py-3 bg-white outline-none focus:border-[#F2502C] text-center uppercase tracking-widest"
            />
            {erro && <p className="font-josefin text-xs text-[#C42311] text-center">{erro}</p>}
            <button
              onClick={validarCodigo}
              disabled={loading || !codigo.trim()}
              className="font-josefin text-xs uppercase tracking-widest text-white py-4 rounded-full transition-colors disabled:opacity-40"
              style={{ backgroundColor: info.corBotao }}
            >
              {loading ? 'Verificando...' : 'Continuar'}
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            <p className="font-josefin text-sm text-[#2D2D2D] text-center">
              Olá, <strong>{convidado.nome}</strong>! 👋
            </p>

            {/* Quantidade acompanhantes */}
            <div className="flex flex-col gap-2">
              <label className="font-josefin text-xs uppercase tracking-widest text-[#2D2D2D]">
                Quantos acompanhantes?
              </label>
              <div className="flex items-center gap-4 justify-center">
                <button
                  onClick={() => atualizarQtd(acompanhantes - 1)}
                  className="w-10 h-10 rounded-full border border-[#CAD17A] font-josefin text-lg hover:border-[#F2502C] transition-colors"
                >−</button>
                <span className="font-seasons text-3xl text-[#2D2D2D] w-8 text-center">{acompanhantes}</span>
                <button
                  onClick={() => atualizarQtd(acompanhantes + 1)}
                  className="w-10 h-10 rounded-full border border-[#CAD17A] font-josefin text-lg hover:border-[#F2502C] transition-colors"
                >+</button>
              </div>
            </div>

            {/* Nomes dos acompanhantes */}
            {acompanhantes > 0 && (
              <div className="flex flex-col gap-3">
                <label className="font-josefin text-xs uppercase tracking-widest text-[#2D2D2D]">
                  Nome dos acompanhantes:
                </label>
                {nomesAcompanhantes.map((nome, i) => (
                  <input
                    key={i}
                    type="text"
                    value={nome}
                    onChange={e => atualizarNome(i, e.target.value)}
                    placeholder={`Acompanhante ${i + 1}`}
                    className="font-josefin text-sm border border-[#CAD17A] rounded-xl px-4 py-3 bg-white outline-none focus:border-[#F2502C]"
                  />
                ))}
              </div>
            )}

            {/* Observação */}
            <div className="flex flex-col gap-2">
              <label className="font-josefin text-xs uppercase tracking-widest text-[#2D2D2D]">
                Alguma observação?
              </label>
              <textarea
                value={observacao}
                onChange={e => setObservacao(e.target.value)}
                placeholder="Restrição alimentar, dúvida..."
                rows={3}
                className="font-josefin text-sm border border-[#CAD17A] rounded-xl px-4 py-3 bg-white outline-none focus:border-[#F2502C] resize-none"
              />
            </div>

            {erro && <p className="font-josefin text-xs text-[#C42311] text-center">{erro}</p>}

            <button
              onClick={confirmar}
              disabled={loading}
              className="font-josefin text-xs uppercase tracking-widest text-white py-4 rounded-full transition-colors disabled:opacity-40"
              style={{ backgroundColor: info.corBotao }}
            >
              {loading ? 'Confirmando...' : 'Confirmar Presença 🎉'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}