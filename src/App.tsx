import { useState } from 'react'
import { ThemeProvider } from '@mui/material'

import themes, { type ThemeOption } from './themes/themes'
import MainContent from './components/mainContent/MainContent'
import Navbar from './components/navbar/Navbar'
import type { SettingsPanelProps } from './components/navbar/settingsPanel/SettingsPanel'

import './App.css'

export default function App() {
  const [theme, setTheme] = useState<ThemeOption>('light')

  const settingsPanelProps: SettingsPanelProps = {
    colorThemePickerProps: {theme, setTheme}
  }
  
  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <Navbar settingsPanelProps={settingsPanelProps}/>
        <MainContent />
      </ThemeProvider>
    </>
  )
}