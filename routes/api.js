const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

router.post("/", async (req, res) => {
  try {
    const newItem = new Item({
      name: req.body.name,
      amount: req.body.amount,
    });

    const item = await newItem.save();
    res.json(item);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ msg: "Item not found" });

    await item.remove();
    res.json({ msg: "Item removed" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
