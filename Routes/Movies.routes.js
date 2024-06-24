const express = require('express');
const { MovieModel } = require('../Models/Movie.model');

const moviesRouter = express.Router();

moviesRouter.get("/", async (req, res) => {
    try {
        console.log("Fetching all movies");
        const data = await MovieModel.find();
        console.log('Movies data fetched:', data);
        res.status(200).send(data);
    } catch (err) {
        console.error('Error fetching movies:', err);
        res.status(500).send({ message: 'Failed to fetch movies', error: err.message });
    }
});

moviesRouter.get("/:id", async (req, res) => {
    const ID = req.params.id;
    try {
        console.log(`Fetching movie with ID: ${ID}`);
        const data = await MovieModel.findById(ID);
        res.status(200).send(data);
    } catch (err) {
        console.error(`Error fetching movie with ID ${ID}:`, err);
        res.status(500).send({ message: `Failed to fetch movie with ID ${ID}`, error: err.message });
    }
});

moviesRouter.post("/", async (req, res) => {
    const payload = req.body;
    try {
        console.log("Adding new movie:", payload);
        const data = new MovieModel(payload);
        await data.save();
        res.status(201).send("New Film Added");
    } catch (err) {
        console.error('Error adding new movie:', err);
        res.status(500).send({ message: 'Failed to add new movie', error: err.message });
    }
});

moviesRouter.patch("/:id", async (req, res) => {
    const ID = req.params.id;
    const payload = req.body;
    try {
        console.log(`Updating movie with ID: ${ID}`);
        const data = await MovieModel.findByIdAndUpdate(ID, payload, { new: true });
        res.status(200).send(data);
    } catch (err) {
        console.error(`Error updating movie with ID ${ID}:`, err);
        res.status(500).send({ message: `Failed to update movie with ID ${ID}`, error: err.message });
    }
});

moviesRouter.delete("/:id", async (req, res) => {
    const ID = req.params.id;
    try {
        console.log(`Deleting movie with ID: ${ID}`);
        await MovieModel.findByIdAndDelete(ID);
        res.status(200).send("Data Deleted successfully!");
    } catch (err) {
        console.error(`Error deleting movie with ID ${ID}:`, err);
        res.status(500).send({ message: `Failed to delete movie with ID ${ID}`, error: err.message });
    }
});

module.exports = {
    moviesRouter
};
