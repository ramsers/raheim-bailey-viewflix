const express = require('express');
const app = express();
const videosRoute = require('./routes/routes');

app.get('/', (req, res) => {
    res.send("Hello Brave new World");
})

app.use('/videos', videosRoute);

app.listen(8080, ()=> {
    console.log("Server started at 8080");
})