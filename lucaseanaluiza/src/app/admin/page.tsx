'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

const SENHA_ADMIN = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123'

interface Confirmacao {
  id: string
  evento: string
  acompanhantes: number
  observacao: string
  confirmado_em: string
  convidados: { nome: string; telefone: string }
}

interface Presente {
  id: string
  nome: string
  categoria: string
  tipo: string
  disponivel: boolean
}

export default function Admin() {
  const [autenticado, setAutenticado] = useState(false)
  const [senha, setSenha] = useState('')
  const [erroSenha, setErroSenha] = useState(false)
  const [aba, setAba] = useState<'cha' | 'casamento' | 'presentes'>('cha')
  const [confirmacoes, setConfirmacoes] = useState<Confirmacao[]>([])
  const [presentes, setPresentes] = useState<Presente[]>([])
  const [loading, setLoading] = useState(false)

  function login() {
    if (senha === SENHA_ADMIN) {
      setAutenticado(true)
      carregar()
    } else {
      setErroSenha(true)
    }
  }

  async function carregar() {
    setLoading(true)

    const { data: conf } = await supabase
      .from('confirmacoes')
      .select('*, convidados(nome, telefone)')
      .order('confirmado_em', { ascending: false })

    const { data: pres } = await supabase
      .from('presentes')
      .select('*')
      .order('categoria')

    if (conf) setConfirmacoes(conf)
    if (pres) setPresentes(pres)
    setLoading(false)
  }

  const confCha = confirmacoes.filter(c => c.evento === 'cha')
  const confCasamento = confirmacoes.filter(c => c.evento === 'casamento')
  const presentesEscolhidos = presentes.filter(p => !p.disponivel)
  const totalPessoasCha = confCha.reduce((acc, c) => acc + 1 + c.acompanhantes, 0)
  const totalPessoasCasamento = confCasamento.reduce((acc, c) => acc + 1 + c.acompanhantes, 0)

  if (!autenticado) {
    return (
      <div className="min-h-screen bg-[#FFFDF7] flex items-center justify-center px-6">
        <div className="w-full max-w-sm flex flex-col gap-4">
          <h1 className="font-seasons text-4xl text-[#2D2D2D] text-center">Admin</h1>
          <input
            type="password"
            value={senha}
            onChange={e => { setSenha(e.target.value); setErroSenha(false) }}
            onKeyDown={e => e.key === 'Enter' && login()}
            placeholder="Senha"
            className="font-josefin text-sm border border-[#CAD17A] rounded-xl px-4 py-3 bg-white outline-none focus:border-[#F2502C] text-center"
          />
          {erroSenha && (
            <p className="font-josefin text-xs text-[#C42311] text-center">Senha incorreta.</p>
          )}
          <button
            onClick={login}
            className="font-josefin text-xs uppercase tracking-widest bg-[#F2502C] text-white py-4 rounded-full hover:bg-[#C42311] transition-colors"
          >
            Entrar
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FFFDF7] px-6 py-12">
      <div className="max-w-3xl mx-auto flex flex-col gap-8">

        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="font-seasons text-4xl text-[#2D2D2D]">Painel Admin</h1>
          <a href="/" className="font-josefin text-xs uppercase tracking-widest text-[#2D2D2D] opacity-40 hover:opacity-70">
            ← Site
          </a>
        </div>

        {/* Resumo */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Confirmados Chá', valor: confCha.length, cor: '#FCF59B' },
            { label: 'Pessoas no Chá', valor: totalPessoasCha, cor: '#F9A852' },
            { label: 'Confirmados Casamento', valor: confCasamento.length, cor: '#CAD17A' },
            { label: 'Pessoas no Casamento', valor: totalPessoasCasamento, cor: '#91C494' },
          ].map(({ label, valor, cor }) => (
            <div key={label} className="rounded-2xl p-5 flex flex-col gap-1" style={{ backgroundColor: cor + '55' }}>
              <span className="font-seasons text-4xl text-[#2D2D2D]">{valor}</span>
              <span className="font-josefin text-xs uppercase tracking-widest text-[#2D2D2D] opacity-60">{label}</span>
            </div>
          ))}
        </div>

        {/* Abas */}
        <div className="flex gap-2 flex-wrap">
          {[
            { key: 'cha', label: 'Chá de Panela' },
            { key: 'casamento', label: 'Casamento' },
            { key: 'presentes', label: 'Presentes' },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setAba(key as any)}
              className={`font-josefin text-xs uppercase tracking-widest px-5 py-2 rounded-full border transition-colors ${
                aba === key
                  ? 'bg-[#F2502C] text-white border-[#F2502C]'
                  : 'bg-transparent text-[#2D2D2D] border-[#CAD17A] hover:border-[#F2502C]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Conteúdo */}
        {loading ? (
          <p className="font-josefin text-sm text-center opacity-40">Carregando...</p>
        ) : (
          <>
            {(aba === 'cha' || aba === 'casamento') && (
              <div className="flex flex-col gap-3">
                {(aba === 'cha' ? confCha : confCasamento).length === 0 ? (
                  <p className="font-josefin text-sm text-center opacity-40">Nenhuma confirmação ainda.</p>
                ) : (
                  (aba === 'cha' ? confCha : confCasamento).map(c => (
                    <div key={c.id} className="rounded-2xl border border-[#F9CDBB] p-5 flex flex-col gap-1">
                      <p className="font-josefin text-sm font-semibold text-[#2D2D2D]">
                        {c.convidados?.nome}
                      </p>
                      <p className="font-josefin text-xs text-[#2D2D2D] opacity-60">
                        {c.convidados?.telefone} · {c.acompanhantes} acompanhante{c.acompanhantes !== 1 ? 's' : ''}
                      </p>
                      {c.observacao && (
                        <p className="font-josefin text-xs text-[#F2502C] mt-1">"{c.observacao}"</p>
                      )}
                      <p className="font-josefin text-xs text-[#2D2D2D] opacity-30 mt-1">
                        {new Date(c.confirmado_em).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                  ))
                )}
              </div>
            )}

            {aba === 'presentes' && (
              <div className="flex flex-col gap-3">
                {presentesEscolhidos.length === 0 ? (
                  <p className="font-josefin text-sm text-center opacity-40">Nenhum presente escolhido ainda.</p>
                ) : (
                  presentesEscolhidos.map(p => (
                    <div key={p.id} className="rounded-2xl border border-[#CAD17A] p-5 flex items-center justify-between gap-3">
                      <div>
                        <p className="font-josefin text-sm font-semibold text-[#2D2D2D]">{p.nome}</p>
                        <p className="font-josefin text-xs text-[#2D2D2D] opacity-50">{p.categoria}</p>
                      </div>
                      <span className="font-josefin text-xs uppercase tracking-widest text-[#91C494]">escolhido</span>
                    </div>
                  ))
                )}
              </div>
            )}
          </>
        )}

      </div>
    </div>
  )
}