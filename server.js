// This is the main entry point to our app . in package.json

const express = require('express')

// For dotenv we need a file with our environment variables.
// so we will create a folder ' config ' and then a .env file.
const dotenv=require('dotenv')


// Now we load env variables.

dotenv.config({path:'./config/config.env'})

// Now it knows where to look

//we now initialize our app var with express.
const app = express();

// now we run the server with app.listen

const PORT = process.env.PORT ||3432

app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
