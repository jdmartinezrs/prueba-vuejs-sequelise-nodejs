const { Personas } = require('../models');

const personasRepository = {
    async findAllOrganized() {
        return await Personas.findAll({
            order: [['nombre', 'ASC']]  // Ordena por nombre alfabéticamente
        });
    },
    async findById(id) {
        return await Personas.findByPk(id);
    },
    async createPersona(personaData) {
        return await Personas.create(personaData);
    },
    async updatePersona(id, personaData) {
        const persona = await Personas.findByPk(id);
        if (persona) {
            return await persona.update(personaData);
        }
        throw new Error('Persona not found');
    },
    async deletePersona(id) {
        const persona = await Personas.findByPk(id);
        if (persona) {
            return await persona.destroy();
        }
        throw new Error('Persona not found');
    }
};

module.exports = personasRepository;
