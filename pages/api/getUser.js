import User from "../../Models/User"
import connectToDB from "../../MongoDB/mongooseConnector"

const handler = async (req, res) => {
  let emailAndPassword = req.body;
  let user = await User.findOne({ Email: emailAndPassword.Email})
  if(user){
    if(user.Password == emailAndPassword.Password){
      let tempUser = {
        UserId: user._id,
        UserFirstName: user.FirstName,
        UserLastName: user.LastName,
        UserEmail: user.Email,
        UserLogInStatus: true
      }
      res.status(200).json({success:true, user: tempUser, msg:"Logged in Successfully"})
    }else{
      res.status(200).json({success:false, msg:"Invalid Credentials"})
    }
  }else{
    res.status(200).json({success:false, msg:"No User Found!!"})
  }
}

export default connectToDB(handler)
