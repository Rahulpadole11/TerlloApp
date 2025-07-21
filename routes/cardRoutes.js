import express from "express";
import { createCard, moveCard } from "../controllers/cardController.js";

const router = express.Router();

router.post("/:listId", createCard);
router.patch("/move", moveCard);

export default router;
