import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000'
    },
    text: {
      primary: '#000',
      secondary: '#fff'
    }
  },
  typography: {
    fontFamily: 'Roboto',
    caption: {
      fontFamily: 'Roboto Mono',
      fontSize: 16,
      color: '#f44336'
    },
    h6: {
      fontFamily: 'Merriweather Sans',
      fontSize: '12px'
    }
  }
})
