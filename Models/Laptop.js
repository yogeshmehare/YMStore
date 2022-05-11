const mongoose = require('mongoose');

const LaptopSchema = new mongoose.Schema({
    BrandName :{type:String, required:true},
    Title : {type:String, required:true},
    Slug : {type:String, required:true},
    Desc : {type:String, required:true},
    Image : {type:String, required:true},
    ColorVariant : {type:String},
    Size : {type:String},
    Category : {type:String, required:true},
    Price : {type:Number, required:true},
    Quantity : {type:Number, required:true},
    ReviewCount :{type:Number},
    FavProduct :{type:Boolean}
},{timestamps:true});

mongoose.models = {}
export default mongoose.model("Laptop",LaptopSchema);