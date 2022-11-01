//import {useState} from 'react'

import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import ListSubheader from '@mui/material/ListSubheader'

import DateEventViewListItem from './DateEventView_ListItem'
import NoteEvent from "api/NoteEvent"
import monthText from "data/monthText"

type Props = {
  noteEventList?: NoteEvent[];
};

function reduceNoteEventList(noteEventList:NoteEvent[]){
  return noteEventList.reduce((groupList,dateEvent)=>{
    const month = dateEvent.date.getMonth()
    groupList[month] = groupList[month] || []
    groupList[month].push(dateEvent)
    return groupList
  },new Array<NoteEvent[]>(12))
}

function sortMonthGroup(noteEventMonthGtoup:NoteEvent[][]){
  noteEventMonthGtoup.forEach(element => element.sort((a,b) => a.date.getDate() - b.date.getDate() ));
}

export default function DateEventView(props:Props) {
  const noteEventMonthGtoup = props.noteEventList?reduceNoteEventList(props.noteEventList):[]
  sortMonthGroup(noteEventMonthGtoup)

  return (
    <Paper elevation={0} variant="outlined" sx={{p:'8px'}}>
      <Typography m={0} variant="h6" gutterBottom >
        <b>檢視</b>
      </Typography>
      {noteEventMonthGtoup.map((group,key1)=>
        <List
        key = {key1}
        sx={{ width: '100%'}}
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            {monthText[key1]}
          </ListSubheader>
        }
        >
          {group.map((item,key2)=>
            <ListItem key={key2} disablePadding>
              <ListItemButton sx={{ display: 'flex' }}>
                <DateEventViewListItem noteEvent={item}/>
              </ListItemButton>
            </ListItem>
          )}
        </List>
      )}      
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={0}
        px={2}
      >
        頁數：
        <Pagination count={3} />
      </Stack>

    </Paper>
  );
}
