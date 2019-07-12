/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { Paper, Theme, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: 24,
    maxWidth: 600,
    marginTop: 16
  }
}))

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
        <Typography color='primary' variant='h3' gutterBottom={true}>
          Material UI Overview
        </Typography>
        <Typography variant='body1'>
          Material UI is actually made of 3 packages:
          <br /> -
          <Typography variant='caption' component='span'>
            {` @material-ui/core `}
          </Typography>
          gives us beautiful components with sensible defaults.
          <br /> -
          <Typography variant='caption' component='span'>
            {` @material-ui/system `}
          </Typography>
          lets us use theme styles easily in components.
          <br /> -
          <Typography variant='caption' component='span'>
            {` @material-ui/styles `}
          </Typography>
          lets us apply custom styles to components.
        </Typography>
      </Paper>
    </div>
  )
}
export default OverviewView
