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

app.get("/getVideo", (req,res) => {
    res.sendFile(__dirname +"/public/out_of_Touch.mp4")
})

const PORT = 8080; 
app.listen(PORT, () => {
    console.log("app startet on", PORT); 
})