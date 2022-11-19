const Task = require('../models/task.model');
const moment = require('moment');

exports.getTasks = async function (req, res) {
    const tasks = await Task.find().exec();

    const mapTasks = tasks.map(task => {
        return {
            name: task.name,
            description: task.description,
            workerResponsible: task.workerResponsible,
            dateOfRegistration: task.dateOfRegistration
        }
    })

    return res.status(200).json({
        taskList: mapTasks
    })
}

exports.getTask = async function (req, res) {
    const task = await Task.findOne({ name: req.params.name });
    if (task === null) {
        return res.status(404).json({
            message: `Task of name: ${task} does not exist`
        })
    }

    return res.status(200).json({
        name: task.name,
        description: task.description,
        workerResponsible: task.workerResponsible,
        dateOfRegistration: task.dateOfRegistration
    })
}

exports.addTask = async function (req, res) {
    const searchTask = await Task.findOne({ name: req.body.name });
    if (searchTask) {
        return res.status(400).json({
            message: 'Task exists'
        })
    }

    const workerResponsible = {
        name: req.body.workerResponsible.name,
        surname: req.body.workerResponsible.surname,
        function: req.body.workerResponsible.function
    }

    const task = new Task({
        name: req.body.name,
        description: req.body.description,
        workerResponsible: workerResponsible,
        dateOfRegistration: moment(req.body.dateOfRegistration).format('YYYY-MM-DD')
    })

    try {
        if (task) {
            await task.save();
            return res.status(201).json({
                message: 'Task has been added.',
                task: task
            })
        }
    } catch (error) {
        console.error('Something went wrong: ' + error)
    }
}

exports.deleteTask = async function (req, res) {
    const foundTask = await Task.find({ name: req.params.name });
    if (foundTask === null) {
        return res.status(404).json({
            message: `Task of name: ${req.params.name} does not exist`
        })
    }

    try {
        await Task.deleteOne({ name: req.params.name });
        return res.status(200).json({
            message: 'Task has been deleted'
        })
    } catch (error) {
        console.log('Something went wrong! ' + error);
    }
}

exports.editTask = async function (req, res) {
    const foundTask = await Task.findOne({ name: req.params.name });
    if (foundTask === null) {
        return res.status(404).json({
            message: `Task of name: ${req.params.name} does not exist`
        })
    }

    try {
        await Task.findByIdAndUpdate(foundTask._id, {
            name: req.body.name,
            description: req.body.description,
            workerResponsible: req.body.workerResponsible,
            dateOfRegistration: req.body.dateOfRegistration
        }, { new: true });

        return res.status(200).json({
            message: `Task: ${req.body.name} has been updated.`
        })
    } catch (error) {
        console.log(`Something went wrong! Error: ${error}`);
    }

}
