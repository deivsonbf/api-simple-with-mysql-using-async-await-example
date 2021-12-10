const express = require('express');
const router = express.Router();

const defaultController = require('../controllers/default-controller')

// Rota GET
router.get('/', defaultController.allUsers);

// Rota POST
router.post('/', defaultController.insertUserOntwoTable);

router.get('/healthcheck', defaultController.healthCheck)

module.exports = router;