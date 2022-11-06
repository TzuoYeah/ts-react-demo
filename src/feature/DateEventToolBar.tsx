import {useState,MouseEvent} from 'react'
import Stack from '@mui/material/Stack'

import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import ToggleButton from '@mui/material/ToggleButton'

// #region Types
type Props = {
  setViewSate: React.Dispatch<React.SetStateAction<string>>
}


export default function DateEventToolBar({setViewSate}:Props) {
  const [alignment, setAlignment] = useState('doing');
  const handleChange = (
    event: MouseEvent<HTMLElement>,
    newAlignment: string,
  ) =>{
    if(newAlignment === null) return
    setViewSate(newAlignment)
    return setAlignment(newAlignment)
  }

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
      mb={2}
    >
      <ToggleButtonGroup
        value={alignment}
        onChange={handleChange}
        aria-label="Platform"
        size="small"
        exclusive
        fullWidth
      >
        <ToggleButton value="todo" color="error" sx={{fontWeight:'bold'}}>ToDo</ToggleButton>
        <ToggleButton value="doing" color="warning" sx={{fontWeight:'bold'}}>Doing</ToggleButton>
        <ToggleButton value="done" color="success" sx={{fontWeight:'bold'}}>Done</ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  )
}