const User = require('../model/user.model')
const getUsers = async (req,res) => {
    try{
        const users = await User.find();
        return res.status(200).json(users);
    }
   catch(err){
    return res.status(400).json({"msg":"something went wrong!!"});
   }
}

module.exports ={
    getUsers: getUsers
}