const mongoose = require('mongoose');
const initdata=require('./data.js');
const Listing = require('../models/listing.js');
const initData = require("./data");

const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

main();
async function main() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log('MongoDB connection established');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

const initDB = async () => {
    await Listing.deleteMany({});

    const updatedData = initData.data.map((obj) => ({
        ...obj,
        owner: "69d603675cd425420f547cf0"
    }));

    await Listing.insertMany(updatedData); // ✅ correct variable

    console.log("Database initialized with sample data");
};

initDB();