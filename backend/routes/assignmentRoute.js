import express from "express";

import  { getAssignments, getAssignment} from "../controllers/assignmentController.js";

const router = express.Router();
router.get("/", getAssignments);
router.get("/:id", getAssignment);

export default router;