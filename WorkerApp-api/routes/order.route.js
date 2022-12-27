const express = require('express');
const router = express.Router();
const orderController = require("../controllers/order.controller");
const authorization = require('../helpers/check-auth');

router.get('/', orderController.getOrders);
router.get('/:name', orderController.getOrder);
router.post('/add-order', authorization.checkUserAuthorization, orderController.addOrder);
router.put('/edit-order/:name', authorization.checkUserAuthorization, orderController.editOrder);
router.delete('/delete-order/:name', authorization.checkUserAuthorization, orderController.deleteOrder);

module.exports = router;