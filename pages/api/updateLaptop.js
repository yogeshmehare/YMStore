import Laptop from "../../Models/Laptop";
import connectToDB from "../../MongoDB/mongooseConnector"

const handler = async (req, res) => {
    if (req.method == 'POST') {
        let count = 0;
        count = (await Laptop.updateOne({_id:req.body.id},{FavProduct:req.body.FavProduct})).modifiedCount
        console.log(count);
        if(count==0){
            count = (await Mobile.updateOne({_id:req.body.id},{FavProduct:req.body.FavProduct})).modifiedCount
        }
        console.log(count);
        res.status(200).json({success : "success"})
    }else{
        res.status(400).json({error : "Error"})
    }
}

export default connectToDB(handler)
