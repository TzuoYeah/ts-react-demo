import {useState,createContext,useContext} from 'react'
import {NoteEvent} from "api/NoteEvent"

// #region Props
type Props={
    children: React.ReactNode
}
type ProviderProps={
    createOpen:boolean
    showCreate:()=>void
    closeCreate:()=>void
    editOpen:boolean
    noteEvent:NoteEvent
    showEdit:(noteEvent:NoteEvent)=>void
    closeEdit:()=>void
}
// #endregion

const MedalContext = createContext({} as ProviderProps)
export const useMedal = () => useContext(MedalContext)

export default function Layout({children}:Props):JSX.Element{
  const [createOpen, setCreateOpen] = useState(false)
  const showCreate = () => setCreateOpen(true)
  const closeCreate = () => setCreateOpen(false)
  
  const [editOpen, setEditOpen] = useState(false)
  const [noteEvent, setNoteEvent] = useState({} as NoteEvent)
  const showEdit = (noteEvent:NoteEvent) =>{
     setEditOpen(true)
     setNoteEvent(noteEvent)
    }
  const closeEdit = () => setEditOpen(false)

  return <MedalContext.Provider value={{
    createOpen,
    showCreate,
    closeCreate,
    editOpen,
    noteEvent,
    showEdit,
    closeEdit,
    }}>
    {children}
    </MedalContext.Provider>
}