import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

export default function DateEventViewListItem() {
  return (
    <Grid container spacing={0}>
      <Grid alignItems="center" item xs={7} sx={{ display: 'flex' }}>
        <Avatar sx={{ width:32, height: 32 }} variant="rounded">31</Avatar>
        <Typography mx={1} >
          <b>標題123</b>
        </Typography>
      </Grid>
      <Grid item xs={5} sx={{ display: 'flex' }}>
        <Divider orientation="vertical" flexItem />
        <Typography mx={1}>
          內文
        </Typography>
      </Grid>
    </Grid>
  );
}
