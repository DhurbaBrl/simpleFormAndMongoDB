const express = require('express');
const bodyParser = require('body-parser');
const User = require('../models/users');
const router = new express.Router();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/users', urlencodedParser, async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).render('sucess', { data: req.body });
    console.log(req.body);
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
});

module.exports = router;
