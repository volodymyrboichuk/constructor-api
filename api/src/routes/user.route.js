const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.post('/create', userController.create);
router.put('/update', userController.update);
router.delete('/delete', userController.delete);

module.exports = router;