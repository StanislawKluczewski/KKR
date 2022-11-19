const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const yaml = require('js-yaml');
const fs = require('fs');
const data = yaml.load(fs.readFileSync('./config/data.source.yaml', 'utf8'));

// Routes
const workerRoutes = require('./routes/worker.route');
const taskRoutes = require('./routes/task.route');
const userRoutes = require('./routes/user.route');
const orderRoutes = require('./routes/order.route');
const reportRoutes = require('./routes/report.route');

const mongoUrl = 'mongodb://' + data.mongo.host + '/' + data.mongo.db;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/workers', workerRoutes);
app.use('/tasks', taskRoutes);
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);
app.use('/reports', reportRoutes);

// Connetcting to MongoDB
mongoose.connect(mongoUrl, { useNewUrlParser: true }).then(
    console.log('Connected to database')
).catch(error => {
    console.log('Connection failed! ' + error);
})

module.exports = app;