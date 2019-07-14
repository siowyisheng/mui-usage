/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import {
  Button as MuiButton,
  Theme,
  Typography,
  Card,
  CardContent,
  CardActions,
  Link,
  Paper,
  Button,
  Box,
  Container
} from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: 32,
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
    title: 'Box',
    description: 'A super-convenient div element.',
    path: '/mui-usage/box/'
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

const LandingView: React.FC = () => {
  const classes = useStyles()
  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: 32,
        paddingBottom: 32
      }}
    >
      <Paper className={classes.root}>
        <Typography variant='h2' gutterBottom>
          Let's Learn
        </Typography>
        <Typography variant='body1' gutterBottom>
          {`I wrote this because there was a better way to learn the usage of
          Material UI than through `}
          <Link href='https://material-ui.com/'>the docs</Link>.<br />
          <br />
          {`You can also `}
          <Link href='https://github.com/siowyisheng/mui-usage/'>
            see my source code
          </Link>
          {` for this site.`}
        </Typography>
        <Box marginTop={3} display='flex' justifyContent='center'>
          <Link component={RouterLink} to='/mui-usage/overview/'>
            <Button color='primary' variant='contained'>
              Start
            </Button>
          </Link>
        </Box>
      </Paper>
      <div css={{ display: 'flex', flexWrap: 'wrap' }}>
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
