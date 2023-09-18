const { User } = require('../models');

const userController = {
    // Gets All Users
    getAllUser(req, res) {
        User.find({})
          .populate({
            path: 'thoughts',
            select: '-__v'
          })
          .select('-__v')
          .sort({ _id: -1 })
          .then(dbUserData => res.json(dbUserData))
          .catch(err => {
            console.log(err);
            res.sendStatus(400);
          });
      },
        // Creates a New User
        createUser({ body }, res) {
            User.create(body)
              .then(dbUserData => res.json(dbUserData))
              .catch(err => res.json(err));
          },
        
          // Updates User by Id (just the username)
          updateUser({ params, body }, res) {
            User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
              .then(dbUserData => {
                if (!dbUserData) {
                  res.status(404).json({ message: 'No User found with this id!' });
                  return;
                }
                res.json(dbUserData);
              })
              .catch(err => res.json(err));
          },

    }