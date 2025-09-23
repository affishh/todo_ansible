const express = require("express")
const {getTodos, addTodos} = require("../controllers/todo_controller")

const router = express.Router()

router.get("/get-todo",getTodos )

router.post('/add-todo', addTodos)

module.exports = router