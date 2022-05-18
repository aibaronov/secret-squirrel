
const emailData = require('./emailData/emailData');
const express = require("express");
const app = express();

const userList = [];

app.use(express.json());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

app.get("/", function(req, res) {
  res.status(200).send(emailData);
});

app.post("/send", function(req, res){
  console.log("Post received");
  res.send('Message Received');
});

app.post('/register', function(req, res){
  let newUser = req.body;
  userList.push(newUser)
  console.log(userList);
  res.status(200).send('Registered user');
})

app.post('/login', function(req, res){
  console.log(req.body);
  let login = req.body;
  userList.forEach(user => {
    if(user.username === login.username && user.password === login.password){
        res.status(200).send('Log in accepted');
    }
  })
  res.status(400).send('Cannot find user');
})

let port = process.env.PORT;
if(port == null || port == "") {
 port = 5000;
}

app.listen(port, function() {
 console.log("Server started successfully");
});