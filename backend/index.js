
const emailData = require('./emailData/emailData');
const express = require("express");
const app = express();
const {seed, register, login, sendMessage, getMessages, deleteMessage} = require('./controller.js');

app.use(express.json());


app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST, GET, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
//Run this seed command in POSTMAN
app.post('/seed', seed);

app.get("/", function(req, res) {
  res.status(200).send(emailData);
});

app.post('/getMessages', getMessages)

app.post("/send", sendMessage);

app.post('/register', register)

app.post('/login', login)
app.delete('/:id', deleteMessage)

let port = process.env.PORT;
if(port == null || port == "") {
 port = 5000;
}

app.listen(port, function() {
 console.log(`Server started successfully on port ${port}`);
});