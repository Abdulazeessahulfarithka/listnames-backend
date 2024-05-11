import express from "express";
import { notes, user } from "../Controllers/nameController.js";

const router = express.Router();

router.post("/name", notes);
router.get("/create", user);

export default router;
