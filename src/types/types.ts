export type PageSetter = React.Dispatch<React.SetStateAction<number>>

export interface Screen {
  page?: number
  setPage: PageSetter
}

export interface Medication {
  nome: string
  dose: string
  horario: string
  alarme: boolean
}

export interface Allergy {
  nome: string
}

export interface Leaflet {
  indicacao: string
  acao: string
  uso: string
  efeitos: string
  contraindicacao: string
  cuidados: string
}

export interface CatalogMedication {
  nome: string
  dosePadrao: string
  imagem: string
  bula: Leaflet
}

export interface Interaction {
  medicamentos: string[]
  risco: 'baixo' | 'moderado' | 'alto'
  mensagem: string
}
