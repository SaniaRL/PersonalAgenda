import { IconButton, Toolbar } from '@mui/material'
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp'

import type { ColorThemePickerProps } from './ColorThemePicker'
import ColorThemePicker from './ColorThemePicker'

export interface SettingsPanelProps {
  colorThemePickerProps: ColorThemePickerProps
}

export default function SettingsPanel({colorThemePickerProps}: SettingsPanelProps) {
  return(
    <Toolbar sx={{
      marginTop: {sx: 'auto', md:'10px'}
    }}>
      <ColorThemePicker 
        theme={colorThemePickerProps.theme}
        setTheme={colorThemePickerProps.setTheme}  
      />
      <IconButton>
        <SettingsSharpIcon />
      </IconButton>
    </Toolbar>
  )
}