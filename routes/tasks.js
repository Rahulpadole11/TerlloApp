// server/routes/tasks.js
import express from 'express';
const router = express.Router();

router.get('/tasks', (req, res) => {
  res.json([
    { id: 1, title: "First Task", status: "todo" },
    { id: 2, title: "Second Task", status: "doing" },
  ]);
});

export default router;
