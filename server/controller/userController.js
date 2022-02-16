const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

//creating user
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({
        message: "Content cannot be empty!"
      });
      return;
    }
  
    // Create a User
    const user = {
      Name: req.body.name,
      Number: req.body.number,
      Text: req.body.text,
      Time: req.body.time
    };
  
    // Creating User in DataBase
    User.create(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Can't Create User due to some error"
        });
      });
  };
  
  // Retrieve all Users.
  exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${title}%` } } : null;
  
    User.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({message:err.message || "Somthing Worng with Retrieving Data"});
      });
  };

  //finding user by id
  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    User.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({message: "Error retrieving User with id=" + id});
      });
  };

  //updating user by id
  exports.update = (req, res) => {
    const id = req.params.id;
    const user = {
      Name: req.body.name,
      Number: req.body.number,
      Text: req.body.text,
      Time: req.body.time
    };
    User.update(user, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update User with id=${id}`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating user with id=" + id
        });
      });
  };

  //deleting user by id
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    User.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe user was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete user with id=" + id
        });
      });
  };

  //For deleting all 
  exports.deleteAll = (req, res) => {
    User.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} User were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all users."
        });
      });
  };