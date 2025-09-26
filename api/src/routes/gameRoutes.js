import { Router } from "express";
import { gameStart, pickCard, stop } from "../controllers/gameController.js";

const router = Router();

router.post("/start", gameStart);
router.post("/card", pickCard);
router.post("/stop", stop);

export default router;
