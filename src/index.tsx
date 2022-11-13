import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'shared/Layout'
import DataUpdate from 'hook/DataUpdate'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <DataUpdate>
      <App />
    </DataUpdate>
  </React.StrictMode>
)