import {useState,useEffect} from 'react'

import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import Button from '@mui/material/Button';

import DateEventView from 'feature/DateEventView'
import DateEventToolBar from 'feature/DateEventToolBar'

import {useData} from 'hook/DataUpdate'
import {useMedal} from 'hook/HandleMedal'

export default function Layout() {
  const [viewSate,setViewSate] = useState('doing')  
  const data = useData()
  const medal = useMedal()
  useEffect(() => {data.getData()}, [])

  return (<>  
    <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Stack spacing={2} p={1} >
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box p={1}>
              <DateEventToolBar setViewSate={setViewSate}/>
              <DateEventView dateEventData={data.dateEventData} viewSate={viewSate}/>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Button onClick={medal.showCreate}>新增內容</Button>
          </Grid>
        </Grid>
      </Container>
  </>
  )
}