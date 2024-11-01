const express = require('express');
const router = express.Router();

// Mock data for demonstration
const users = [{ email: 'test@example.com', password: 'password' }];

router.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    res.json({ token: 'mock-jwt-token' });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

module.exports = router;
