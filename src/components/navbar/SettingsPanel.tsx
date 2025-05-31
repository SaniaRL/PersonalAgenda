import { IconButton, Toolbar } from '@mui/material'
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp'
import ColorLensIcon from '@mui/icons-material/ColorLens'

export default function SettingsPanel() {
  return(
    <Toolbar>
      <IconButton>
        <ColorLensIcon color="inherit" sx={{ color: theme => theme.palette.primary.main }}/>
      </IconButton>
      <IconButton>
        <SettingsSharpIcon />
      </IconButton>
    </Toolbar>
  )
}