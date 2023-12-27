import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },

    email: {
        type: String,
        require: true,
        trim: true,
    },

    password: {
        type: String,
        require: false,
    },

    profilePic: {
        type: String,
        require: false,
        trim: true
    },

    deleted: {
        type: Boolean,
        default: false
    },

    deleteReqest: {
        type: Date,
    }
},{
    timestamps: true,
})


export const Users = model("user", userSchema)