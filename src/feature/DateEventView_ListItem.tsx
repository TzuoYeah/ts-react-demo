import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

import NoteEvent from "api/NoteEvent"

type Props = {
  noteEvent: NoteEvent;
};

export default function DateEventViewListItem(props:Props) {
  const noteEvent = props.noteEvent
  return (
    <Grid container spacing={0}>
      <Grid alignItems="center" item xs={7} sx={{ display: 'flex' }}>
        <Avatar sx={{ width:32, height: 32 }} variant="rounded">
          {noteEvent.date.getDate()}
        </Avatar>
        <Typography mx={1} >
          <b>{noteEvent.title}</b>
        </Typography>
      </Grid>
      <Grid item xs={5} sx={{ display: 'flex' }}>
        <Divider orientation="vertical" flexItem />
        <Typography mx={1}>
          {noteEvent.text}
        </Typography>
      </Grid>
    </Grid>
  );
}
