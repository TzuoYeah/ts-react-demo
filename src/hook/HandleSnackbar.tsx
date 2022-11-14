import {useState,createContext,useContext} from 'react'

// #region Props
type Props={
  children: React.ReactNode
}
type ProviderProps={
  deleteSuccessOpen:boolean
  deleteErrorOpen:boolean
  ShowDeleteSuccess:() => void
  ShowDeleteError:() => void
  handleDeleteSuccessClose:(event: React.SyntheticEvent | Event, reason?: string) => void
  handleDeleteErrorClose:(event: React.SyntheticEvent | Event, reason?: string) => void

  createSuccessOpen:boolean
  createErrorOpen:boolean
  ShowCreateSuccess:() => void
  ShowCreateError:() => void
  handleCreateSuccessClose:(event: React.SyntheticEvent | Event, reason?: string) => void
  handleCreateErrorClose:(event: React.SyntheticEvent | Event, reason?: string) => void

  editSuccessOpen:boolean
  editErrorOpen:boolean
  ShowEditSuccess:() => void
  ShowEditError:() => void
  handleEditSuccessClose:(event: React.SyntheticEvent | Event, reason?: string) => void
  handleEditErrorClose:(event: React.SyntheticEvent | Event, reason?: string) => void
}
// #endregion

const SnackbarContext = createContext({} as ProviderProps)
export const useSnackbar = () => useContext(SnackbarContext)

export default function HandleSnackbar({children}:Props):JSX.Element{
    const [deleteSuccessOpen, setDeleteSuccessOpen] = useState(false)
    const [deleteErrorOpen, setDeleteErrorOpen] = useState(false)
    const [createSuccessOpen, setCreateSuccessOpen] = useState(false)
    const [createErrorOpen, setCreateErrorOpen] = useState(false)
    const [editSuccessOpen, setEditSuccessOpen] = useState(false)
    const [editErrorOpen, setEditErrorOpen] = useState(false)
    
    const handleDeleteSuccessClose = (event: React.SyntheticEvent | Event, reason?: string) => {if (reason === 'clickaway') return ; setDeleteSuccessOpen(false)}
    const handleDeleteErrorClose = (event: React.SyntheticEvent | Event, reason?: string) => {if (reason === 'clickaway') return ; setDeleteErrorOpen(false)}
    const handleCreateSuccessClose = (event: React.SyntheticEvent | Event, reason?: string) => {if (reason === 'clickaway') return ; setCreateSuccessOpen(false)}
    const handleCreateErrorClose = (event: React.SyntheticEvent | Event, reason?: string) => {if (reason === 'clickaway') return ; setCreateErrorOpen(false)}
    const handleEditSuccessClose = (event: React.SyntheticEvent | Event, reason?: string) => {if (reason === 'clickaway') return ; setEditSuccessOpen(false)}
    const handleEditErrorClose = (event: React.SyntheticEvent | Event, reason?: string) => {if (reason === 'clickaway') return ; setEditErrorOpen(false)}

    const ShowDeleteSuccess = () =>{ setDeleteSuccessOpen(true) }
    const ShowDeleteError = () =>{ setDeleteErrorOpen(true) }
    const ShowCreateSuccess = () =>{ setCreateSuccessOpen(true) }
    const ShowCreateError = () =>{ setCreateErrorOpen(true) }
    const ShowEditSuccess = () =>{ setEditSuccessOpen(true) }
    const ShowEditError = () =>{ setEditErrorOpen(true) }
  
    return <SnackbarContext.Provider value={{
        deleteSuccessOpen,
        deleteErrorOpen,
        ShowDeleteSuccess,
        ShowDeleteError,
        handleDeleteSuccessClose,
        handleDeleteErrorClose,

        createSuccessOpen,
        createErrorOpen,
        ShowCreateSuccess,
        ShowCreateError,
        handleCreateSuccessClose,
        handleCreateErrorClose,
        
        editSuccessOpen,
        editErrorOpen,
        ShowEditSuccess,
        ShowEditError,
        handleEditSuccessClose,
        handleEditErrorClose
      }}>
      {children}
      </SnackbarContext.Provider>
  }