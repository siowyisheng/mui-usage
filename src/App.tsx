/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { Typography, AppBar, Toolbar } from '@material-ui/core'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import { theme as customTheme } from './theme'
import LandingView from './Views/LandingView'
import NestedSelectorsView from './Views/NestedSelectorsView'

const App: React.FC = () => {
  // const [shade, setShade] = useState<keyof Color>(500)
  // const possibleNewShades = possibleShades.filter(_shade => _shade !== shade)
  // useEffect(() => {
  //   const interval = setInterval(
  //     () => setShade(sample(possibleNewShades) as keyof Color),
  //     500
  //   )
  //   return () => clearInterval(interval)
  // })
  // const color = red[shade]
  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <AppBar position='fixed' color='primary'>
          <Toolbar>
            <Link to='/' css={{ color: 'inherit', textDecoration: 'none' }}>
              <Typography variant='h6'>Material UI Usage</Typography>
            </Link>
          </Toolbar>
        </AppBar>
        <Route path='/' exact component={LandingView} />
        <Route path='/nested-selectors/' component={NestedSelectorsView} />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
