import {NoteEvent} from "api/NoteEvent"

function randomDate(start:Date, end:Date) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
  }

function randomText() {
    let ranfomStr = ""
    for(let i=0;i<1+Math.floor(Math.random() * 5);i++) ranfomStr += `內文${i}`
    return ranfomStr
  }
  
const getRandomDate =()=> randomDate(new Date(2022, 0, 1), new Date());
const data:NoteEvent[] = [
    {
        date: getRandomDate(),
        title: "標題",
        text: randomText(),
        state:"todo"
    },
    {
        date: getRandomDate(),
        title: "標題",
        text: randomText(),
        state:"todo"
    },
    {
        date: getRandomDate(),
        title: "標題",
        text: randomText(),
        state:"todo"
    },
    {
        date: getRandomDate(),
        title: "標題",
        text: randomText(),
        state:"doing"
    },
    {
        date: new Date(),
        title: "標題標題",
        text: randomText(),
        state:"doing"
    },
    {
        date: new Date(),
        title: "標題題標題標題",
        text: "內文內文內文內文內文內文內文內內文內內文內文內文內文內文內文內文內文內文內文文內文內文內文內文內文內文內文內文內文內文內文內文",
        state:"doing"
    },
    {
        date: new Date('2022-11-11T00:00:00'),
        title: "測試11",
        text: randomText(),
        state:"doing"
    },
    {
        date: new Date('2022-11-12T00:00:00'),
        title: "測試12ˋ",
        text: randomText(),
        state:"doing"
    },
    {
        date: new Date('2022-11-13T00:00:00'),
        title: "測試13ˋ",
        text: randomText(),
        state:"doing"
    },
    {
        date: getRandomDate(),
        title: "標題",
        text: randomText(),
        state:"done"
    },
    {
        date: getRandomDate(),
        title: "標題",
        text: randomText(),
        state:"done"
    }
]

export default data