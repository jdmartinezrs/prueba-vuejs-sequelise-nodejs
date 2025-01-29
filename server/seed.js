'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Insertar datos de prueba en la tabla 'Personas'
    await queryInterface.bulkInsert('Personas', [
      {
        nombre: 'Juan',
        apellido: 'Pérez',
        correo: 'juan.perez@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'María',
        apellido: 'González',
        correo: 'maria.gonzalez@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Carlos',
        apellido: 'Ramírez',
        correo: 'carlos.ramirez@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    // Eliminar los datos insertados
    await queryInterface.bulkDelete('Personas', null, {});
  }
};
