const express = require("express");
const router = express.Router(); //instance of router
const {getCollection} = require("./models/index");
const {ObjectId} = require("mongodb");

//POST|Create /todos
router.post("/todos", async (req, res) => {
    const collection = getCollection();
    let {todo} = req.body;

    todo = JSON.stringify(todo);

    const newTodo = await collection.insertOne({todo, status: false});

    res.status(201).json({todo, status: false, _id: newTodo.insertedId});
});

//GET|Read /todos
router.get("/todos", async (req, res) => {
    const collection = getCollection();
    const todos = await collection.find({}).toArray();

    res.status(200).json(todos);
});

//PUT|Update /todos/:id
router.put("/todos/:id", async (req, res) => {
    const collection = getCollection();
    const _id = new ObjectId(req.params.id);
    const {status} = req.body;

    if (typeof status !== "boolean") {
        return res.status(400).json({ mssg: "invalid status" });
    }

    const updatedTodo = await collection.updateOne({ _id }, { $set: { status: !status } });
    res.status(200).json(updatedTodo);
});

//DELETE /todos/:id
router.delete("/todos/:id", async (req, res) => {
    const collection = getCollection();
    const _id = new ObjectId(req.params.id);

    const deletedTodo = await collection.deleteOne({_id});
    res.status(200).json(deletedTodo);
});

module.exports = router;