/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useEffect, useState } from 'react'
import {
  Button as MuiButton,
  Color,
  Paper,
  Theme,
  Typography,
  Card,
  CardContent,
  CardActions,
  useTheme,
  AppBar,
  Toolbar,
  Link
} from '@material-ui/core'
import Button from '../Button'
import {
  BrowserRouter as Router,
  Route,
  Link as RouterLink
} from 'react-router-dom'
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
    title: 'Overview',
    description: 'Understanding Material UI from a broader perspective.',
    path: '/mui-usage/overview/'
  },
  {
    title: 'Nested Selectors',
    description: 'One easy way to style elements within MuiComponents.',
    path: '/mui-usage/nested-selectors/'
  },
  {
    title: 'Styles from props',
    description: 'Create dynamic styles using props.',
    path: '/mui-usage/styles-from-props/'
  }
]

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
        fontSize: 'calc(10px + 2vmin)'
      }}
    >
      <div css={{ display: 'flex', flexWrap: 'wrap', marginTop: 64 }}>
        {cards.map(card => (
          <Card className={classes.card}>
            <CardContent>
              <Typography color='primary' gutterBottom>
                {card.title}
              </Typography>
              <Typography variant='body2' component='p'>
                {card.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Link
                component={RouterLink}
                to={card.path}
                css={{ textDecoration: 'none' }}
              >
                <MuiButton color='primary' size='small'>
                  Learn
                </MuiButton>
              </Link>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  )
}
export default LandingView
