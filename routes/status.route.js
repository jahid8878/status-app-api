const express = require('express');
const router = express.Router();
const {createStatus, getAllStatus, updateStatus, deleteStatus, updateStatusLiked } = require('../controllers/status.controller')


router.post('/', createStatus)
router.get('/', getAllStatus)
router.patch('/:id', updateStatus)
router.put('/:id', updateStatusLiked)
router.delete('/:id', deleteStatus)

module.exports = router;