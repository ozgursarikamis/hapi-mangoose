import mongoose, { Schema } from "mongoose";

const listingSchema = new Schema({
    _id: mongoose.SchemaTypes.ObjectId,
    id: Number,
    name: String,
    host_id: Number,
    host_name: String,
    neighbourhood: String,
    latitude: Number,
    longitude: Number,
    room_type: String,
    price: Number,
    minimum_nights: Number,
    number_of_reviews_ltm: Number,
    last_review: Date,
    // reviews_per_month: Number,
    calculated_host_listings_count: Number,
    availability_365: Number
});

export const ListingModel = mongoose.model('listings', listingSchema);