const Task = require('../models/task-model');

exports.getAllTasks = async (req, res) => {
  try {
    // EXECUTE QUERY
    const tasks = await Task.find();

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      data: {
        tasks,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getTask = async (req, res) => {
  try {
    // EXECUTE QUERY
    const task = await Task.findById(req.params.id);

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      data: {
        task,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createTask = async (req, res) => {
  try {
    // EXECUTE QUERY
    const newTask = await Task.create(req.body);

    // SEND RESPONSE
    res.status(201).json({
      status: 'success',
      data: {
        task: newTask,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateTask = async (req, res) => {
  try {
    // EXECUTE QUERY
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      task,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    // EXECUTE QUERY
    await Task.findByIdAndDelete(req.params.id);

    // SEND RESPONSE
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

//// Query Task
// STATUS
exports.getByStatus = async (req, res) => {
  try {
    // EXECUTE QUERY
    const tasks = await Task.find({ status: req.params.status });

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      data: {
        tasks,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

// PRIORITY
exports.getByStatus = async (req, res) => {
  try {
    // EXECUTE QUERY
    const tasks = await Task.find({ status: req.params.status });

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      data: {
        tasks,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
