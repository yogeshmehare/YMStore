import Laptop from "../../Models/Laptop";
import Mobile from "../../Models/Mobile";
import connectToDB from "../../MongoDB/mongooseConnector"

const handler = async (req, res) => {
    if (req.method == 'POST') {
        let mobiles = await Mobile.find()

        mobiles.forEach(mobile => {
            let title = mobile.Title.replaceAll(" ", "-")+"-"+mobile._id;
            console.log(title,mobile._id); 
            Mobile.updateOne(
                {_id:mobile._id}, 
                {Slug: title},
                {multi:true}, 
                  function(err, numberAffected){  
                  });
        })
        // let laptops = await Laptop.find()

        // laptops.forEach(laptop => {
        //     let title = laptop.Title.replaceAll(" ", "-")+"-"+laptop._id;
        //     console.log(title,laptop._id); 
        //     Laptop.updateOne(
        //         {_id:laptop._id}, 
        //         {Slug: title},
        //         {multi:true}, 
        //           function(err, numberAffected){  
        //           });
        // })
        res.status(200).json({success : "success"})
    }else{
        res.status(400).json({error : "Error"})
    }
}

export default connectToDB(handler)
