const API_URL = `${process.env.REACT_APP_API_URL }dateevent`

export interface NoteEvent {
    id:string
    date: Date
    title: string
    text: string
    state: string
}

/**
 * NoteEvent資料轉換顯示
 * @returns 
 */
 export function NoteEventMapping(data:any[]):NoteEvent[]{
  const result = new Array<NoteEvent>()
  
  data.forEach(item =>{
    result.push({
      id: item.id??'',
      date: new Date(item.date)??new Date(),
      title: item.title??'',
      text: item.text??'',
      state: item.state??'',
    } as NoteEvent)
  })  

  return result
}

/**
 * 取得NoteEvent所有資料
 * @returns 
 */
export function NoteEventGetAll(){
  return fetch(API_URL)
  .then(response => response.json())
  .then(data => data)
  .catch(error => error)
}

/**
 * 新增NoteEvent資料
 * @param data NoteEvent資料
 * @returns 
 */
export function NoteEventPost(data:NoteEvent){
  return fetch(API_URL, {
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
  })
  .then(response => response)
  .catch(error => error)
}
/**
 * 刪除NoteEvent資料
 * @param data NoteEvent資料
 * @returns 
 */
export function NoteEventDelete(id:string){
  return fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  })
  .then(response => response)
  .catch(error => error)
}