import {useState} from 'react'
import Typography from '@mui/material/Typography'
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

import {NoteEvent,NoteEventPost,NoteEventPatch}from "api/NoteEvent"
import {useData} from 'hook/DataUpdate'
import {useSnackbar} from 'hook/HandleSnackbar'
import {useMedal} from 'hook/HandleMedal'

// #region Props
type Props={
  type:'create'|'edit'
  noteEvent?:NoteEvent
}
// #endregion

export default function DateEventEditor({type,noteEvent}:Props) {
  const isCreate = type==='create'
  const [dateValue, setDateValue] = useState<Dayjs | null>(isCreate?dayjs():dayjs(noteEvent?.date))
  const [titleValue, setTitleValue] = useState<string>(isCreate?'':noteEvent?.title??'')
  const [textValue, setTextValue] = useState<string>(isCreate?'':noteEvent?.text??'')
  const [stateValue, setStateValue] = useState<string>(isCreate?'todo':noteEvent?.state??'todo')
  const data = useData()
  const snackbar = useSnackbar()
  const medal = useMedal()

  const handleDateChange = (newValue: Dayjs | null) => setDateValue(newValue)
  const handleTitleChange =  (event: React.ChangeEvent<HTMLInputElement>) => setTitleValue(event.target.value)
  const handleTextValue =  (event: React.ChangeEvent<HTMLInputElement>) => setTextValue(event.target.value)
  const handleStateValue =  (event: React.ChangeEvent<HTMLInputElement>) => setStateValue(event.target.value)

  const handleCreate = async () => {
    const response = NoteEventPost({
      title:titleValue,
      text:textValue,
      date:dateValue?.format('YYYY-MM-DD')??new Date(),
      state:stateValue
    } as NoteEvent)
    if('ok' in await response){
      setTitleValue('')
      setTextValue('')
      setDateValue(dayjs())
      data.getData()
      snackbar.ShowCreateSuccess()
    }
    else snackbar.ShowCreateError()
  }  
  
  const handleEdit = async () => {
    const response = NoteEventPatch(noteEvent?.id,{
      title:titleValue,
      text:textValue,
      date:dateValue?.format('YYYY-MM-DD')??new Date(),
      state:stateValue
    } as NoteEvent)
    if('ok' in await response){
      medal.closeEdit()
      data.getData()
      snackbar.ShowEditSuccess()
    }
    else snackbar.ShowEditError()
  }  

  const title = isCreate?'新增項目':'編輯'

  return (
    <>
    <Stack spacing={2}>
      <Typography m={0} variant="h6" gutterBottom sx={{fontWeight:'bold'}}>
        {title}
        </Typography>
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
          <Button variant="contained" onClick={isCreate?handleCreate:handleEdit}>送出</Button>
        </Stack>
      </Stack>
    </>
  )
}