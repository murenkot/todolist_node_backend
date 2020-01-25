const express = require('express');
const router = express.Router();
const ctlr = require('../controllers');


// '/api/v1/todos'

// NOTE showAll 
router.get('/', ctlr.todos.showAll);

// NOTE add one todo
router.post('/', ctlr.todos.create);

// delete todo
router.delete('/:id', ctlr.todos.deleteTodo);

// update todo
router.put('/update/:id', ctlr.todos.updateTodo);

// edit todo
router.put('/edit/:id', ctlr.todos.editTodo);

module.exports = router;
