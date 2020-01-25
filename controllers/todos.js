const db = require('../models');

const showAll = (req, res) => {
    db.Todo.find({}).exec((err, allUsers) => {
        if (err) {
            return console.log(err)
        };
        res.json({
            status: 200,
            count: allUsers.length,
            data: allUsers,
        });
    });
};

const create = (req, res) => {
    db.Todo.create(req.body, (error, createdTodo) => {
        if (error) return console.log(error);
        res.json({
            status: 200,
            count: createdTodo.length,
            data: createdTodo,
            createdAt: new Date().toLocaleString()
        })
    })
}

const deleteTodo = (req, res) => {
    db.Todo.findByIdAndDelete(req.params.id, (error, deletedTodo) => {
        if (error) return console.log(error);
        res.json({
            status: 200,
            data: deletedTodo
        });
    });
}

const editTodo = (req, res) => {
    db.Todo.findByIdAndUpdate(req.params.id, {
        $set: {
            name: req.body.name,
        }
    }, (error, updatedTodo) => {
        if (error) return console.log(error);
        res.json({
            status: 200,
            data: updatedTodo,
        })
    })
}

const updateTodo = (req, res) => {
    db.Todo.findById(req.params.id, (error, foundTodo) => {
        if (error) return console.log(error);
        if (foundTodo.done) {
            foundTodo.done = false;
        } else {
            foundTodo.done = true;
        }
        foundTodo.save((err, updatedTodo)=> {
            if (err) console.log(err);
            res.json({
                status: 201,
                data: updatedTodo,
            });
        });

        

    })
}

module.exports = {
    showAll: showAll,
    create: create,
    deleteTodo: deleteTodo,
    updateTodo: updateTodo,
    editTodo,
}