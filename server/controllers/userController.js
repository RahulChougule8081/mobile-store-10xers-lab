const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/TempUser');
require('dotenv').config();

const signup = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashedPassword, role });
    res.status(201).json({ message: 'User created', user: { email: user.email, role: user.role } });
  } catch (error) {
    res.status(400).json({ error: 'Email already exists or invalid data' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { signup, login };
