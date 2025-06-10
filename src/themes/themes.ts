import { grey } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

export type ThemeOption = 'light' | 'dark'

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: grey[400], contrastText: grey[900] },
    secondary: { main: grey[600], contrastText: grey[900] },
    background: {
      default: grey[100],
      paper: grey[50],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: grey[900],
        },
      },
    },
  },
})

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: grey[700], contrastText: grey[200] },
    secondary: { main: grey[800], contrastText: grey[200] },
  },
})

const themes: Record<ThemeOption, ReturnType<typeof createTheme>> = {
  light: lightTheme,
  dark: darkTheme,
}

export default themes
