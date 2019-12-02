//import express form 'express'; //ES Modules
//in Node.js we'll import files using this syntax
const express = require("express");//CommonJS Modules

const db = require('./data/hubs-model.js'); // <<<<<<1: import the database file

const server = express();

server.get('/', (req, res) => {
    // res.send({ api: 'up and running...'})
})

//list of hubs GET /hubs <<< 2: implement endpoint
server.get('/hubs', (req, res) => {
    //get the list of hubs from the database
    db.find()
        .then(hubs => {
            res.status(200).json(hubs);
        })
        .catch (error => {
            console.log('error on Get /hubs', error);
            res
            .status(500)
            .json({errorMessage: "error getting list of hubs from database"});
        })
})


//add a hub

//remove a hub by it's id

//update a hub, poassing the ida nd the changes

const port = 4000;
server.listen(port, () => 
console.log(`\n** API running on port ${port} **\n`)
);

