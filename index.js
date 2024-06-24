const express = require('express');
const cors = require('cors');
const { connections } = require('./configs/db'); 
const { moviesRouter } = require('./Routes/Movies.routes');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    credentials: true,
}));

app.get("/", (req, res) => {
    res.send("Welcome to Invact database");
});

app.use("/movies", moviesRouter);

const startServer = async () => {
    try {
        await connections;
        console.log("Connected to DB");
        app.listen(8080, () => {
            console.log(`Server is listening on port 8080`);
        });
    } catch (error) {
        console.error("Failed to connect to DB:", error);
    }
};

startServer();
