
const { MongoClient } = require('mongodb');

async function main() {

//const urlMongoDB = "mongodb+srv://cluster0.vwmeavx.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority";
const urlMongoDB = "mongodb+srv://elaineck:Cr4feMlKVBTTv8za@cluster0.vwmeavx.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(urlMongoDB);
try {
    // Connect to the MongoDB cluster
    await client.connect();
    console.log("Connected successfully to db server");
// Make the appropriate DB calls

} finally {
    // Close the connection to the MongoDB cluster
    await client.close();
}
}
main().catch(console.error);


//const url         = 'mongodb://localhost:27017';
let db            = null;
let collectionName ='users'
const dbName = "badbank";

/* 
// connect to mongo
MongoClient.connect(urlMongoDB, {useUnifiedTopology: true}, function(err, client) {
    console.log("Connected successfully to db server");

    // connect to myproject database
    db = client.db(dbName);
});
*/

// create user account
function create(name, email, password) {
    return new Promise((resolve, reject) => { ;
        const document = {name, email, password, balance: 0};
        const collection = db
            .collection(collectionName)
            .insertOne(
                document,
                {w:1},
                function(err, document) {
                console.log('Document inserted for ' + document + '. ' + 'Open Atlas MongoDB find  ' + dbName +' then collection named ' + collectionName)
                err ? reject(err) : resolve(document);
                }
            )
    })
}

// login to an account
function login(email, password) {
    return new Promise((resolve, reject) => {
        const authorizedUser = db
            .collection('users')
            .find({ email: email, password: password})
            .toArray(function(err, document) {
                console.log('array of logged in account document = ',document )
                err ? reject(err) : resolve(document)
            });
    });
}

// find user account
function find(email){
    return new Promise((resolve, reject) => {    
        const customers = db
            .collection('users')
            .find({"email": email})
            .toArray(function(err, docs) {
                err ? reject(err) : resolve(docs);
        });    
    })
}

// all users - return all users by using the collection.find method
function all(){
    return new Promise((resolve, reject) => {    
        const customers = db
            .collection('users')
            .find({})
            .toArray(function(err, documents) {
                err ? reject(err) : resolve(documents);
        });    
    })
}

// update balance
function depositOrWithdraw(email, amount){
    return new Promise((resolve, reject) => {    
        const customers = db
            .collection('users')            
            .findOneAndUpdate(
                {email: email},
                { $inc: { balance: amount}},
                { returnDocument: "after" },
                function (err, document) {
                    console.log('$' + amount + 'to balance for ' + email + document.value.balance + ' Open Atlas MongoDB find ' + dbName +' then collection named ' + collectionName)
                    //err ? reject(err) : affected(document);
                    err ? reject(err) : resolve(document)
                }
            )       
    });    
}

module.exports = {create, all, login, depositOrWithdraw}
