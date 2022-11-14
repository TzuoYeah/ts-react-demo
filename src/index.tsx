import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'shared/Layout'
import DataUpdate from 'hook/DataUpdate'
import HandleSnackbar from 'hook/HandleSnackbar'
import SnackbarGroup from 'shared/SnackbarGroup'
import HandleMedal from 'hook/HandleMedal'
import MedalGroup from 'shared/MedalGroup'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <DataUpdate>
      <HandleSnackbar>
          <HandleMedal>
            <App />
            <SnackbarGroup/>
            <MedalGroup />
        </HandleMedal>
      </HandleSnackbar>
    </DataUpdate>
  </React.StrictMode>
)