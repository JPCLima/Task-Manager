const Task = require('../models/task-model');

exports.getAllTasks = async (req, res) => {
  try {
    // EXECUTE QUERY
    const tasks = await Task.find();

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      tasks,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
