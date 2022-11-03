import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'

import DateEventForm from 'feature/DateEventForm'
import DateEventView from 'feature/DateEventView'
import DateEventSearch from 'feature/DateEventSearch'

import noteEventListData from 'data/test1'

export default function Layout() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={7} lg={3}>
          <Stack spacing={2} p={1} >
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={6}>
          <Box p={1}>
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}
              my={2}
            >
            <Button variant="text">新增記事</Button>
            </Stack>
            <DateEventView noteEventList={noteEventListData}/>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={3}>
          <Box p={1}>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}