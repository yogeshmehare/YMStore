import Product from "../../Models/Product"
import connectToDB from "../../MongoDB/mongooseConnector"

const handler = async (req, res) => {
    let products = await Product.find()
    res.status(200).json(products)
  }

export default connectToDB(handler) 
  