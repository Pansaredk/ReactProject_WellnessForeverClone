const mongoose = require("mongoose");

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/spark", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch((error) => {
    console.error("MongoDB connection failed:", error);
});

// Define Schema
const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Create Model
const User = mongoose.model("User", UserSchema);

module.exports = User;
