/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useEffect, useState } from 'react'
import red from '@material-ui/core/colors/red'
import sample from 'lodash/sample'
import {
  Button as MuiButton,
  Color,
  Paper,
  Theme,
  Typography,
  Card,
  CardContent,
  CardActions,
  useTheme
} from '@material-ui/core'
import Button from './Button'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NestedSelector from './NestedSelector'
import { StylesFromProps } from './StylesFromProps'
import { ThemeProvider, makeStyles } from '@material-ui/styles'
import { theme as customTheme } from './theme'
import LandingView from './LandingView'

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
    <ThemeProvider theme={customTheme}>
      <LandingView />
    </ThemeProvider>
  )
}

export default App
