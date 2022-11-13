import {useState} from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AddIcon from '@mui/icons-material/Add'
import Typography from '@mui/material/Typography'
import AccordionDetails from '@mui/material/AccordionDetails'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import Button from '@mui/material/Button'

import dayjs, { Dayjs } from 'dayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'

import {NoteEvent,NoteEventPost}from "api/NoteEvent"
import {useData} from 'hook/DataUpdate'
import {useSnackbar} from 'hook/HandleSnackbar'

// #region Props
// #endregion

export default function DateEventEditor() {
  const [dateValue, setDateValue] = useState<Dayjs | null>(dayjs())
  const [titleValue, setTitleValue] = useState<string>('')
  const [textValue, setTextValue] = useState<string>('')
  const [stateValue, setStateValue] = useState<string>('todo')
  const data = useData()
  const snackbar = useSnackbar()

  const handleDateChange = (newValue: Dayjs | null) => setDateValue(newValue)
  const handleTitleChange =  (event: React.ChangeEvent<HTMLInputElement>) => setTitleValue(event.target.value)
  const handleTextValue =  (event: React.ChangeEvent<HTMLInputElement>) => setTextValue(event.target.value)
  const handleStateValue =  (event: React.ChangeEvent<HTMLInputElement>) => setStateValue(event.target.value)
  const handleSubmit = async () => {
    const response = NoteEventPost({
      title:titleValue,
      text:textValue,
      date:dateValue?.format('YYYY-MM-DD')??new Date(),
      state:stateValue
    } as NoteEvent)
    if('ok' in await response){
      data.getData()
      snackbar.ShowCreateSuccess()
    }
    else snackbar.ShowCreateError()
  }

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<AddIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography m={0} variant="h6" gutterBottom sx={{fontWeight:'bold'}}>新增內容</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={2}>
            <TextField 
              label="標題"
              variant="standard" 
              size="small"
              value={titleValue}
              onChange={handleTitleChange}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  label="日期"
                  inputFormat="YYYY/MM/DD"
                  value={dateValue}
                  onChange={handleDateChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
            <TextField
                label="內文"
                multiline
                rows={4}
                size="small"
                value={textValue}
                onChange={handleTextValue}
            />
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">狀態</FormLabel>
              <RadioGroup
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={stateValue}
                onChange={handleStateValue}
                row
              >
                <FormControlLabel value="todo" control={<Radio size="small"/>} label="ToDo" />
                <FormControlLabel value="doing" control={<Radio size="small"/>} label="Doing" />
                <FormControlLabel value="done" control={<Radio size="small"/>} label="Done" />
              </RadioGroup>
            </FormControl>
            <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={2}
            >
              <Button variant="contained" onClick={handleSubmit}>送出</Button>
            </Stack>
        </Stack>
      </AccordionDetails>      
    </Accordion>
  )
}