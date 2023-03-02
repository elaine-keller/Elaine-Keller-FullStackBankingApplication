var express = require('express');
var app     = express();
var cors    = require('cors');
var dal     = require('./dal.js');


// used to serve static files from public directory
app.use(express.static('public'));
app.use(cors());

// check if a user already exist by searching database for the email
app.get('/account/find/:email', function (req, res) {
    dal.find(req.params.email).
        then((user) => {
            console.log(user);
            res.send(user);            
        });    
});

// user login 
app.get('/account/login/:email/:password', function (req, res) {
    dal.login(req.params.email,req.params.password).
        then((document => {
            console.log(document);
            res.send(document);            
        }));    
});



//create user account
app.get('/account/create/:name/:email/:password', function (req, res) {

    // create user account
         dal.create(req.params.name,req.params.email,req.params.password).
            then((user) => {
                console.log(user);
                res.send(user);            
             });            
        
});



// all accounts
app.get('/account/all', function (req, res) {

    dal.all().
        then((docs) => {
            console.log(docs);
            res.send(docs);
    });
});

// Update balance route for ddeposit and withdraw
app.get('/account/balance/:email/:amount', function(req, res) {
    dal.depositOrWithdraw(
        req.params.email,
        Number(req.params.amount)
    ).then((document) => {
        console.log('this is the mongoDB document for the logged in user. It is beinging sent from index.js express server application to the front end client. ', document);
        res.send(document);
    });
});

var port = 3000;
app.listen(port);
console.log('Running on port: ' + port);