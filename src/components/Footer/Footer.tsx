import HomeIcon from '@mui/icons-material/Home'
import MedicationIcon from '@mui/icons-material/Medication'
import SearchIcon from '@mui/icons-material/Search'
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner'
import WarningAmberIcon from '@mui/icons-material/WarningAmber'
import * as F from './styles'
import type { Screen } from '../../types/types'

export const Footer = (props: Screen) => {
  const menu = [
    { icon: <HomeIcon sx={{ width: 22, height: 22 }} />, text: 'Meds', pos: [4] },
    { icon: <MedicationIcon sx={{ width: 22, height: 22 }} />, text: 'Adicionar', pos: [5] },
    { icon: <SearchIcon sx={{ width: 22, height: 22 }} />, text: 'Bula', pos: [6] },
    { icon: <DocumentScannerIcon sx={{ width: 22, height: 22 }} />, text: 'Scanner', pos: [7] },
    { icon: <WarningAmberIcon sx={{ width: 22, height: 22 }} />, text: 'Alergias', pos: [8] },
  ]

  return (
    <F.Footer>
      {menu.map((menuItem, index) => (
        <F.MenuItem
          className={index === 0 ? 'start' : index === menu.length - 1 ? 'end' : ''}
          key={menuItem.text}
          onClick={() => props.setPage(menuItem.pos[0])}
        >
          <F.MenuIcon className={menuItem.pos.includes(props.page!) ? 'selected' : ''}>{menuItem.icon}</F.MenuIcon>
          <F.MenuText className={menuItem.pos.includes(props.page!) ? 'selected' : ''}>{menuItem.text}</F.MenuText>
        </F.MenuItem>
      ))}
    </F.Footer>
  )
}
