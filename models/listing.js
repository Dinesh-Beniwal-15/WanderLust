const mongoose = require('mongoose');
const Review = require('./review.js');
const { Schema } = mongoose;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
    filename: {
        type: String,
    },
    url: {
        type: String,
    }
},
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ]  ,
    owner :{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    geometry: {
        type: {
            type: String,
            enum: ["Point"],
            default: "Point"
    },
    coordinates: {
        type: [Number],
        required: true
    },
    },
    category: {
    type: String,
    enum: [
        "Trending",
        "Rooms",
        "Iconic Cities",
        "Mountains",
        "Castles",
        "Amazing Pools",
        "Camping",
        "Farms",
        "Arctic"
    ],
    default: "Trending"
    }
});

listingSchema.post('findOneAndDelete', async (listing) => {
    if(listing && listing.reviews.length > 0){
        await Review.deleteMany({_id: {$in: listing.reviews}});
    }
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;