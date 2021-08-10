const express = require('express')
const fs = require('fs');
const app = express()
const UserService = require('./UserDets')

const router = express.Router();
let users = require('./UserDets');

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:id", (req, res) => {
  const found = users.some(user => user.id === parseInt(req.params.id));
  if (found) {
    res.json(users.filter(user => user.id === parseInt(req.params.id)));
  } 
  else {
    res.sendStatus(400);
  }
});

router.post("/", (req, res) => {

  const newUser = {
    id: UserService.createUID(),
    username: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    // profilePic: req.file.filename,
    password: UserService.hashPassword(req.body.password)
  };

  if (!newUser.name || !newUser.email) {
    return res.sendStatus(400);
  }

  users.push(newUser);
  res.json(users);
});


//Update User

router.put("/:id", (req, res) => {
  const found = users.some(user => user.id === parseInt(req.params.id));
  if (found) {
    const updateUser = req.body;
    users.forEach(user => {
      if (user.id === parseInt(req.params.id)) {
        user.name = updateUser.name ? updateUser.name : user.name;
        user.email = updateUser.email ? updateUser.email : user.email;
        user.mobile = updateUser.mobile ? updateUser.mobile : user.mobile;

        res.json({ msg: "User updated", user });
      }
    });

  } 
  else {
    res.sendStatus(400);
  }
}); 

module.exports = router;

