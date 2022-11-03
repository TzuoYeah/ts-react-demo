//import {useState} from 'react'
import List from '@mui/material/List'
import ListSubheader from '@mui/material/ListSubheader'

import DateEventViewListItem from 'subfrature/DateEventView_ListItem'
import NoteEvent from "api/NoteEvent"
import monthText from "data/monthText"

type Props = {
  month: number;
  noteEventList: NoteEvent[];
};

export default function DateEventView_List(props:Props) {
  let tempDate = 0
  return (
    <List
    sx={{ width: '100%'}}
    subheader={
      <ListSubheader component="div" id="nested-list-subheader">
        {monthText[props.month]}
      </ListSubheader>
    }
    >
      {props.noteEventList.map((item,key)=>{
        let nextDate:number = item.date.getDate()
        let showDate = tempDate!==nextDate
        if(tempDate!=nextDate) tempDate = nextDate
        return <DateEventViewListItem noteEvent={item} key={key} showDate={showDate}/>
      })}
    </List>
  );
}
