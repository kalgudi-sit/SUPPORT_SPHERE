import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;
console.log("Successfully connected to DB");

const ticketSchema = new Schema({
    title: {
        type: String,
        requiered: true
    },
    description: {
        type: String,
        requiered: true
    },
    category: {
        type: String,
        requiered: true
    },
    priority: {
        type: Number,
        requiered: true
    },
    progress: {
        type: Number,
        requiered: true
    },
    status: {
        type: String,
        requiered: true
    },
    active: {
        type: Boolean,
        requiered: true
    }
}, { timestamps: true });

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

export default Ticket;