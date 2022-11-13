import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'shared/Layout'
import DataUpdate from 'hook/DataUpdate'
import HandleSnackbar from 'hook/HandleSnackbar'
import SnackbarGroup from 'shared/SnackbarGroup'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <HandleSnackbar>
      <DataUpdate>
        <App />
        <SnackbarGroup/>
      </DataUpdate>
    </HandleSnackbar>
  </React.StrictMode>
)