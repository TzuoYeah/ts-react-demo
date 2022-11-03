import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import { grey } from '@mui/material/colors';

import NoteEvent from "api/NoteEvent"
import ListItemText from '@mui/material/ListItemText'

type Props = {
  noteEvent: NoteEvent;
  showDate?: Boolean;
};

export default function DateEventViewListItem({noteEvent,showDate=true}:Props) {
  const dateVisibility = showDate?{}:{ visibility: 'hidden' }
  return (
  <ListItem disablePadding>
    <ListItemButton sx={{ display: 'flex' }}>
      <Stack direction="row" alignItems="center" sx={{width:1}} spacing={1} p={1} >
        <Avatar variant="rounded" sx={dateVisibility}>
          {noteEvent.date.getDate()}
        </Avatar>
        <ListItemText
          primary={
            <Typography sx={{width:1, fontWeight: 'bold'}} noWrap >
              {noteEvent.title}
            </Typography>
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
  );}
