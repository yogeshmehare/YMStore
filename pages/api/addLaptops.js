import Laptop from "../../Models/Laptop";
import connectToDB from "../../MongoDB/mongooseConnector"

const handler = async (req, res) => {
    if (req.method == 'POST') {
        console.log(req.body);
        // let laptop = new Laptop({
        //     BrandName: req.body.BrandName,
        //     Title: req.body.Title,
        //     Slug: req.body.Title.replaceAll(" ","-"),
        //     Desc: req.body.Desc,
        //     Image: req.body.Image,
        //     ColorVariant: req.body.ColorVariant,
        //     Size: req.body.Size,
        //     Category: req.body.Category,
        //     Price: req.body.Price,
        //     Quantity:req.body.Quantity ,
        //     ReviewCount: req.body.ReviewCount,
        //     FavProduct: req.body.FavProduct
        //   })
        // await laptop.save()
        res.status(200).json({success : "success"})
    }else{
        res.status(400).json({error : "Error"})
    }
}

export default connectToDB(handler)
