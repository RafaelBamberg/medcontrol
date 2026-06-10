import { Footer } from '../Footer/Footer'
import { horarioComEmoji, medicamentoCatalogo } from '../../data/catalog'
import * as M from './styles'
import type { Interaction, Medication, Screen } from '../../types/types'

type MedicationListProps = Screen & {
  medicamentos: Medication[]
  interacoes: Interaction[]
  status: string
}

export const MedicationList = ({ page, setPage, medicamentos, interacoes, status }: MedicationListProps) => {
  return (
    <M.Page>
      <M.Header>
        <M.Text>MEDICAMENTOS</M.Text>
      </M.Header>

      <M.Summary>
        <strong>{medicamentos.length} cadastrados</strong>
        <span>{status}</span>
      </M.Summary>

      {interacoes.map((interacao) => (
        <M.Alert key={interacao.mensagem}>
          <strong>AVISO DE INTERAÇÃO MEDICAMENTOSA</strong>
          <span>{interacao.mensagem}</span>
          <small>{interacao.medicamentos.join(' + ')}</small>
        </M.Alert>
      ))}

      <M.List>
        {medicamentos.length === 0 ? (
          <M.Empty>Nenhum medicamento cadastrado.</M.Empty>
        ) : (
          medicamentos.map((medicamento, index) => {
            const item = medicamentoCatalogo(medicamento.nome)

            return (
              <M.Item key={`${medicamento.nome}-${medicamento.horario}-${index}`}>
                {item ? <M.Img src={item.imagem} /> : <M.Fallback>Rx</M.Fallback>}
                <M.Texts>
                  <M.Name>{medicamento.nome}</M.Name>
                  <M.Detail>Dose: {medicamento.dose}</M.Detail>
                  <M.Time>{medicamento.horario.split('/').map((hour) => horarioComEmoji(hour.trim())).join(' / ')}</M.Time>
                  {medicamento.alarme && <M.Alarm>Alarme ativo</M.Alarm>}
                </M.Texts>
              </M.Item>
            )
          })
        )}
      </M.List>

      <M.Button onClick={() => setPage(5)}>Adicionar Medicamento</M.Button>
      <Footer page={page} setPage={setPage} />
    </M.Page>
  )
}
