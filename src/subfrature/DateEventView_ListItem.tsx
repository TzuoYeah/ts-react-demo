import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import Chip from '@mui/material/Chip'
import {weekDayText} from "data/DateText"
import { grey,orange } from '@mui/material/colors'

import {NoteEvent} from "api/NoteEvent"
import ListItemText from '@mui/material/ListItemText'

import OptionButton from "subfrature/DateEventView_OptionButton"

// #region Types
type Props = {
  noteEvent: NoteEvent
  showDate?: Boolean
}

// #endregion

export default function DateEventViewListItem({noteEvent,showDate=true}:Props) {
  const avatarVariant = {
    visibility:'',
    bgcolor:'',
    width:30,
    height:30
  }
  if(!showDate) avatarVariant.visibility = 'hidden'
  if(checkDateWithin(noteEvent.date,7)) avatarVariant.bgcolor = orange[500]

  return (
  <ListItem 
  secondaryAction={
    <OptionButton id={noteEvent.id}/>
  }
  disablePadding
  >
    <ListItemButton sx={{ display: 'flex' }}>
      <Stack direction="row" alignItems="center" sx={{width:1}} spacing={1} p={1} >
        <Avatar
            variant="rounded"
            sx={avatarVariant}
        >
          {noteEvent.date.getDate()}
        </Avatar>
        <ListItemText
          primary={
            <Stack direction="row" spacing={1}>
              <Typography sx={{width:'auto', fontWeight: 'bold'}} noWrap >
                {noteEvent.title}
              </Typography>
              {showDate?<Chip 
                label={
                  <Typography sx={{fontSize:10, fontWeight: 'bold'}} color={grey[500]}>
                    {weekDayText[noteEvent.date.getDay()]}
                  </Typography>
                }
                size="small"
                variant="outlined"
                />:<></>}
            </Stack>
          }
          secondary={
            <Typography sx={{width:1}} variant="body2" color={grey[500]} noWrap>
              {noteEvent.text}
            </Typography>
          }
        />
      </Stack>
    </ListItemButton>
  </ListItem>
  )}

/**
 * 檢查日期是否在後n天以內
 * @param checkDate 要確認的日期
 * @param lastDay 後幾天以內
 * @returns 
 */
  function checkDateWithin(checkDate:Date,lastDay:number){
    const today = new Date()
    if(today.getMonth()!==checkDate.getMonth()) return false
    if(checkDate.getDate() - today.getDate() <= lastDay && checkDate.getDate() >= today.getDate())
      return true
    return false
  }