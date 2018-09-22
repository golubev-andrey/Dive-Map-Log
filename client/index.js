import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Root from './Root'

ReactDOM.render(
      <Root>
        <App history={history} />
      </Root>,
    document.getElementById('app')
  )
