import mongoose, { Schema } from "mongoose";

const coursesSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    image: String,
    rating: Number,
    numReviews: Number
});

export const CourseModel = mongoose.model('courses', coursesSchema);