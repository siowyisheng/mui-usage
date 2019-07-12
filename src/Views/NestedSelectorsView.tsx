/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { Paper, Theme, Typography, useTheme } from '@material-ui/core'
import NestedSelector from '../NestedSelector'
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

const NestedSelectorsView: React.FC = () => {
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
export default NestedSelectorsView
