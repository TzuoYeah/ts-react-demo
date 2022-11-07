import {useState,useEffect} from 'react'

import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import DateEventView from 'feature/DateEventView'
import DateEventToolBar from 'feature/DateEventToolBar'
import DateEventEditor from 'feature/DateEventEditor'

import {NoteEvent,NoteEventGetAll,NoteEventMapping} from 'api/NoteEvent'

export default function Layout() {
  const [viewSate,setViewSate] = useState('doing')
  const [data,setData] = useState([] as NoteEvent[])

  useEffect(() => {
    NoteEventGetAll().then(data =>
      setData(NoteEventMapping(data))
    )}, [])
  
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <Stack spacing={2} p={1} >
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box p={1}>
            <DateEventToolBar setViewSate={setViewSate}/>
            <DateEventView noteEventList={data} viewSate={viewSate}/>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <Box p={1}>
            <DateEventEditor setData={setData}/>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}