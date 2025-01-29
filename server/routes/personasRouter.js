const express = require('express');
const PersonasController = require('../controllers/personasController');

const router = express.Router();

router.get('/personas', PersonasController.getAllusersController);
router.get('/personas/:id', PersonasController.getUserByIdController);
router.post('/persons', PersonasController.createPersonaController);
router.put('/personas/:id', PersonasController.updatePersonaController);
router.delete('/personas/:id', PersonasController.deletePersonaController);

module.exports = router;



