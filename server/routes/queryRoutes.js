const express = require("express");
const Query = require("../models/Query");
const router = express.Router();

router.post("/submit", async (req, res) => {
  try {
    const { name, email, contact, query } = req.body;

    if (!name || !email || !contact || !query) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newQuery = new Query({ name, email, contact, query });
    await newQuery.save();

    res.status(201).json({ message: "Query submitted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

router.get("/queries", async (req, res) => {
  try {
    const queries = await Query.find().sort({ createdAt: -1 });
    res.status(200).json(queries);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});
router.delete("/queries/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedQuery = await Query.findByIdAndDelete(id);

    if (!deletedQuery) {
      return res.status(404).json({ error: "Query not found" });
    }

    res.status(200).json({ message: "Query resolved and deleted" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Query.findOne({ name });
    if (!user || user.password !== password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, "your_secret_key", { expiresIn: "1h" });

    res.cookie("MERITORIOUS_LIBRARY_LOGIN_STATUS@1616", "true", {
      httpOnly: true,
      secure: true, 
      sameSite: "None",
    });

    res.json({ message: "Login successful", token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;