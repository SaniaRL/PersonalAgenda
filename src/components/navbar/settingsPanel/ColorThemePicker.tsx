import React from 'react'
import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material'
import ColorLensIcon from '@mui/icons-material/ColorLens'
import type { ThemeOption } from '../../../themes/themes'
import themes from '../../../themes/themes'
import { Check } from '@mui/icons-material'

const themeOptions = Object.keys(themes) as ThemeOption[]

export interface ColorThemePickerProps {
  theme: ThemeOption,
  setTheme: (theme: ThemeOption) => void
}

export default function ColorThemePicker({theme, setTheme}: ColorThemePickerProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSelect = (option: ThemeOption) => {
    setTheme(option)
    handleClose()
  }

  return(
    <>
      <IconButton
        id='color-theme-picker-button'
        aria-controls={open ? 'color-theme-picker-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <ColorLensIcon />
      </IconButton>
      
      <Menu 
        id='color-theme-picker-menu' 
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        {themeOptions.map(t => 
          <MenuItem key={t} onClick={() => handleSelect(t)}>
            <ListItemIcon>
              {t === theme ? <Check fontSize='small' /> : null}
            </ListItemIcon>
            <ListItemText>{t}</ListItemText>
          </MenuItem>
        )}
      </Menu>
    </>
  )
}