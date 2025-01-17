const Task = require('../models/Task');

// Create a new task
const createTask = async (req, res) => {
    try {
      const task = new Task(req.body); // `task_id` will be auto-generated
      await task.save();
      res.status(201).json(task);
    } catch (error) {
      console.error("Error creating task:", error.message);
      res.status(500).json({ message: "Server Error" });
    }
  };
  


const getAllTasks = async (req, res) => {
    try {
  
      const tasks = await Task.find();
      res.json(tasks);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Server Error' });
    }
  };
// Get all tasks with optional filters
const getTasks = async (req, res) => {
  try {
    const { category, status } = req.query;
    const filter = {};

    if (category) filter.category = category;
    if (status) filter.status = status;

    const tasks = await Task.find(filter);
    console.log(tasks,"taskfilter")
    res.json(tasks);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update a task by ID
const updateTask = async (req, res) => {
    const { task_id } = req.params;
    const { title, category, priority, status } = req.body;
    console.log(await Task.find())
  
    try {
      const task = await Task.findOne({ task_id });
      console.log(task)
      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }
  
      // Update properties
      task.title = title || task.title;
      task.category = category || task.category;
      task.priority = priority || task.priority;
      task.status = status || task.status;
  
      await task.save();
      res.json(task);
    } catch (error) {
      console.error("Error updating task:", error.message);
      res.status(500).json({ message: "Server Error" });
    }
  };
  
  
  

// Delete a task by ID
const deleteTask = async (req, res) => {
    console.log("delete", req.params)

  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    await task.remove();
    res.json({ message: 'Task deleted' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  getAllTasks
};
