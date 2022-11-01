import NoteEvent from "api/NoteEvent"
function randomDate(start:Date, end:Date) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
  
const getRandomDate =()=> randomDate(new Date(2022, 0, 1), new Date());
const data:NoteEvent[] = [
    {
        date: getRandomDate(),
        title: "標題123",
        text: "內文"
    },
    {
        date: getRandomDate(),
        title: "標題456",
        text: "內文內文"
    },
    {
        date: getRandomDate(),
        title: "標題789",
        text: "內文內文內文"
    },
    {
        date: getRandomDate(),
        title: "標題000",
        text: "內文內文內文內文"
    },
    {
        date: getRandomDate(),
        title: "標題111",
        text: "內文內文內文內文內文"
    }
]

export default data