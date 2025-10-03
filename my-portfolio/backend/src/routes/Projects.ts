import express from "express";
import {
  createProjects,
  deleteProject,
  getAllProjects,
  getAllProjectsId,
  updateProject,
} from "../controllers/Projects";
import upload from "../middleware/multer";

const router = express.Router();
router.post("/", upload.single("image"), createProjects);
router.get("/", getAllProjects);
router.get("/:id", getAllProjectsId);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

export default router;
