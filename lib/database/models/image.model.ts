import { Schema, model } from "mongoose";

export interface IImage extends Document {
  title: string;
  transformation: string;
  publicId: string;
  secureUrl: string;
  width?: number;
  height?: number;
  config?: Record<string, any>;
  transformationUrl?: string;
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  author?: Schema.Types.ObjectId;
}

const ImageSchema = new Schema<IImage>(
  {
    title: { type: String, required: true },
    transformation: { type: String, required: true },
    publicId: { type: String, required: true },
    secureUrl: { type: String, required: true },
    width: { type: Number },
    height: { type: Number },
    config: { type: Schema.Types.Mixed },
    transformationUrl: { type: String },
    aspectRatio: { type: String },
    color: { type: String },
    prompt: { type: String },
    author: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const ImageModel = model<IImage>("Image", ImageSchema);

export default ImageModel;
