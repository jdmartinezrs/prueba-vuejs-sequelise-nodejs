const personasRepository = require('../repositories/personasRepository');

const PersonasService = {
    async getAllusers() {
        try {
            return await personasRepository.findAllOrganized();
        } catch (error) {
            throw new Error(error.message);
        }
    },
    async getUserById(id) {
        try {
            return await personasRepository.findById(id);
        } catch (error) {
            throw new Error(error.message);
        }
    },
    async createPersona(personaData) {
        try {
            return await personasRepository.createPersona(personaData);
        } catch (error) {
            throw new Error(error.message);
        }
    },
    async updatePersona(id, personaData) {
        try {
            return await personasRepository.updatePersona(id, personaData);
        } catch (error) {
            throw new Error(error.message);
        }
    },
    async deletePersona(id) {
        try {
            return await personasRepository.deletePersona(id);
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

module.exports = PersonasService;
