import Mobile from "../../Models/Mobile"
import connectToDB from "../../MongoDB/mongooseConnector"

const handler = async (req, res) => {
    let mobiles = await Mobile.find()
    res.status(200).json(mobiles)
  }

export default connectToDB(handler) 
  