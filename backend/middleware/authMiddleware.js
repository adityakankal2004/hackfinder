import jwt from "jsonwebtokens";
import dotenv from "dotenv";

dotenv.config();

export const protect = (req,res,next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if(!token) return res.status(401).json({message:"No tokens provided"});
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; //{id,role}
    next();

  }catch (error){
    res.status(401).json({message:"Invalid Token"});
  }
};
