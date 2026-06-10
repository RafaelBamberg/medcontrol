import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { useState } from 'react'
import { medicamentoCatalogo, normalizar } from '../../data/catalog'
import { Footer } from '../Footer/Footer'
import * as A from './styles'
import type { Allergy, Screen } from '../../types/types'

type AllergyScreenProps = Screen & {
  alergias: Allergy[]
  setAlergias: React.Dispatch<React.SetStateAction<Allergy[]>>
}

export const AllergyScreen = ({ page, setPage, alergias, setAlergias }: AllergyScreenProps) => {
  const [nome, setNome] = useState('')
  const [error, setError] = useState('')

  const handleAdd = () => {
    const value = nome.trim()
    setError('')

    if (!value) {
      setError('Informe um composto ou medicamento.')
      return
    }

    if (alergias.some((alergia) => normalizar(alergia.nome) === normalizar(value))) {
      setError('Essa alergia já está cadastrada.')
      return
    }

    setAlergias((current) => [{ nome: value }, ...current])
    setNome('')
  }

  const handleRemove = (nomeAlergia: string) => {
    setAlergias((current) => current.filter((alergia) => normalizar(alergia.nome) !== normalizar(nomeAlergia)))
  }

  return (
    <A.Page>
      <A.Content>
        <A.Header>
          <KeyboardBackspaceIcon onClick={() => setPage(4)} sx={{ width: 26, height: 28, cursor: 'pointer' }} />
          <A.Text>ALERGIAS</A.Text>
        </A.Header>

        <A.Form>
          <A.Label>Composto ou medicamento</A.Label>
          <A.Input
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') handleAdd()
            }}
            placeholder="Ex: Dipirona"
          />
          {error && <A.Error>{error}</A.Error>}
          <A.Button type="button" onClick={handleAdd}>Adicionar alergia</A.Button>
        </A.Form>

        <A.List>
          {alergias.map((alergia) => {
            const item = medicamentoCatalogo(alergia.nome)

            return (
              <A.Item key={alergia.nome}>
                {item ? <A.Img src={item.imagem} alt={item.nome} /> : <A.Fallback>!</A.Fallback>}
                <A.Info>
                  <A.Name>{alergia.nome}</A.Name>
                  <A.Detail>{item ? 'Medicamento do catálogo' : 'Composto cadastrado'}</A.Detail>
                </A.Info>
                <A.RemoveButton type="button" onClick={() => handleRemove(alergia.nome)} aria-label={`Remover ${alergia.nome}`}>
                  <DeleteOutlineIcon sx={{ width: 20, height: 20 }} />
                </A.RemoveButton>
              </A.Item>
            )
          })}
        </A.List>
      </A.Content>
      <Footer page={page} setPage={setPage} />
    </A.Page>
  )
}
