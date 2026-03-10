import express from "express";
import {runQuery } from "../controllers/queryController.js"
const router = express.Router();

router.post("/", runQuery);

export default router;

