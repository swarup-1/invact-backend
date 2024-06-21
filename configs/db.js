const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', true);

const connections = mongoose.connect("mongodb+srv://swarupkadoli9:invact@cluster0.p8ptqyc.mongodb.net/invact?retryWrites=true&w=majority&appName=Cluster0");

module.exports = {
    connections
};
