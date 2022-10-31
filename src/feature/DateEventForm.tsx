import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function DateEventForm() {
  return (
    <Stack spacing={2} p={2}>
      <Typography m={0} variant="h6" gutterBottom >
        <b>編輯</b>
      </Typography>
      <TextField label="標題" variant="standard" />
      <TextField
        label="日期"
        type="date"
        InputLabelProps={{shrink: true,}}
      />
      <TextField
          label="內文"
          multiline
          rows={4}
      />
      <Stack
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      spacing={2}
      >
        <Button variant="contained">Submit</Button>
      </Stack>
    </Stack>
  )
}