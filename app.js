const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => res.sendFile(__dirname + '/views/Home.html'));
 
app.get('/about', (req, res) => res.sendFile(__dirname + '/views/About.html'));

app.get('/photos', (req, res) => res.sendFile(__dirname + '/views/Photos.html'));

app.get('/works', (req, res) => res.sendFile(__dirname + '/views/Works.html'));
   

app.listen(3000, ()=>{
    console.log("escuchando puerto 3000");
});