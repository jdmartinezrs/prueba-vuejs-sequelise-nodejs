'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Personas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false  // Asegura que el campo 'nombre' sea requerido
      },
      apellido: {
        type: Sequelize.STRING,
        allowNull: false  // Asegura que el campo 'apellido' sea requerido
      },
      correo: {
        type: Sequelize.STRING,
        allowNull: false,  // Asegura que el campo 'correo' sea requerido
        unique: true       // Asegura que el campo 'correo' sea único
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Personas');
  }
};
