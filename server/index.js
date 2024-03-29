/* eslint-disable no-undef */
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const { z } = require('zod');

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('Enter your database id');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }
});

const User = mongoose.model('User', userSchema);


const userValidationSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email()
});


app.post('/api/signup', async (req, res) => {
  const { name, email } = req.body;
  try {
    userValidationSchema.parse({ name, email });
    const newUser = new User({ name, email });
    await newUser.save();
    res.status(201).json({ message: 'Sign-up successful' });
  } catch (err) {

    if (err.errors) {
      res.status(400).json({ message: 'Invalid user data', error: err.errors });
    } else {
      res.status(500).json({ message: 'Sign-up failed', error: err.message });
    }
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
