import React from 'react'
import ReactDom from 'react-dom'

import App from './App'

test('it renders content', () => {
  const comp = document.createElement('div')
  ReactDom.render(<App/>, comp)

  expect(comp.querySelector('').textContent).toBe('Todo')
})