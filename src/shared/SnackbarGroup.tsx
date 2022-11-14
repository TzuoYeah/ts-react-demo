import HandleSnackbar from 'hook/HandleSnackbar'
import {useSnackbar} from 'hook/HandleSnackbar'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

// #region Props
  type SnackbarItemProps= {
    isOpen:boolean
    text:string
    type:'success'|'error'
    handleClose:(event: React.SyntheticEvent | Event, reason?: string) => void
  }
// #endregion

export default function SnackbarGroup() {
  const snackbar = useSnackbar()
  return (
      <HandleSnackbar>
        <SnackbarItem text={'刪除成功'} isOpen={snackbar.deleteSuccessOpen} handleClose={snackbar.handleDeleteSuccessClose} type={'success'}/>
        <SnackbarItem text={'刪除失敗'} isOpen={snackbar.deleteErrorOpen} handleClose={snackbar.handleDeleteErrorClose} type={'error'}/>
        <SnackbarItem text={'送出成功'} isOpen={snackbar.createSuccessOpen} handleClose={snackbar.handleCreateSuccessClose} type={'success'}/>
        <SnackbarItem text={'送出失敗'} isOpen={snackbar.createErrorOpen} handleClose={snackbar.handleCreateErrorClose} type={'error'}/>
        <SnackbarItem text={'更新成功'} isOpen={snackbar.editSuccessOpen} handleClose={snackbar.handleEditSuccessClose} type={'success'}/>
        <SnackbarItem text={'更新失敗'} isOpen={snackbar.editErrorOpen} handleClose={snackbar.handleEditErrorClose} type={'error'}/>
      </HandleSnackbar>
  )
}
  
function SnackbarItem({isOpen,text,type,handleClose}:SnackbarItemProps):JSX.Element{
  return <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
        {text}
      </Alert>
    </Snackbar>
}