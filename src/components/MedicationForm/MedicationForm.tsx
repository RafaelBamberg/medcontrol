import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { useEffect, useState } from 'react'
import { catalogo, medicamentoCatalogo, normalizar } from '../../data/catalog'
import { Footer } from '../Footer/Footer'
import { LeafletCard } from '../Shared/LeafletCard'
import * as M from './styles'
import type { Allergy, CatalogMedication, Medication, Screen } from '../../types/types'

type MedicationFormProps = Screen & {
  initialMedication?: CatalogMedication | null
  initialSchedule?: string
  medicamentos: Medication[]
  alergias: Allergy[]
  onAdd: (medicamento: Medication) => void
}

export const MedicationForm = ({ page, setPage, initialMedication, initialSchedule = '', medicamentos, alergias, onAdd }: MedicationFormProps) => {
  const [nome, setNome] = useState('')
  const [dose, setDose] = useState('')
  const [horario, setHorario] = useState('')
  const [alarme, setAlarme] = useState(false)
  const [selected, setSelected] = useState<CatalogMedication | null>(null)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [pendingMedication, setPendingMedication] = useState<Medication | null>(null)
  const [warnings, setWarnings] = useState<string[]>([])

  useEffect(() => {
    if (initialMedication) {
      setNome(initialMedication.nome)
      setDose(initialMedication.dosePadrao)
      setHorario(initialSchedule)
      setAlarme(false)
      setSelected(initialMedication)
    }
  }, [initialMedication, initialSchedule])

  const suggestions = nome.trim()
    ? catalogo.filter((item) => normalizar(item.nome).includes(normalizar(nome))).slice(0, 3)
    : []

  const handleSelect = (item: CatalogMedication) => {
    setNome(item.nome)
    setDose(item.dosePadrao)
    setSelected(item)
  }

  const saveMedication = (medicamento: Medication) => {
    onAdd(medicamento)
    setNome('')
    setDose('')
    setHorario('')
    setAlarme(false)
    setSelected(null)
    setPendingMedication(null)
    setWarnings([])
    setSuccess(true)

    window.setTimeout(() => {
      setSuccess(false)
      setPage(4)
    }, 800)
  }

  const buildWarnings = (medicamento: Medication) => {
    const alertas: string[] = []
    const nomeNormalizado = normalizar(medicamento.nome)
    const alergiaEncontrada = alergias.find((alergia) => normalizar(alergia.nome) === nomeNormalizado)
    const nomesCadastrados = medicamentos.map((item) => normalizar(item.nome))

    if (alergiaEncontrada) {
      alertas.push(`Você possui alergia cadastrada para ${alergiaEncontrada.nome}. Confirme se deseja adicionar mesmo assim.`)
    }

    if (
      (nomeNormalizado === 'ibuprofeno' && nomesCadastrados.includes('losartana')) ||
      (nomeNormalizado === 'losartana' && nomesCadastrados.includes('ibuprofeno'))
    ) {
      alertas.push('Ibuprofeno e Losartana podem ter interação medicamentosa. Confirme se deseja adicionar mesmo assim.')
    }

    return alertas
  }

  const handleSubmit = () => {
    setError('')

    if (!nome.trim() || !dose.trim() || !horario.trim()) {
      setError('Preencha nome, dose e horário.')
      return
    }

    const medicamento = { nome: nome.trim(), dose: dose.trim(), horario: horario.trim(), alarme }
    const alertas = buildWarnings(medicamento)

    if (alertas.length > 0) {
      setPendingMedication(medicamento)
      setWarnings(alertas)
      return
    }

    saveMedication(medicamento)
  }

  const chosen = selected || medicamentoCatalogo(nome)

  return (
    <M.Page>
      <M.Content>
        <M.Header>
          <KeyboardBackspaceIcon onClick={() => setPage(4)} sx={{ width: 26, height: 28, cursor: 'pointer' }} />
          <M.Text>CADASTRO</M.Text>
        </M.Header>

        <M.Form>
          <M.Label>Nome do remédio</M.Label>
          <M.Input value={nome} onChange={(event) => setNome(event.target.value)} placeholder="Ex: Losartana" />
          {suggestions.length > 0 && (
            <M.Suggestions>
              {suggestions.map((item) => (
                <M.Suggestion key={item.nome} type="button" onClick={() => handleSelect(item)}>
                  <img src={item.imagem} alt={item.nome} />
                  <span>{item.nome}</span>
                </M.Suggestion>
              ))}
            </M.Suggestions>
          )}

          <M.Label>Dose</M.Label>
          <M.Input value={dose} onChange={(event) => setDose(event.target.value)} placeholder="Ex: 50mg" />

          <M.Label>Aprazamento de horário</M.Label>
          <M.Input value={horario} onChange={(event) => setHorario(event.target.value)} placeholder="Ex: 08:00 / 12:00 / 20:00" />

          <M.Label>Quer que toque o alarme?</M.Label>
          <M.ToggleGroup>
            <M.ToggleButton type="button" className={alarme ? 'selected' : ''} onClick={() => setAlarme(true)}>Sim</M.ToggleButton>
            <M.ToggleButton type="button" className={!alarme ? 'selected' : ''} onClick={() => setAlarme(false)}>Não</M.ToggleButton>
          </M.ToggleGroup>

          {chosen && (
            <M.Preview>
              <LeafletCard item={chosen} />
            </M.Preview>
          )}

          {error && <M.Error>{error}</M.Error>}
          {success && <M.Success>Medicamento salvo.</M.Success>}
        </M.Form>

        <M.Button onClick={handleSubmit}>Salvar Medicamento</M.Button>
      </M.Content>
      {pendingMedication && (
        <M.ModalOverlay>
          <M.Modal>
            <M.ModalTitle>Atenção antes de salvar</M.ModalTitle>
            {warnings.map((warning) => (
              <M.ModalWarning key={warning}>{warning}</M.ModalWarning>
            ))}
            <M.ModalActions>
              <M.SecondaryButton type="button" onClick={() => {
                setPendingMedication(null)
                setWarnings([])
              }}>
                Cancelar
              </M.SecondaryButton>
              <M.PrimaryButton type="button" onClick={() => saveMedication(pendingMedication)}>
                Confirmar
              </M.PrimaryButton>
            </M.ModalActions>
          </M.Modal>
        </M.ModalOverlay>
      )}
      <Footer page={page} setPage={setPage} />
    </M.Page>
  )
}
