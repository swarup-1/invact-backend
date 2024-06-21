const express = require('express');
const { MovieModel } = require('../Models/Movie.model');
const { validateRequestBody } = require('../Middlewares/BodyValidator');

const moviesRouter = express.Router();

moviesRouter.get("/", async (req, res) => {
    try{
        let data = await MovieModel.find()
        console.log('data:', data)
        res.send(data)
    }catch(err){
        res.send(err.message)
        console.log('err:', err)
    }
})
moviesRouter.get("/:id", async (req, res) => {
    const ID = req.params.id
    try{
        let data = await MovieModel.findById(ID)
        res.send(data)
    }catch(err){
        res.send(err.message)
        console.log('err:', err)
    }
})

moviesRouter.post("/", validateRequestBody, async (req, res) => {
    let payload = req.body
    try{
        let data = new MovieModel(payload)
        await data.save();
        res.send("New Film Added")
    }catch(err){
        console.log('err:', err)
    }
})
moviesRouter.patch("/:id", validateRequestBody, async (req, res) => {
    let ID = req.params.id
    let payload = req.body
    try{
        let data = await MovieModel.findByIdAndUpdate({_id:ID},payload)
        res.send(data)
    }catch(err){
        console.log('err:', err)
    }
})
moviesRouter.delete("/:id", async (req, res) => {
    let ID = req.params.id
    try{
        let data = await MovieModel.findByIdAndDelete({_id:ID})
        res.send("Data Deleted successfully!")
    }catch(err){
        console.log('err:', err)
    }
    
})




module.exports = {
    moviesRouter
}
