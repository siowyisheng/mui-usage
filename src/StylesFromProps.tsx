import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Paper } from '@material-ui/core'

const useStyles = makeStyles({
  foo: (props: { color: string }) => ({
    width: 500,
    height: 200,
    backgroundColor: props.color
  })
})

export function StylesFromProps({ className }: { className?: string }) {
  const [color, setColor] = useState('black')
  const classes = useStyles({ color })
  return (
    <Paper className={`${classes.foo} ${className}`}>
      <input
        type='text'
        value={color}
        onChange={e => setColor(e.target.value)}
      />
    </Paper>
  )
}
