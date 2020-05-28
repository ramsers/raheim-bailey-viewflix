const express = require('express');
const app = express();
const videosRoute = require('./routes/routes');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Hello Brave new World");
})

app.use('/videos', videosRoute);

app.listen(8080, ()=> {
    console.log("Server started at 8080");
})