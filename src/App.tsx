import { useEffect, useState } from 'react'
import { HomeScreen } from './components/HomeScreen/HomeScreen'
import { AllergyScreen } from './components/AllergyScreen/AllergyScreen'
import { LeafletSearch } from './components/LeafletSearch/LeafletSearch'
import { MedicationForm } from './components/MedicationForm/MedicationForm'
import { MedicationList } from './components/MedicationList/MedicationList'
import { ScannerScreen } from './components/ScannerScreen/ScannerScreen'
import { regraLocalInteracoes } from './data/catalog'
import * as A from './AppStyles'
import type { Allergy, CatalogMedication, Interaction, Medication } from './types/types'

function App() {
  const [page, setPage] = useState(0)
  const [medicamentos, setMedicamentos] = useState<Medication[]>([])
  const [alergias, setAlergias] = useState<Allergy[]>([])
  const [interacoes, setInteracoes] = useState<Interaction[]>([])
  const [status, setStatus] = useState('Interações serão avaliadas ao adicionar medicamentos.')
  const [preparedMedication, setPreparedMedication] = useState<CatalogMedication | null>(null)
  const [preparedSchedule, setPreparedSchedule] = useState('')

  useEffect(() => {
    void avaliarInteracoes(medicamentos)
  }, [medicamentos])

  const avaliarInteracoes = (items: Medication[]) => {
    if (items.length < 2) {
      setInteracoes([])
      setStatus('Adicione pelo menos dois medicamentos para avaliar interações.')
      return
    }

    setStatus('Avaliando interações medicamentosas...')
    const fallback = regraLocalInteracoes(items)
    setInteracoes(fallback)
    setStatus(fallback.length ? 'Interações avaliadas por regra pré-programada.' : 'Nenhuma interação medicamentosa encontrada.')
  }

  const handleAdd = (medicamento: Medication) => {
    setMedicamentos((current) => [medicamento, ...current])
    setPreparedMedication(null)
    setPreparedSchedule('')
  }

  const handlePrepareAdd = (item: CatalogMedication) => {
    setPreparedMedication(item)
    setPreparedSchedule('')
    setPage(5)
  }

  return (
    <A.Container>
      <A.Mobile>
        {page === 0 && <HomeScreen page={page} setPage={setPage} />}
        {page === 4 && <MedicationList page={page} setPage={setPage} medicamentos={medicamentos} interacoes={interacoes} status={status} />}
        {page === 5 && (
          <MedicationForm
            page={page}
            setPage={setPage}
            initialMedication={preparedMedication}
            initialSchedule={preparedSchedule}
            medicamentos={medicamentos}
            alergias={alergias}
            onAdd={handleAdd}
          />
        )}
        {page === 6 && <LeafletSearch page={page} setPage={setPage} onPrepareAdd={handlePrepareAdd} />}
        {page === 7 && <ScannerScreen page={page} setPage={setPage} onPrepareAdd={handlePrepareAdd} />}
        {page === 8 && <AllergyScreen page={page} setPage={setPage} alergias={alergias} setAlergias={setAlergias} />}
      </A.Mobile>
    </A.Container>
  )
}

export default App
