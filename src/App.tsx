/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import red from '@material-ui/core/colors/red'
import sample from 'lodash/sample'
import { Color } from '@material-ui/core'
import Button from './Button'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NestedSelector from './NestedSelector'
import { StylesFromProps } from './StylesFromProps'

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

const App: React.FC = () => {
  const [shade, setShade] = useState<keyof Color>(500)
  const possibleNewShades = possibleShades.filter(_shade => _shade !== shade)
  useEffect(() => {
    const interval = setInterval(
      () => setShade(sample(possibleNewShades) as keyof Color),
      500
    )
    return () => clearInterval(interval)
  })
  const color = red[shade]
  return (
    <div className='App'>
      <header
        css={{
          backgroundColor: color,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 'calc(10px + 2vmin)',
          color: 'white'
        }}
      >
        <img src={logo} className='App-logo' alt='logo' />
        <Button />
        <NestedSelector css={{ marginTop: 8 }} />
        <StylesFromProps css={{ marginTop: 8 }} />
      </header>
    </div>
  )
}

export default App
