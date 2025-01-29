require('dotenv').config();
const PersonasService = require('../services/personasService');

const PersonasController = {
    async getAllusersController(req, res) {
        try {
            const personas = await PersonasService.getAllusers();
            res.json(personas);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async getUserByIdController(req, res) {
        try {
            const { id } = req.params;
            const persona = await PersonasService.getUserById(id);
            if (persona) {
                res.json(persona);
            } else {
                res.status(404).json({ message: 'Persona not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async createPersonaController(req, res) {
        try {
            const personaData = req.body;
            const nuevaPersona = await PersonasService.createPersona(personaData);
            res.status(201).json(nuevaPersona);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async updatePersonaController(req, res) {
        try {
            const { id } = req.params;
            const personaData = req.body;
            const persona = await PersonasService.updatePersona(id, personaData);
            res.json(persona);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async deletePersonaController(req, res) {
        try {
            const { id } = req.params;
            await PersonasService.deletePersona(id);
            res.status(204).send();  // No content response
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = PersonasController;
