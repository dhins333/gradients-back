const express = require('express');
const path = require('path');
const api = require('./routes/api');
require('./db/db');

const app = express();


app.use(express.static(path.join(__dirname,'..','public')));
app.use(express.json());
app.use(api);

app.get('*',(req,res) => {
    res.status(200).sendFile(path.join(__dirname,'..','public','index.html'));
})


app.listen(process.env.PORT);
