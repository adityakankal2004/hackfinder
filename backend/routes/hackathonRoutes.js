import express from "express";
import {createHackathon,getAllHackathons,getHackathonById,deleteHackathon} from "../controllers/hackathonControllers.js";
import {protect} from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/",getAllHackathons);
router.get("/:id",getHackathonById);
router.post("/",protect,createHackathon);
router.delete("/:id",protect,deleteHackathon);

export default router;
