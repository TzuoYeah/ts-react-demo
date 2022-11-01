import {useState} from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography'
import Slider from '@mui/material/Slider';
import FormLabel from '@mui/material/FormLabel';

function valueLabelFormat(value: number) {
  const month = ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]
  return `${month[value]}`;
}

export default function DateEventSearch() {
  const [value, setValue] = useState<number[]>([6,8]);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Paper elevation={0} variant="outlined" sx={{p:'8px'}}>
        <Typography m={0} variant="h6" gutterBottom >
          <b>條件</b>
        </Typography>
        
        <Paper elevation={0} sx={{p:'8px'}}>
          <FormLabel>月份</FormLabel>
          <Slider
            getAriaLabel={() => 'Month range'}
            value={value}
            onChange={handleChange}
            aria-label="Month"
            defaultValue={10}
            getAriaValueText={valueLabelFormat}
            valueLabelFormat={valueLabelFormat}
            valueLabelDisplay="auto"
            step={1}
            min={0}
            max={11}
            marks={[{value: 2,label: '三月',},{value: 5,label: '六月',},{value: 8,label: '九月',},]}
          />
        </Paper>
        <Paper elevation={0} sx={{p:'8px'}}>
          <Paper variant="outlined" sx={{p:'2px', display: 'flex'}}>
            <InputBase sx={{px:"8px"}} fullWidth placeholder="搜尋標題" />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Paper>
        
      </Paper>
  )
}