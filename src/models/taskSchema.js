import mongoose, { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    useId: {
        type: mongoose.Types.ObjectId,
        require: true,
        ref: "user"
    },

    eventId: {
        type: mongoose.Types.ObjectId,
        require: true,
        ref: "event"
    },

    task: {
        type: String,
        require: true,
        trim: true
    }

  },
  {
    timestamps: true,
  }
);

export const Tasks = model("task", taskSchema);
