/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import {
  Paper,
  Theme,
  Typography as T,
  Box,
  Button,
  Link,
  Grid
} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/styles'
import { Link as RouterLink } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(3),
    maxWidth: 600,
    marginTop: theme.spacing(2)
  }
}))

const BoxView: React.FC = () => {
  const classes = useStyles()
  const theme = useTheme()
  console.log(theme)
  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <Link href='https://material-ui.com/components/box/'>
        <Box
          component='p'
          m={0}
          marginBottom={2}
          fontFamily='caption.fontFamily'
          fontSize='h3.fontSize'
        >
          {`<Box>`}
        </Box>
      </Link>
      <T variant='body1'>
        A general-purpose div element that is easily styled. <br />
        <br />
        It can take some common styles as props.
        <br />
        <br />
        <Grid container spacing={2}>
          {[
            `width={300}`,
            `display='flex'`,
            `color='pink'`,
            `justifyContent='center'`,
            `position='relative'`
          ].map(example => (
            <Grid item xs={12} md={6}>
              <Box display='flex' justifyContent='center'>
                <T variant='caption'>{example}</T>
              </Box>
            </Grid>
          ))}
        </Grid>
        <br /> But more interestingly, it can take simpler values for some
        styles.
        <br />
        <br />
        <Grid container spacing={2}>
          {[
            `margin={1} // 8px`,
            `borderTop={1}`,
            `boxShadow={1}`,
            `width={1} // 100%`
          ].map(example => (
            <Grid item xs={12} md={6}>
              <Box display='flex' justifyContent='center'>
                <T variant='caption'>{example}</T>
              </Box>
            </Grid>
          ))}
        </Grid>
        <br /> It also allows you to set styles based on theme properties.
        <br />
        <br />
        <Grid container spacing={2}>
          {[
            `color='primary'`,
            `color='secondary.light'`,
            `bgcolor='background.paper'`
          ].map(example => (
            <Grid item xs={12} md={6}>
              <Box display='flex' justifyContent='center'>
                <T variant='caption'>{example}</T>
              </Box>
            </Grid>
          ))}
        </Grid>
        <br /> Finally, it allows you to style based on media queries.
        <br />
        {[
          `display={{xs: 'none', md: 'block'}}`,
          `fontSize={{sm: '12px', lg: '16px'}}`,
          `padding={[2,3,4]} // for xs, sm, md`
        ].map(example => (
          <Box my={2} display='flex' justifyContent='center'>
            <T
              variant='caption'
              css={{ '@media (max-width: 600px)': { fontSize: 12 } }}
            >
              {example}
            </T>
          </Box>
        ))}
      </T>
      <Box marginTop={3}>
        <Link component={RouterLink} to='/mui-usage/???' />
        <Button color='primary' variant='contained'>
          Next: Key Components
        </Button>
      </Box>
    </div>
  )
}
export default BoxView
