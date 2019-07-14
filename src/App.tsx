/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useState } from 'react'
import {
  Box,
  Container,
  makeStyles,
  Theme,
  CssBaseline,
  AppBar,
  Toolbar,
  Hidden,
  IconButton,
  Typography,
  Link
} from '@material-ui/core'
import { BrowserRouter, Route, Link as RouterLink } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import { theme as customTheme } from './theme'
import LandingView from './views/LandingView'
import OverviewView from './views/OverviewView'
import NestedSelectorsView from './views/NestedSelectorsView'
import BoxView from './views/BoxView'
import { allPages } from './pages'
import Nav from './Nav'
import MenuIcon from '@material-ui/icons/Menu'

const drawerWidth = 240
const useStyles = makeStyles((theme: Theme) => ({
  toolbar: {
    ...theme.mixins.toolbar,
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1, 3)
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  title: {
    flexGrow: 1,
    fontSize: 18
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    marginTop: theme.mixins.toolbar.minHeight,
    '@media (min-width:0px) and (orientation: landscape)': {
      marginTop: 48
    },
    '@media (min-width:600px)': {
      marginTop: 64
    }
  }
}))

const App: React.FC = () => {
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <Box display='flex'>
          <AppBar position='fixed' className={classes.appBar}>
            <Toolbar>
              <IconButton
                color='inherit'
                aria-label='Open drawer'
                edge='start'
                onClick={() => setMobileOpen(!mobileOpen)}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <Link
                component={RouterLink}
                to='/mui-usage/'
                css={{
                  color: 'inherit',
                  display: 'inherit',
                  alignItems: 'center'
                }}
              >
                <Typography variant='h6' className={classes.title}>
                  Material UI Usage
                </Typography>
              </Link>
            </Toolbar>
          </AppBar>
          <Nav
            mobileOpen={mobileOpen}
            setMobileOpen={(val: boolean) => setMobileOpen(val)}
          />
          <div className={classes.content}>
            {Object.entries(allPages).map(page => (
              <Route path={page[1].path} exact component={page[1].component} />
            ))}
          </div>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
