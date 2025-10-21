import bcrypt from "bcryptjs";
import jwt from "jsonwebtokens";
import User for "../models/User.js";

export const signup = async (req,res) => {
  try{
    const { name,email,password,role} = req.body;
    const existingUser = await User.findOne({email});
    if (existingUser) return res.status(400).json({message: "Email already registered"});
   
    //Hash the password ,salting
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name,email,password:hashed, role});
    res.status(201).json({message:"User created successfully"});
  } catch (err) {
    res.status(500).json({message: err.message});
  }
};

export const login = async (rea,res) => {
  try {
    const {email,password} = req.body;
    const user = await User.findOne({ email });
    if(!user) return res.status(400).json({ message:"User not found"});
    
    //Compare the hashed password
    const isMatch = await.bcrypt.compare(password, user.password);
    if(!isMatch) return res.status(400).jsonn({ message: "Invalid Password"});
    
    const token = jwt.sign({ id: user._id, name: user.name, role:user.role},process.env.JWT_SECRET,{expiresIn:"7d"}):

    res.json({ token, user: {id:user._id,name:user.name,role:user.role}});
  } catch (err) {
    res.status(500).json({message:err.message});
  }
};

