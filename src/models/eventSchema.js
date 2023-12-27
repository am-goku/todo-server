import mongoose, { Schema, model } from "mongoose";

const eventSchema = new Schema(
  {
    userId: {
        type: mongoose.Types.ObjectId,
        require: true,
        ref: "user"
    },
    eventName: {
        type: String,
        reuire: true,
        trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Event = model("event", eventSchema);
