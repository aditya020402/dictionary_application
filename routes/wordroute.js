import express from "express";

import {checkingWork,findWord} from "../controllers/wordController.js";

const router = express.Router();

router.get("/",checkingWork);
router.get("/:id",findWord);

export default router;