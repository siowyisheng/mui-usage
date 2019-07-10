import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Paper from '@material-ui/core/Paper'
import { Theme } from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: 16,
    color: theme.palette.primary.main,
    '& p': {
      color: 'green',
      '& span': {
        color: 'blue'
      }
    }
  }
}))

export default function NestedSelector({ className }: { className?: string }) {
  const classes = useStyles()

  return (
    <Paper className={clsx(classes.root, className)}>
      This is red since it is inside the paper.
      <p>
        This is green since it is inside the paragraph{' '}
        <span>and this is blue since it is inside the span</span>
      </p>
    </Paper>
  )
}
