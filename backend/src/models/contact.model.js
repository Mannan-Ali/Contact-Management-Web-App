import mongoose from "mongoose";
const ContactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name  is required "],
            lowercase: true,
            trim: true,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            lowercase: true,
            trim: true,
            // This regex ensures a standard email format
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        phone: {
            type: String, //not number as user but input number from 0...
            required: [true, "Phone Number is Required"],
            trim: true, //remove whitespace
        },
        message: {
            type: String,
        },
    },
    { timestamps: true }
);

export const Contact = mongoose.model("Contact", ContactSchema);
