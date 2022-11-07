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

// #region Types
type Props = {
}

// #endregion

export default function DateEventViewOptionButton() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
      <MenuItem onClick={handleClose}>
        <Stack direction="row" alignItems="center" spacing={1} >
          <EditIcon />
          <label>編輯</label>
        </Stack>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Stack direction="row" alignItems="center" spacing={1} >
          <DeleteIcon />
          <label>刪除</label>
        </Stack>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Stack direction="row" alignItems="center" spacing={1} >
          <DoneIcon />
          <label>Done</label>        
        </Stack>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Stack direction="row" alignItems="center" spacing={1} >
          <AlarmIcon />
          <label>Doing</label>        
        </Stack>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Stack direction="row" alignItems="center" spacing={1} >
          <EventNoteIcon />
          <label>ToDo</label>
        </Stack>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Stack direction="row" alignItems="center" spacing={1} >
          <ArchiveIcon />
          <label>封存</label>
        </Stack>
      </MenuItem>
    </Menu>
    </>
  )}