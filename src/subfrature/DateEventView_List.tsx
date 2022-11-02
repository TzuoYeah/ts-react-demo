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
  return (
    <List
    sx={{ width: '100%'}}
    subheader={
      <ListSubheader component="div" id="nested-list-subheader">
        {monthText[props.month]}
      </ListSubheader>
    }
    >
      {props.noteEventList.map((item,key)=>
        <DateEventViewListItem noteEvent={item} key={key}/>
      )}
    </List>
  );
}
