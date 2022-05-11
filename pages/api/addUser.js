import User from "../../Models/User"
import connectToDB from "../../MongoDB/mongooseConnector"

const handler = async (req, res) => {
    if (req.method == 'POST') {
        let user = new User({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Email: req.body.Email,
            Password: req.body.Password ,
        })
        await user.save()
        res.status(200).json({success : true})
    }else{
        res.status(400).json({success : false})
    }
}

export default connectToDB(handler)
