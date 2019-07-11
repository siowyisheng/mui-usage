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
import Button from '../Button'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NestedSelector from '../NestedSelector'
import { StylesFromProps } from '../StylesFromProps'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: 16,
    maxWidth: 600
  },
  card: {
    maxWidth: 250,
    margin: theme.spacing(3)
  }
}))

const cards = [
  {
    title: 'Nested Selectors',
    description: 'One easy way to style elements within MuiComponents.'
  },
  {
    title: 'Styles from props',
    description: 'Create dynamic styles using props.'
  }
]

const LandingView: React.FC = () => {
  const classes = useStyles()
  const theme = useTheme()
  console.log(theme)
  return (
    <div
      css={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)'
      }}
    >
      <Typography variant='h1'>Material UI usage</Typography>
      <Paper classes={classes}>
        <Typography variant='body1'>
          {`First, we create a theme with createMuiTheme.`} <br />
          <br />
          {`The theme allows us to configure Mui components globally. We can:`}
          <br />
          {`- override default styles.`} <br />
          {`- provide default props.`} <br />
          {`- change primary, secondary and error colors.`} <br />
          {`- change fonts.`} <br />
          <br />
          {`We pass our created theme to ThemeProvider, which we will wrap around
          the entire app. When we want to override styling, we can makeStyles to
          create a hook, useStyles, which when run, returns \`classes\` which we
          can pass into the customized components.`}
          <br />
        </Typography>
      </Paper>
      <NestedSelector css={{ marginTop: 8 }} />
    </div>
  )
}
export default LandingView
