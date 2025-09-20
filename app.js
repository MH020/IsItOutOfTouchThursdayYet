const express = require("express"); 
const app = express();

const currentDay = [1,2,3,4,5,6,7]

app.get("/", (req,res) => {
    const today = new Date().getDay(); 

    if(today === 4){
        res.sendFile(__dirname + "/public/outofTouch.html")
    } else {
        res.sendFile(__dirname + "/public/notOutOfTouch.html")
    }

})

app.get("/countdown", (req,res)=> {
    const today = new Date();
    const dayOfWeek = today.getDay();

    let daysUntilNextThursday = 4 - dayOfWeek;
    if(daysUntilNextThursday <= 0){
        daysUntilNextThursday += 7
    }
    const nextThursday = new Date(today)
    nextThursday.setDate(today.getDate() + daysUntilNextThursday)
    nextThursday.setHours(0, 0, 0, 0);

      const dkkTime = new Date(nextThursday.toLocaleString("en-US", { timeZone: "Europe/Copenhagen"})).getTime() - nextThursday.getTime();
 

    const distanceFromTodayToThursday = nextThursday.getTime() - today.getTime() + dkkTime; 

    const days = Math.floor(distanceFromTodayToThursday / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distanceFromTodayToThursday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distanceFromTodayToThursday % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distanceFromTodayToThursday % (1000 * 60)) / 1000);

    const output = {days: days,hours: hours,minutes:minutes, seconds: seconds}
    res.send(output)
})

app.get("/getVideo", (req,res) => {
    res.sendFile(__dirname + "/public/out_of_Touch.mp4")
})

app.get("/getPicture", (req,res) =>{
    res.sendFile(__dirname + "/public/frondendpicture3.jpg")
})

const PORT = 8080; 
app.listen(PORT, () => {
    console.log("app startet on", PORT); 
})