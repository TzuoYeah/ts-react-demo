import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import DateEventViewListItem from './DateEventView_ListItem'

const data_ary = [12,1,3452,2,214];

export default function DateEventView() {
  return (
    <Paper elevation={0} variant="outlined" sx={{p:'8px'}}>
      <Typography m={0} variant="h6" gutterBottom >
        <b>檢視</b>
      </Typography>

      <List sx={{ width: '100%'}}>
        {data_ary.map((item,index)=>
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ display: 'flex' }}>
              <DateEventViewListItem />
            </ListItemButton>
          </ListItem>
        )}
      </List>
      
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={0}
        px={2}
      >
        頁數：
        <Pagination count={3} />
      </Stack>

    </Paper>
  );
}
