import cloudinary from "../config/cloundinary";
import Project from "../models/Projects";
import { Request, Response } from "express";

export const getAllProjects = async (req: Request, res: Response) => {
  try {
    const project = await Project.find({});
    res.status(200).json({ success: true, data: project });
  } catch (error) {
    console.log("failed to get data", error);
    res.status(404).json({ success: false, error: "failed to fetch" });
  }
};

export const getAllProjectsId = async (req: Request, res: Response) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ success: false, error: "not found" });
    }
    res.status(200).json({ success: true, data: project });
  } catch (error) {
    console.log("failed to get data", error);
    res.status(404).json({ success: false, error: "failed to fetch" });
  }
};

export const createProjects = async (req: Request, res: Response) => {
  try {
    let imageUrl = "";

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "projects",
      });
      imageUrl = result.secure_url;
    }

    const project = new Project({
      ...req.body,
      image: imageUrl,
    });

    const savedProject = await project.save();
    res.status(201).json({ success: true, data: savedProject });
  } catch (error) {
    console.error("failed creating project", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

export const updateProject = async (req: Request, res: Response) => {
  try {
    console.log("Updating id:", req.params.id);
    console.log("Request body:", req.body);

    const project = await Project.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!project) {
      return res
        .status(404)
        .json({ success: false, error: "Project not found" });
    }

    res.status(200).json({ success: true, data: project });
  } catch (error) {
    console.error("failed to update", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

export const deleteProject = async (req: Request, res: Response) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      res.status(404).json({ success: false, error: "not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Task deleted successfully" });
  } catch (error) {
    console.log("failed to update", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
};
