/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { Paper, Theme, Typography, Box, Button, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Link as RouterLink } from 'react-router-dom'

// add more, like ThemeProvider
// CSSBaseline

const useStyles = makeStyles({
  root: {
    padding: 24,
    maxWidth: 600,
    marginTop: 16
  }
})

const OverviewView: React.FC = () => {
  const classes = useStyles()
  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <Paper classes={classes}>
        <Typography variant='h3' gutterBottom={true}>
          Overview
        </Typography>
        <Typography variant='body1'>
          <Typography variant='caption' component='span'>
            {`@material-ui/core `}
          </Typography>
          {`provides beautiful`}
          <Link href='https://reactjs.org/docs/getting-started.html'>
            {` React `}
          </Link>
          {`components with sensible
          defaults which were made to follow `}
          <Link href='https://material.io/design/'>
            Material Design guidelines
          </Link>
          . <br />
          <br />{' '}
          {`There are components to display data, make inputs and lay these
          out on surfaces. It also provides the useful `}
          <Link href='https://material-ui.com/components/box/'>
            <Typography variant='caption'>{`<Box>`}</Typography>
          </Link>
          {` as an easily styled div element.`}
          <br />
          <br />
          <Typography variant='caption' component='span'>
            {`@material-ui/styles `}
          </Typography>
          lets us style Material UI components with{' '}
          <Link href='https://material-ui.com/styles/basics/#hook-api'>
            custom styles
          </Link>{' '}
          and{' '}
          <Link href='https://material-ui.com/styles/basics/#adapting-based-on-props'>
            styles based on props
          </Link>
          .
          <br />
          <br />
          <Typography variant='caption' component='span'>
            {`@material-ui/system `}
          </Typography>
          {`doesn't need to be installed separately. We get access to it through `}
          <Link href='https://material-ui.com/components/box/'>
            <Typography variant='caption'>{`<Box>`}</Typography>
          </Link>
          {` in`}
          <Typography variant='caption' component='span'>
            {` @material-ui/core `}
          </Typography>
          .
        </Typography>
        <Box marginTop={3}>
          <Link component={RouterLink} to='/box/'>
            <Button color='primary' variant='contained'>
              Next: The Box Component
            </Button>
          </Link>
        </Box>
      </Paper>
    </div>
  )
}
export default OverviewView
