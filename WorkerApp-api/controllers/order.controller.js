const Order = require('../models/order.model');

exports.getOrders = async function (req, res) {
    const foundOrders = await Order.find();

    const orders = foundOrders.map(order => {
        return {
            name: order.name,
            principal: order.principal,
            deadline: order.deadline
        }
    })
    return res.status(200).json({
        orderList: orders
    })
}

exports.getOrder = async function (req, res) {
    const order = await Order.findOne({ name: req.params.name });
    if (order === null) {
        return res.status(404).json({
            message: `There is no order of name: ${req.params.name}`
        })
    }

    return res.status(200).send(order);
}

exports.addOrder = async function (req, res) {
    const foundOrder = await Order.findOne({ name: req.body.name });
    if (foundOrder) {
        return res.status(404).json({
            message: `Order of the name: ${req.body.name} exsist`
        })
    }

    const principal = {
        name: req.body.principal.name,
        surname: req.body.principal.surname,
        function: req.body.principal.function
    }

    const order = new Order({
        name: req.body.name,
        principal: principal,
        deadline: req.body.deadline
    });

    try {
        await order.save();
        return res.status(201).json({
            message: 'Order has been added.'
        })
    } catch (error) {
        console.log(`Something went wrong! Details: ${error}`);
        return res.status(500).json({
            message: `Error!`
        })
    }
}

exports.editOrder = async function (req, res) {
    const foundOrder = await Order.findOne({ name: req.params.name });
    if (foundOrder === null) {
        return res.status(404).json({
            message: `Order of name: ${req.body.name} does not exists`
        })
    }

    try {
        await Order.findByIdAndUpdate(foundOrder._id, {
            name: req.body.name,
            principal: req.body.principal,
            dealine: req.body.deadline
        }, { new: true });
        return res.status(200).json({
            message: `Order of name: ${req.body.name} has been updated`
        })
    } catch (error) {
        console.log(`Something went wrong! Error: ${error}`);
    }
}

exports.deleteOrder = async function (req, res) {
    const foundOrder = await Order.findOne({ name: req.params.name });
    if (foundOrder === null) {
        return res.status(404).json({
            message: `The order of name: ${req.params.name} does not exsist`
        })
    }

    try {
        await Order.deleteOne({ _id: foundOrder._id });
        return res.status(200).json({
            message: `The order has been deleted`
        })
    } catch (error) {
        console.error(`Something went wrong.Error: ${error}`);
        return res.status(500).json({
            message: `Something went wrong. Details: ${error}`
        })
    }
}