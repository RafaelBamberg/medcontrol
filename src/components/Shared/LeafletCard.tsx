import type { CatalogMedication } from '../../types/types'
import * as S from './styles'

type LeafletCardProps = {
  item: CatalogMedication
  complete?: boolean
}

export const LeafletCard = ({ item, complete = false }: LeafletCardProps) => {
  return (
    <S.LeafletCard>
      <S.LeafletHeader>
        <S.LeafletImage src={item.imagem} alt={item.nome} />
      </S.LeafletHeader>
      <S.LeafletInfo>
        <S.LeafletText><strong>Indicação:</strong> {item.bula.indicacao}</S.LeafletText>
        <S.LeafletText><strong>Ação:</strong> {item.bula.acao}</S.LeafletText>
        <S.LeafletText><strong>Uso:</strong> {item.bula.uso}</S.LeafletText>
        {complete && <S.LeafletText><strong>Efeitos comuns:</strong> {item.bula.efeitos}</S.LeafletText>}
        {complete && <S.LeafletText><strong>Contraindicação:</strong> {item.bula.contraindicacao}</S.LeafletText>}
        <S.LeafletText><strong>Cuidados:</strong> {item.bula.cuidados}</S.LeafletText>
      </S.LeafletInfo>
    </S.LeafletCard>
  )
}
