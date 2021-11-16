const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'A task name is required'],
  },
  priority: {
    type: Number,
    default: 4,
    minimum: [1, 'priority must to be above 1'],
    maximum: [4, 'priority must be bellow 4'],
  },
  status: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  completionDate: {
    type: Date,
  },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
