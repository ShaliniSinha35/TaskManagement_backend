const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');  // To generate UUID

const TaskSchema = new mongoose.Schema(
  {
    task_id: {
      type: String,
      default: () => uuidv4(),
      unique: true, 
      required: true, 
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: false,
      trim: true,
    },
    priority: {
      type: String,
      enum: ['high', 'medium', 'low'],
      default: 'medium',
    },
    status: {
      type: String,
      enum: ['completed', 'incomplete'],
      default: 'incomplete',
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;
