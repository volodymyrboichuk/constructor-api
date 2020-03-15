const express = require('express');
const router = express.Router();

const customersController = require('../controllers/customers.controller');

router.get('/', customersController.getAll);
router.get('/:id', customersController.getById);
router.post('/create', customersController.create);
router.put('/update', customersController.update);
router.delete('/delete', customersController.delete);

module.exports = router;