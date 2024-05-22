const express = require('express');
const router = express.Router();
const User = require('../../../shared-orm-library/src/models/User');

router.get('/', async (req, res) => {
  try {
    const { firstName, lastName } = req.query;

    const whereClause = {};
    if (firstName) whereClause.firstName = firstName;
    if (lastName) whereClause.lastName = lastName;

    const users = await User.findAll({ where: whereClause });
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);  // Detailed error logging
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const newUser = await User.create({ firstName, lastName, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

module.exports = router;
