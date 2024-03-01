const express = require("express");
const Recipe = require("../models/Recipes");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const recipes = Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
