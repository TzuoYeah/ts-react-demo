import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'

import DateEventForm from 'feature/DateEventForm'
import DateEventTable from 'feature/DateEventView'
import DateEventSearch from 'feature/DateEventSearch'

export default function Layout() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={7} lg={5}>
        <Stack spacing={2} p={1} >
          <DateEventSearch />
          <DateEventTable />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={12} md={5} lg={4}>
        <Stack spacing={2} p={1} >
          <DateEventForm />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={3}>
        <Paper variant="outlined">
        </Paper>
      </Grid>
    </Grid>
  )
}