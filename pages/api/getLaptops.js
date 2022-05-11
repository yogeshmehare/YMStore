import Laptop from "../../Models/Laptop"
import connectToDB from "../../MongoDB/mongooseConnector"

const handler = async (req, res) => {
    let laptops = await Laptop.find()
    res.status(200).json(laptops)
  }

export default connectToDB(handler) 
  