const express = require("express");
const router = express.Router(); //instance of router

//POST|Create /todos
router.post("/todos", (req, res) => {
    res.status(201).json({ mssg: "POST REQUEST TO /api/todos" });
});

//GET|Read /todos
router.get("/todos", (req, res) => {
    res.status(200).json({ mssg: "GET REQUEST TO /api/todos" });
});

//PUT|Update /todos/:id
router.put("/todos/:id", (req, res) => {
    res.status(200).json({ mssg: "PUT REQUEST TO /api/todos" });
});

//DELETE /todos/:id
router.delete("/todos/:id", (req, res) => {
    res.status(200).json({ mssg: "DELETE REQUEST TO /api/todos" });
});

module.exports = router;