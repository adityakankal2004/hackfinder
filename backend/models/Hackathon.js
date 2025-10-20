import mongoose from "mongoose";

const hackathonSchema = new mongoose.Schema({
  title:String,
  organizerId:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
  location:String,
  startDate:Date,
  endDate:Date,
  type:String,
  description:String,
  registrationlink:String
});

export default mongoose.model("Hackathon",hackathonSchema);
