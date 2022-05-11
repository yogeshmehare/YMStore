const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    FirstName: {type:String, required:true},
    LastName: {type:String, required:true},
    Email: {type:String, required:true},
    Password: {type:String, required:true},
},{timestamps:true});

mongoose.models = {}
export default mongoose.model("User",UserSchema);