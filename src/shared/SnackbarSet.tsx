import {useState} from 'react'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

// #region Types
// #endregion


export default function SnackbarSet():JSX.Element{
    const [snackbarSuccessOpen, setSnackbarSuccessOpen] = useState(false)
    const [snackbarErrorOpen, setSnackbarErrorOpen] = useState(false)
    
    const handleSnackbarSuccessClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') return
        setSnackbarSuccessOpen(false)
    }
    const handleSnackbarErrorClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') return
        setSnackbarErrorOpen(false)
    }
  
    return<>
      <Snackbar open={snackbarSuccessOpen} autoHideDuration={6000} onClose={handleSnackbarSuccessClose}>
        <Alert onClose={handleSnackbarSuccessClose} severity="success" sx={{ width: '100%' }}>
          刪除成功
        </Alert>
      </Snackbar>
      
      <Snackbar open={snackbarErrorOpen} autoHideDuration={6000} onClose={handleSnackbarErrorClose}>
        <Alert onClose={handleSnackbarErrorClose} severity="error" sx={{ width: '100%' }}>
          刪除失敗
        </Alert>
      </Snackbar>
    </>
  }