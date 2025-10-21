import Hackathon from "../models/Hackathon.js";

export const createHackathon = async (req,res) => {
    try {
        const hackathon = await Hackathon.create({
            ...req.body,
            organizerId: req.user.id
    });
    res.status(201).json(hackathon);
  } catch (err){
    res.status(500).json({message: err.message});
  }
};

export const getAllHackathons = async (req,res) => {
  try {
    const hacks = await Hackathon.find().populate("organizerId", "name");
    res.json(hacks);
  } catch (err) {
    res.status(500).json({ message: err.message});
  }
};

export const getHackathonById = async (req,res) => {
  try {
    const hack = await Hackathon.findById(req.params.id).populate("organizerId","name");
    res.json(hack);
  } catch (err) {
    res.status(404).json({ message: "Hackathon not found"});
  }
};

export const deleteHackathon = async (req,res) => {
  try {
      const hack = await Hackathon.findById(req.params.id);
      if (!hack) return res.status(404).json({message:"Hackathon not found"});
      if (hack.organizerId.toString() !== req.user.id)
        return res.status(403).json({ message : "Not authorized"});

    await hack.deleteOne();
    res.json({message: "Hackathon deleted"});
  } catch (err) {
    res.status(500).json({message:err.message});
  }
};
