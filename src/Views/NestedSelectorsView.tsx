/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { Paper, Theme, Typography } from '@material-ui/core'
import NestedSelector from '../NestedSelector'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: 24,
    maxWidth: 600,
    marginTop: 16
  }
}))

const NestedSelectorsView: React.FC = () => {
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
          Nested Selectors
        </Typography>
        <Typography variant='body1'>
          {`First, we create a theme with createMuiTheme.`} <br />
          <br />
          {`The theme allows us to configure Mui components globally. We can:`}
          <br />
          {`- override default styles,`} <br />
          {`- provide default props,`} <br />
          {`- change primary, secondary and error colors,`} <br />
          {`- change fonts.`} <br />
          <br />
          {`We pass our created theme to ThemeProvider, which we will wrap around
          the entire app. When we want to override styling, we can makeStyles to
          create a hook, useStyles, which when run, returns \`classes\` which we
          can pass into the customized components.`}
          <br />
        </Typography>
        <Typography variant='caption'>{`for i in range(5):`}</Typography>
      </Paper>
      <NestedSelector css={{ marginTop: 8 }} />
    </div>
  )
}
export default NestedSelectorsView
