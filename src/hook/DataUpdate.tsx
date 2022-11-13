import {useState,createContext,useContext} from 'react'
import {NoteEvent,NoteEventGetAll,NoteEventMapping} from 'api/NoteEvent'

// #region Props
type Props={
  children: React.ReactNode
}
type ProviderProps={
  dateEventData: NoteEvent[]
  getData:  () => Promise<void>
}
// #endregion

const DataContext = createContext({} as ProviderProps)
export const useData = () => useContext(DataContext)

export default function DataUpdate({children}:Props):JSX.Element{
  const [dateEventData,setDateEventData] = useState([] as NoteEvent[])
  const getData = async()=> {
    NoteEventGetAll().then(data =>
      setDateEventData(NoteEventMapping(data))
    )
  }

  return<DataContext.Provider value={{dateEventData:dateEventData,getData}}>
    {children}
  </DataContext.Provider>
}