'use strict';

const express = require('express');

// .env file = secret key for doing API calls. THis file can access it but the user can't. Dotenv is a node package that allows secret things like that to be stored in the .env file 

require('dotenv').config();

const app = express();
app.use(express.static('public'));


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`derp listening on ${PORT}`));


// routes - URLs to request to get things back

// sending a request 'hello', send response 'Hello' 

app.get('/hello', (request, response) => {
    response.send('Hello jackass');
})



// every time make a change in the file need to restart the server. Just like liveserver, nodemon exists to restart whenever we do this (Nodemon replaces npm start)

app.get('/data', (request,response) => {
    let chris = {
        name: 'Chris',
        hair: 'brown',
        eyes: 'brown',
        favoriteFood: 'curry',
        favoriteDrink: 'beer'
    }
    response.status(200).json(chris);

})



// always put 404 at bottom, these go top to bottom checking if each one is applicable.
app.use('*', (request, response) => {

    response.status(404).send('Sorry, that route does not exist');

})

 // for this to work, have to remove the .git file from the public directory because that's repo inside a repo.