import UserModels from "../model/userModel.js";

/* CREATE INSERT USER DATA API  */

export const create = async(req,res)=>{

    // try{
    //     const {fname,lname,city,email,password} = req.body;
    //     const newUser = new UserModels({
    //         fname,lname,city,email,password
    //     });
    //     await newUser.save();
    //     res.status(200).json({success:true,Message:'User Created Successfully',newUser});
    // }catch(error){
    //     res.status(500).json({error:error});
    // }

    try{
        const userData = new UserModels(req.body);
        if(!userData){
            return res.status(404).json({msg:"User Data Not Found"});
        }
       const savedData = await userData.save();
        res.status(200).json(savedData);
        res.send(userData);
    }catch(error){
        res.status(500).json({error:error});
    }
}

/* Get All User Data */

export const getAll = async(req,res)=>{
    try{
        const userData = await UserModels.find();
        
        if(!userData){
            return res.status(404).json({msg:"User Data Not Found"});
        }

        res.status(200).json(userData);

    }catch(error){
        res.status(500).json({error:error});
    }
}