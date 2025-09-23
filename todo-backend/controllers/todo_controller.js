const Todo = require("../models/todomodel");
const logger = require("../utils/logger");

exports.getTodos = async (req, res) => {
    console.log("Fetching the Todos from DB");
    try {
        const todos = await Todo.find();
        console.log("Fetching all");
        res.status(200).json(todos);
    } catch (error) {
        console.log("Error fetching Todos");
        res.status(500).json({ error: "Failed to fetch todos" });
    }
};


exports.addTodos = async (req, res) => {
    const  title  = req.body;
    //console.log("Adding a new todo", req.body)
    console.log("Adding a new todo", title.todo)
    const newTodo = new Todo({
        title: title.todo
    })
    console.log("Adding the Todo to DB", newTodo)
    const saveTodo = await newTodo.save()
    console.log("Added Todo to DB", saveTodo)
    res.status(200).json(saveTodo)

}