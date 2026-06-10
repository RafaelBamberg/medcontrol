import type { CatalogMedication, Interaction, Medication } from '../types/types'

export const catalogo: CatalogMedication[] = [
  {
    nome: 'Losartana',
    dosePadrao: '50mg',
    imagem: '/LOSARTANA.png',
    bula: {
      indicacao: 'tratamento da pressão alta e proteção dos rins em alguns pacientes diabéticos.',
      acao: 'relaxa os vasos sanguíneos, facilitando a circulação do sangue e reduzindo a pressão arterial.',
      uso: 'via oral, conforme prescrição médica.',
      efeitos: 'tontura, dor de cabeça e cansaço.',
      contraindicacao: 'alergia ao medicamento e gravidez.',
      cuidados: 'acompanhar a pressão arterial e seguir a orientação médica.',
    },
  },
  {
    nome: 'Metformina',
    dosePadrao: '500mg',
    imagem: '/METFORMINA.png',
    bula: {
      indicacao: 'tratamento do diabetes tipo 2.',
      acao: 'reduz a produção de glicose pelo fígado e melhora a ação da insulina.',
      uso: 'via oral, conforme prescrição médica.',
      efeitos: 'náuseas, diarreia, dor abdominal e perda de apetite.',
      contraindicacao: 'insuficiência renal grave e alergia ao medicamento.',
      cuidados: 'tomar conforme orientação médica e manter acompanhamento dos níveis de glicose.',
    },
  },
  {
    nome: 'Ibuprofeno',
    dosePadrao: '400mg',
    imagem: '/IBUPROFENO.png',
    bula: {
      indicacao: 'alívio da dor, febre e inflamações.',
      acao: 'reduz a produção de substâncias que causam dor e inflamação.',
      uso: 'via oral, conforme orientação médica ou da bula.',
      efeitos: 'dor de estômago, azia, náuseas e tontura.',
      contraindicacao: 'alergia ao ibuprofeno, úlcera gástrica ativa e insuficiência renal grave.',
      cuidados: 'evitar uso prolongado sem orientação médica e tomar preferencialmente após as refeições.',
    },
  },
  {
    nome: 'Dipirona',
    dosePadrao: '500mg',
    imagem: '/DIPIRONA.png',
    bula: {
      indicacao: 'alívio de dor e febre.',
      acao: 'atua reduzindo a percepção da dor e ajudando no controle da temperatura corporal.',
      uso: 'via oral, conforme prescrição médica ou orientação da bula.',
      efeitos: 'náuseas, queda de pressão, sonolência e reações alérgicas em pessoas sensíveis.',
      contraindicacao: 'alergia à dipirona, histórico de reações graves a analgésicos e algumas doenças hematológicas.',
      cuidados: 'interromper o uso e procurar atendimento se houver sinais de alergia, falta de ar ou manchas na pele.',
    },
  },
]

export const normalizar = (valor: string) =>
  String(valor || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()

export const medicamentoCatalogo = (nome: string) => {
  const alvo = normalizar(nome)
  return catalogo.find((item) => normalizar(item.nome) === alvo)
}

export const regraLocalInteracoes = (medicamentos: Medication[]): Interaction[] => {
  const nomes = medicamentos.map((medicamento) => normalizar(medicamento.nome))

  if (nomes.includes('losartana') && nomes.includes('ibuprofeno')) {
    return [
      {
        medicamentos: ['Losartana', 'Ibuprofeno'],
        risco: 'alto',
        mensagem: 'Losartana e Ibuprofeno podem ter interação medicamentosa. Consulte um profissional de saúde.',
      },
    ]
  }

  return []
}

export const horarioComEmoji = (horario: string) => {
  const match = String(horario).match(/(\d{1,2}):(\d{2})/)
  if (!match) return horario

  const hora = Number(match[1])
  if (hora >= 5 && hora <= 10) return `☀️ ${horario}`
  if (hora >= 11 && hora <= 14) return `🍽️ ${horario}`
  if (hora >= 15 && hora <= 18) return `🌤️ ${horario}`
  return `🌙 ${horario}`
}
