export type Evento = 'cha' | 'casamento' | 'ambos'
export type TipoPresente = 'item' | 'pix'

export interface Convidado {
  id: string
  nome: string
  telefone?: string
  codigo: string
  evento: Evento
}

export interface Confirmacao {
  id: string
  convidado_id: string
  evento: 'cha' | 'casamento'
  acompanhantes: number
  observacao?: string
}

export interface Presente {
  id: string
  nome: string
  categoria: string
  tipo: TipoPresente
  disponivel: boolean
  escolhido_por?: string
}