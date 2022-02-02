const { Todo, User } = require('../models');

const todoController = {
  // get all thoughts
  getTodo(req, res) {
    Todo.find()
      .sort({ createdAt: -1 })
      .then((dbThoughtData) => {
        res.json(dbTodoData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  
  // create a thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((dbThoughtData) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: dbThoughtData._id } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: 'Todo created but no user with this id!' });
        }

        res.json({ message: 'Todo successfully added!' });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  
  // delete thought
  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          return res.status(404).json({ message: 'No thought with this id!' });
        }

        // remove thought id from user's `thoughts` field
        return User.findOneAndUpdate(
          { thoughts: req.params.thoughtId },
          { $pull: { thoughts: req.params.thoughtId } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: 'Thought created but no user with this id!' });
        }
        res.json({ message: 'Thought successfully deleted!' });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },


module.exports = todoController;
