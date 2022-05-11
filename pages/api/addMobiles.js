import Mobile from "../../Models/Mobile";
import connectToDB from "../../MongoDB/mongooseConnector"

const handler = async (req, res) => {
    if (req.method == 'POST') {
        let mobile = new Mobile({
            BrandName: req.body.BrandName,
            Title: req.body.Title,
            Desc: req.body.Desc,
            Image: req.body.Image,
            ColorVariant: req.body.ColorVariant,
            Size: req.body.Size,
            Category: req.body.Category,
            Price: req.body.Price,
            Quantity:req.body.Quantity ,
            ReviewCount: req.body.ReviewCount,
            FavProduct: req.body.FavProduct
          })
        await mobile.save()
        res.status(200).json({success : "success"})
    }else{
        res.status(400).json({error : "Error"})
    }
}

export default connectToDB(handler)
