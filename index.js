const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;
const users = require('./data/rugs.json');

const path = require('path');

const app = express();
app.use(express.json(), (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.static(path.join(__dirname, 'build')));

app.get('/rugs', (req, res, next) => {
    res.json(users);    
});

app.post('/confirm-payment', (req, res) => {
    console.log(req.body);
    res.json({ "status": 'SUCCESS', "confirmationNumber": "12345" });
});

//React build folder serve up
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.listen(port, ()=> console.log(`Listening on port ${port}`));

