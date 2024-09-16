import User from '../model/userModel.js'

export const  create = async(req,res)=> {
    try{

        const userData = new User(req.body);

        if(!userData){
            return res.status(404).json({msg: "User data not found"});
        }

        const savedData = await userData.save();
        res.status(200).json({msg: "User Created Succesfully"});
    }
    catch(err){
        res.status(500).json({error:err})
    }
}

export const getAll =  async (req,res) => {
    try{
        const userData = await User.find();
        if(!userData){
            return res.status(404).json({msg:"Users not found"});
        }
        res.status(200).json(userData);
    }
    catch(err){
        res.status(500).json({error:err})
    }
}

export const  getById = async (req,res) =>{
    try{
            const id = req.params.id;
            const user = await User.findById(id);

            if(!user){
                return res.status(404).json({msg:"User not found"});
            }

            res.status(200).json(user);

    }
    catch(err){
        res.status(500).json({error:err});
    }
}

export const updateById = async (req,res) => {
    try{
        const id = req.params.id;

        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(401).json({msg: `${id} user not exist`});
        }

        const updatedData = await User.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json(updatedData);
    }
    catch(err){
        res.status(500).json({error:err});
    }
}

export const deleteById = async (req,res) =>{
    try{
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(401).json({msg: `${id} user not exist`});
        }

        const deletedData = await User.findByIdAndDelete(id);
        res.status(200).json(deletedData); 
    }
    catch(err){
        res.status(500).json({error:err});
    }
}