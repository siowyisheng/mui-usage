/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import red from '@material-ui/core/colors/red'
import sample from 'lodash/sample'
import {
  Button as MuiButton,
  Color,
  Paper,
  Theme,
  Typography
} from '@material-ui/core'
import Button from './Button'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NestedSelector from './NestedSelector'
import { StylesFromProps } from './StylesFromProps'
import { ThemeProvider, makeStyles } from '@material-ui/styles'
import { theme } from './theme'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: 16,
    maxWidth: 600
  }
}))

const possibleShades = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
  'A100',
  'A200',
  'A400',
  'A700'
]

const App: React.FC = () => {
  const [shade, setShade] = useState<keyof Color>(500)
  const possibleNewShades = possibleShades.filter(_shade => _shade !== shade)
  useEffect(() => {
    const interval = setInterval(
      () => setShade(sample(possibleNewShades) as keyof Color),
      500
    )
    return () => clearInterval(interval)
  })
  const color = red[shade]
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <header
          css={{
            backgroundColor: color,
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 'calc(10px + 2vmin)',
            color: 'white'
          }}
        >
          <img src={logo} className='App-logo' alt='logo' />
          <Paper classes={classes}>
            <Typography>
              First, we create a theme with createMuiTheme.
            </Typography>
            <Typography>
              The theme allows us to configure Mui components globally. We can:
            </Typography>
            <Typography>- override default styles.</Typography>
            <Typography>- provide default props.</Typography>
            <Typography>
              - change primary, secondary and error colors.
            </Typography>
            <Typography>- change fonts.</Typography>
            <Typography>
              We pass our created theme to ThemeProvider, which we will wrap
              around the entire app. When we want to override styling, we can
              makeStyles to create a hook, useStyles, which when run, returns
              `classes` which we can pass into the customized components.
            </Typography>
          </Paper>
          <Button />
          <MuiButton color='primary' variant='contained'>
            Just a button
          </MuiButton>
          <NestedSelector css={{ marginTop: 8 }} />
          <StylesFromProps css={{ marginTop: 8 }} />
        </header>
      </div>
    </ThemeProvider>
  )
}

export default App
