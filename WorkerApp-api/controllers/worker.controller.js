const Worker = require('../models/worker.model');

exports.getWorkers = async function (req, res) {
    const workers = await Worker.find().exec();

    const mapWorkers = workers.map(worker => {
        return {
            name: worker.name,
            surname: worker.surname,
            function: worker.function,
            age: worker.age
        }
    })

    return res.status(200).json({
        workerList: mapWorkers
    })
}

exports.getWorkerByName = async function (req, res) {
    const foundWorker = await Worker.findOne({ name: req.params.name });
    if (foundWorker === null) {
        return res.status(404).json({
            message: `Worker of name: ${req.params.name} does not exist.`
        })
    }

    return res.json({
        name: foundWorker.name,
        surname: foundWorker.surname,
        function: foundWorker.function,
        age: foundWorker.age
    })
}

exports.addWorker = async function (req, res) {
    const worker = new Worker({
        name: req.body.name,
        surname: req.body.surname,
        function: req.body.function,
        age: req.body.age
    })
    await worker.save();
    return res.status(201).json({
        worker: worker
    })
}

exports.editWorker = async function (req, res) {
    let foundWorker = await Worker.findOne({ name: req.params.name, surname: req.body.surname }).exec();
    if (foundWorker === null) {
        return res.status(404).json({
            message: `Worker of name: ${req.params.name} does not exist.`
        })
    }

    try {
        await Worker.findByIdAndUpdate(foundWorker._id, {
            name: req.body.name !== foundWorker.name ? req.body.name : foundWorker.name,
            surname: req.body.surname !== foundWorker.surname ? req.body.surname : foundWorker.surname,
            function: req.body.function !== foundWorker.function ? req.body.function : foundWorker.function,
            age: req.body.age !== foundWorker.age ? req.body.age : foundWorker.age,
        })
        return res.status(200).json({
            message: `Worker of name: ${req.body.name} has been updated`
        })
    } catch (error) {
        console.error(`Something went wrong! Error: ${error}`);
    }
}

exports.deleteWorker = async function (req, res) {
    const foundWorker = await Worker.findOne({ name: req.params.name });
    if (foundWorker === null) {
        return res.status(404).json({
            message: `Worker of name: ${req.params.name} does not exist.`
        })
    }
    await Worker.deleteOne({ name: foundWorker.name })
    return res.status(200).json({
        message: `Worker of name: ${req.params.name} hass been deleted.`
    })
}
