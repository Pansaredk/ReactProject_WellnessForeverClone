const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./mongo"); // Import MongoDB model

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Test route
app.get("/", (req, res) => {
    res.send("Backend is running...");
});

// **Login Route**
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ status: "notexist", message: "User not found" });
        }

        if (user.password !== password) {
            return res.status(400).json({ status: "fail", message: "Incorrect password" });
        }

        res.status(200).json({ status: "exist", message: "Login successful" });

    } catch (error) {
        console.error("Error in Login:", error);
        res.status(500).json({ status: "fail", message: "Internal Server Error" });
    }
});

// **Signup Route**
app.post("/signup", async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ status: "exist", message: "Account already exists!" });
        }

        await User.create({ email, password });
        res.status(201).json({ status: "success", message: "Signup successful!" });

    } catch (error) {
        console.error("Error in Signup:", error);
        res.status(500).json({ status: "fail", message: "Internal Server Error" });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
