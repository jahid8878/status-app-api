const express = require('express');
const router = express.Router();
const { getAllUsers, getOneUser, updateUser, deleteUser, createUser, loginUser } = require('../controllers/user.controller');

router.post('/', createUser)
router.post('/login', loginUser)
router.get('/', getAllUsers)
router.get('/:id', getOneUser)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router;