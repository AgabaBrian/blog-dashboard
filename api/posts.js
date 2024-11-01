const express = require('express');
const router = express.Router();

let posts = []; // In-memory store for simplicity

router.get('/posts', (req, res) => {
  res.json({ posts });
});

router.post('/posts', (req, res) => {
  const newPost = { id: Date.now().toString(), ...req.body, createdAt: new Date(), updatedAt: new Date() };
  posts.push(newPost);
  res.json(newPost);
});

router.put('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === req.params.id);
  if (post) {
    Object.assign(post, req.body, { updatedAt: new Date() });
    res.json(post);
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
});

router.delete('/posts/:id', (req, res) => {
  posts = posts.filter(p => p.id !== req.params.id);
  res.json({ message: 'Post deleted' });
});

module.exports = router;
