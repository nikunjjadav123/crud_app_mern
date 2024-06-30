import UserModels from "../model/userModel.js";

/* CREATE INSERT USER DATA API  */

export const create = async(req,res)=>{
    try{
        const userData = new UserModels(req.body);
        if(!userData){
            return res.status(404).json({msg:"User Data Not Found"});
        }
       const savedData = await userData.save();
        res.status(200).json(savedData);
        // res.send(userData);
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

/* Get One User */

export const getOne = async(req,res)=>{
    try{
        const id = req.params.id;
        const userExist = await UserModels.findById(id);
        if(!userExist){
            return res.status(404).json({msg:"User not found."});
        }
        res.status(200).json(userExist);

    }catch(error){
        res.status(500).json({error:error});
    }
}

/* Update an user */

export const updateUser = async(req,res)=>{
    try{
        const id = req.params.id;
        const userExist = await UserModels.findById(id);
        if(!userExist){
            return res.status(404).json({msg:"User not found."});
        }
        const updatedData = await UserModels.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json(updatedData);

    }catch(error){
        res.status(500).json({error:error});
    }
}


/* Delete an user */

export const deleteUser = async(req,res)=>{
    try{
        const id = req.params.id;
        const userExist = await UserModels.findById(id);
        if(!userExist){
            return res.status(404).json({msg:"User not found."});
        }
        await UserModels.findByIdAndDelete(id);
        res.status(200).json("{msg:User Deleted Successfully.}");

    }catch(error){
        res.status(500).json({error:error});
    }
}