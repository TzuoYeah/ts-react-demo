import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { grey } from '@mui/material/colors';

import NoteEvent from "api/NoteEvent"
import { Paper } from '@mui/material';

type Props = {
  noteEvent: NoteEvent;
};

export default function DateEventViewListItem(props:Props) {
  const noteEvent = props.noteEvent
  return (
    <Stack direction="row" alignItems="flex-end" sx={{width:1}} spacing={1} p={1} >
      <Avatar sx={{ width:30, height: 30,fontSize:16 }} variant="rounded">
        {noteEvent.date.getDate()}
      </Avatar>
      <Typography sx={{width:220}} noWrap >
        {noteEvent.title}
      </Typography>
      
      <Typography sx={{width:1}} variant="body2" color={grey[500]} mx={1} noWrap>
        {noteEvent.text}
      </Typography>
    </Stack>
  );
}
