import mongoose, { Schema, Document } from "mongoose";

interface Project extends Document {
  title: string;
  description: string;
  image: string;
  gitHubLink: string;
  demoLink?: string;
}

const projectSchema: Schema<Project> = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    gitHubLink: { type: String, required: true },
    demoLink: { type: String },
  },
  { timestamps: true }
);

const Project = mongoose.model<Project>("Project", projectSchema);
export default Project;
