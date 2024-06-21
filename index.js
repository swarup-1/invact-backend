const express = require('express');
const cors = require('cors');
const { connections } = require('./configs/db'); 
const { moviesRouter } = require('./Routes/Movies.routes');
require('dotenv').config()

const app = express();
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
    res.send("Welcome to Invact database");
})

app.use("/movies", moviesRouter)


app.listen(8080, async()=>{
    try {
        await connections;
        console.log("Connected to DB");
    } catch (error) {
        console.log(error);
    }
    console.log(`listening on port 8080`);
})