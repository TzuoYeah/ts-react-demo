import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'

import DateEventViewList from 'subfrature/DateEventView_List'
import {NoteEvent} from "api/NoteEvent"

// #region Types
type Props = {
  dateEventData: NoteEvent[]
  viewSate:string
}

type Group = {
  month: number
  dateEventData: NoteEvent[]
}
// #endregion

/**
 * DateEven的清單
 */
export default function DateEventView({dateEventData,viewSate='doing'}:Props) {
  const stateList = getStateList(dateEventData,viewSate)
  const groupList = reduceDateEventData(stateList)
  sortMonthGroup(groupList)
  

  return (
    <Paper elevation={0} variant="outlined" sx={{p:'8px'}}>
      <Typography m={0} variant="h6" gutterBottom sx={{fontWeight:'bold'}}>檢視</Typography>
      <List
      sx={{
        width: '100%',
        '& ul': { padding: 0 },
        overflow: 'auto',
        maxHeight: 600,
      }}
      subheader={<li />}
      >
        {groupList.map((group,key)=>
          <li  key={key}>
            <ul>
              <DateEventViewList month={group.month} dateEventData={group.dateEventData}/>
            </ul>
          </li>
        )}
      </List>
    </Paper>
  );
}

/**
 * 將無序的NoteEvent陣列轉成以月份為群組的Group陣列
 */
 function reduceDateEventData(dateEventData:NoteEvent[]):Group[]{
  return dateEventData.reduce((groupList,dateEvent)=>{
    const month = dateEvent.date.getMonth()
    const groupIndex = groupList.findIndex(element => element.month ===month)??0
    if(groupIndex===-1)
      groupList.push( {month,dateEventData:[dateEvent]})
    else
      groupList[groupIndex].dateEventData.push(dateEvent)
    return groupList
  },new Array<Group>())
}

/**
 * 將Group陣列中的NoteEvent以日期做排序
 */
function sortMonthGroup(GroupList:Group[]){
  GroupList.forEach(element => element.dateEventData.sort((a,b) => a.date.getDate() - b.date.getDate() ));
}

/**
 * 取得符合狀態的NoteEvent陣列
 */
function getStateList(dateEventData:NoteEvent[],state:string){
  return dateEventData.reduce((groupList,dateEvent)=>{
    if(dateEvent.state === state) groupList.push(dateEvent)
    return groupList
  },new Array<NoteEvent>())
}