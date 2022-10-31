import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography'


export default function DateEventSearch() {
  return (
    <Paper elevation={0} variant="outlined" sx={{p:'8px'}}>
        <Typography m={0} variant="h6" gutterBottom >
        <b>條件</b>
        </Typography>
        <Paper variant="outlined" sx={{p:'2px', display: 'flex'}}>
          <InputBase sx={{px:"8px"}} fullWidth placeholder="搜尋" />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        
        <Paper elevation={0} sx={{py:'8px',mt:'8px'}}>
          <Stack direction="row" spacing={2} >
            <TextField
              label="起始日期"
              type="date"
              size="small"
              InputLabelProps={{shrink: true,}}
              sx={{ alignSelf: 'center'}}
            />
            <TextField
              label="結束日期"
              type="date"
              size="small"
              
              InputLabelProps={{shrink: true,}}
              sx={{ alignSelf: 'center'}}
            />
          </Stack>
        </Paper>
      </Paper>
  )
}