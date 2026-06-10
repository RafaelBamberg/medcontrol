import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { useState } from 'react'
import { catalogo, normalizar } from '../../data/catalog'
import { Footer } from '../Footer/Footer'
import { LeafletCard } from '../Shared/LeafletCard'
import * as B from './styles'
import type { CatalogMedication, Screen } from '../../types/types'

type LeafletSearchProps = Screen & {
  onPrepareAdd: (item: CatalogMedication) => void
}

export const LeafletSearch = ({ page, setPage, onPrepareAdd }: LeafletSearchProps) => {
  const [term, setTerm] = useState('')
  const [result, setResult] = useState<CatalogMedication | null>(null)
  const [notFound, setNotFound] = useState(false)

  const handleSearch = () => {
    if (!term.trim()) {
      setResult(null)
      setNotFound(true)
      return
    }

    const found = catalogo.find((item) => normalizar(item.nome).includes(normalizar(term)))
    setResult(found || null)
    setNotFound(!found)
  }

  const handleAdd = () => {
    if (!result) return
    onPrepareAdd(result)
  }

  return (
    <B.Page>
      <B.Content>
        <B.Header>
          <KeyboardBackspaceIcon onClick={() => setPage(4)} sx={{ width: 26, height: 28, cursor: 'pointer' }} />
          <B.Text>BUSCAR BULA</B.Text>
        </B.Header>

        <B.SearchBlock>
          <B.Label>Resumo de bula</B.Label>
          <B.SearchField>
            <B.Input
              value={term}
              onChange={(event) => setTerm(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') handleSearch()
              }}
              placeholder="Digite o nome do medicamento"
            />
            <B.SearchButton onClick={handleSearch}>Buscar</B.SearchButton>
          </B.SearchField>
        </B.SearchBlock>

        <B.Result>
          {!result && !notFound && <B.Empty>Pesquise um medicamento para ver foto da caixa e bula resumida.</B.Empty>}
          {notFound && <B.Error>Medicamento não encontrado no catálogo pré-programado.</B.Error>}
          {result && <LeafletCard item={result} complete />}
        </B.Result>

        <B.Button onClick={handleAdd} disabled={!result}>Adicionar medicamento</B.Button>
      </B.Content>
      <Footer page={page} setPage={setPage} />
    </B.Page>
  )
}
