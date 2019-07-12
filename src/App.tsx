/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { Typography, Box } from '@material-ui/core'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import { theme as customTheme } from './theme'
import LandingView from './views/LandingView'
import NestedSelectorsView from './views/NestedSelectorsView'
import logo from './static/mui-small-logo.png'

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
        <Box
          position='fixed'
          display='flex'
          width={1}
          height={64}
          justifyContent='center'
          alignItems='center'
          boxShadow={1}
        >
          <Link
            to='/mui-usage/'
            css={{
              display: 'inherit',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            <img css={{ marginRight: 16 }} alt='logo' src={logo} />
            <Typography variant='h6'>Material UI Usage</Typography>
          </Link>
        </Box>
        <Route path='/mui-usage/' exact component={LandingView} />
        <Route
          path='/mui-usage/nested-selectors/'
          component={NestedSelectorsView}
        />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
