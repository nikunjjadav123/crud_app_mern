import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    fname : {
        type: String,
        required : true
    },
    lname : {
        type: String,
        required : true
    },
    city : {
        type: String,
        required : true
    },
    email : {
        type: String,
        required : true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
});
 
const UserModels = mongoose.model("users",userSchema);

export default UserModels;