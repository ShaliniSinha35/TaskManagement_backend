const express = require('express');
const router = express.Router();
const { validateTask } = require('../middlewares/Validate');
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  getAllTasks,
  updateStatus,
} = require('../Controllers/taskController');

// POST /tasks: Add a new task
router.post('/tasks', validateTask, createTask);

// GET /tasks: Get all tasks with filters
router.get('/tasks', getTasks);

router.get('/alltasks', getAllTasks);

// PUT /tasks/:id: Update task by ID
router.put('/tasks/:id', validateTask, updateTask);
router.put('/updateStatustasks/:id', updateStatus);


// DELETE /tasks/:id: Delete task by ID
router.delete('/tasks/:id', deleteTask);

module.exports = router;
