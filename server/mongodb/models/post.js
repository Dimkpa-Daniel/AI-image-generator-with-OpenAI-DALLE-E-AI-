import mongoose from "mongoose";


// Creating a schema
const Post = new mongoose.Schema({
    name: {type: String, required: true},
    prompt: {type: String, required: true},
    photo: {type: String, required: true},
});

// Creating a model of the schema
const PostSchema = mongoose.model('Post', Post);

export default PostSchema;