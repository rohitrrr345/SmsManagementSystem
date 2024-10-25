import jwt from 'jsonwebtoken';
import User from '../models/User.js';


// Login function (already defined)
export const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  const isMatch = await user.comparePassword(password);
  if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ username: user.username, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};

// Register function
export const register = async (req, res) => {
  const { username, password } = req.body;

  // Check if the username is taken
  const existingUser = await User.findOne({ username });
  if (existingUser) return res.status(400).json({ message: 'Username already exists' });

  // Create a new user
  const user = new User({ username, password });
  await user.save();

  // Generate JWT for the new user
  const token = jwt.sign({ username: user.username, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.status(201).json({ token, message: 'User registered successfully' });
};
