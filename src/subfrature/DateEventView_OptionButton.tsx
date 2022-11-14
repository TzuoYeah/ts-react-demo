import {useState} from 'react'
import IconButton from '@mui/material/IconButton'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import AlarmIcon from '@mui/icons-material/Alarm'
import EventNoteIcon from '@mui/icons-material/EventNote'
import DoneIcon from '@mui/icons-material/Done'
import ArchiveIcon from '@mui/icons-material/Archive'
import Stack from '@mui/material/Stack'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import {NoteEvent,NoteEventDelete}from "api/NoteEvent"

import {useData} from 'hook/DataUpdate'
import {useSnackbar} from 'hook/HandleSnackbar'
import {useMedal} from 'hook/HandleMedal'

// #region Types
type Props = {
  noteEvent: NoteEvent
}
type MenuItemProps = {
  type:string
  handleFunction:()=>void
}
// #endregion

export default function DateEventViewOptionButton({noteEvent}:Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const data = useData()
  const snackbar = useSnackbar()
  const medal = useMedal()
  
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = async (type:string) => {
    switch(type){
      case 'delete':
        const deleteEvenet = NoteEventDelete(noteEvent.id)
        deleteEvenet.then(res =>{
          if('ok' in res){
            data.getData()
            snackbar.ShowDeleteSuccess()
          }
          else{
            snackbar.ShowDeleteError()
          }
        })
        
        break
      case 'edit':
        medal.showEdit(noteEvent)
        
        break
      default:
    }

    setAnchorEl(null);
  }

  return (
    <>
    <IconButton 
    aria-controls={open ? 'basic-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
    onClick={handleClick}
    edge="end"
    aria-label="more"
    >
      <MoreHorizIcon />
    </IconButton>
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      <OptionMenuItem type={'edit'} handleFunction={() => handleClose('edit')}/>
      <OptionMenuItem type={'delete'} handleFunction={() => handleClose('delete')}/>
      <OptionMenuItem type={'todo'} handleFunction={() => handleClose('todo')}/>
      <OptionMenuItem type={'doing'} handleFunction={() => handleClose('doing')}/>
      <OptionMenuItem type={'done'} handleFunction={() => handleClose('done')}/>
      <OptionMenuItem type={'store'} handleFunction={() => handleClose('store')}/>
    </Menu>
    </>
  )}

/**
 * 選單按鈕
 */
 function OptionMenuItem({type,handleFunction}:MenuItemProps):JSX.Element {
  let icon:JSX.Element
  let label:JSX.Element

  switch(type){
    case 'edit':
      icon = <EditIcon />
      label = <label>編輯</label>
      break
    case 'delete':
      icon = <DeleteIcon />
      label = <label>刪除</label>
      break
    case 'done':
      icon = <DoneIcon />
      label = <label>Done</label>
      break
    case 'doing':
      icon = <AlarmIcon />
      label = <label>Doing</label>
      break
    case 'todo':
      icon = <EventNoteIcon />
      label = <label>ToDo</label>
      break
    case 'store':
      icon = <ArchiveIcon />
      label = <label>封存</label>
      break
    default:
      return <></>
  }

  return <MenuItem onClick={handleFunction}>
    <Stack direction="row" alignItems="center" spacing={1} >
      {icon}
      {label}
    </Stack>
  </MenuItem>

}
