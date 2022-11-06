//import {useState} from 'react'
import ListSubheader from '@mui/material/ListSubheader'

import DateEventViewListItem from 'subfrature/DateEventView_ListItem'
import {NoteEvent} from "api/NoteEvent"
import {monthText} from "data/DateText"

// #region Types
type Props = {
  month: number
  noteEventList: NoteEvent[]
}

// #endregion

export default function DateEventView_List(props:Props) {
  let tempDate = 0
  return (
    <>
      <ListSubheader>{monthText[props.month]}</ListSubheader>
      {props.noteEventList.map((item,key)=>{
        let nextDate:number = item.date.getDate()
        let showDate = tempDate!==nextDate
        if(tempDate!==nextDate) tempDate = nextDate
        return <DateEventViewListItem noteEvent={item} key={key} showDate={showDate}/>
      })}
    </>
  )
}