import express from "express";
import  notes  from "../Controllers/nameController.js";

const router = express.Router();

router.post("/name", notes);

export default router;
