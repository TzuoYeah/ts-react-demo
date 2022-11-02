//import {useState} from 'react'

import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import DateEventViewList from 'subfrature/DateEventView_List'
import NoteEvent from "api/NoteEvent"

// #region Type
type Props = {
  noteEventList: NoteEvent[];
}

type Group = {
  month: number;
  noteEventList: NoteEvent[];
}
// #endregion

/**
 * DateEven的清單
 */
export default function DateEventView({noteEventList}:Props) {
  const GroupList = reduceNoteEventList(noteEventList)
  sortMonthGroup(GroupList)  
  return (
    <Paper elevation={0} variant="outlined" sx={{p:'8px'}}>
      <Typography m={0} variant="h6" gutterBottom sx={{fontWeight:'bold'}}>檢視</Typography>
      {GroupList.map((group,key)=>
        <DateEventViewList month={group.month} noteEventList={group.noteEventList} key={key}/>
      )}
    </Paper>
  );
}

/**
 * 將無序的NoteEvent陣列轉成以月份為群組的Group陣列
 */
 function reduceNoteEventList(noteEventList:NoteEvent[]):Group[]{
  return noteEventList.reduce((groupList,dateEvent)=>{
    const month = dateEvent.date.getMonth()
    const groupIndex = groupList.findIndex(element => element.month ===month)??0
    if(groupIndex===-1)
      groupList.push( {month,noteEventList:[dateEvent]})
    else
      groupList[groupIndex].noteEventList.push(dateEvent)
    return groupList
  },new Array<Group>())
}

/**
 * 將Group陣列中的NoteEvent以日期做排序
 */
function sortMonthGroup(GroupList:Group[]){
  GroupList.forEach(element => element.noteEventList.sort((a,b) => a.date.getDate() - b.date.getDate() ));
}
