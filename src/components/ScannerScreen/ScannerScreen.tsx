import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner'
import { useState } from 'react'
import { catalogo, normalizar } from '../../data/catalog'
import { Footer } from '../Footer/Footer'
import { LeafletCard } from '../Shared/LeafletCard'
import * as S from './styles'
import type { CatalogMedication, Screen } from '../../types/types'

type ScannerScreenProps = Screen & {
  onPrepareAdd: (item: CatalogMedication) => void
}

export const ScannerScreen = ({ page, setPage, onPrepareAdd }: ScannerScreenProps) => {
  const [texto, setTexto] = useState('')
  const [result, setResult] = useState<CatalogMedication | null>(null)
  const [error, setError] = useState('')

  const handleScan = () => {
    const value = texto.trim()
    setError('')

    if (!value) {
      setResult(null)
      setError('Digite ou cole o nome de um medicamento ou trecho da receita.')
      return
    }

    const found = catalogo.find((item) => normalizar(value).includes(normalizar(item.nome)) || normalizar(item.nome).includes(normalizar(value)))
    setResult(found || null)

    if (!found) {
      setError('Nenhum medicamento do catálogo foi identificado no texto informado.')
    }
  }

  const handleAdd = () => {
    if (!result) return
    onPrepareAdd(result)
  }

  return (
    <S.Page>
      <S.Content>
        <S.Header>
          <KeyboardBackspaceIcon onClick={() => setPage(4)} sx={{ width: 26, height: 28, cursor: 'pointer' }} />
          <S.Text>SCANNER</S.Text>
        </S.Header>

        <S.ScannerBox>
          <S.ScanFrame>
            <DocumentScannerIcon sx={{ width: 52, height: 52 }} />
            <S.ScanLine />
          </S.ScanFrame>
          <S.ScannerLabel>Medicamento ou receita</S.ScannerLabel>
          <S.TextArea
            value={texto}
            onChange={(event) => setTexto(event.target.value)}
            placeholder="Ex: Receita: Dipirona 500mg de 8/8h"
          />
          <S.ActionRow>
            <S.SecondaryButton type="button" onClick={() => {
              setTexto('')
              setResult(null)
              setError('')
            }}>
              Limpar
            </S.SecondaryButton>
            <S.PrimaryButton type="button" onClick={handleScan}>Scanner</S.PrimaryButton>
          </S.ActionRow>
        </S.ScannerBox>

        <S.Result>
          {error && <S.Error>{error}</S.Error>}
          {!error && !result && <S.Empty>O resultado identificado aparecerá aqui.</S.Empty>}
          {result && <LeafletCard item={result} complete />}
        </S.Result>

        <S.Button type="button" onClick={handleAdd} disabled={!result}>Adicionar ao cadastro</S.Button>
      </S.Content>
      <Footer page={page} setPage={setPage} />
    </S.Page>
  )
}
