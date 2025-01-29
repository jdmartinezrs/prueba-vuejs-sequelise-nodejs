'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Personas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Personas.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false  // Asegura que el campo 'nombre' sea requerido
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false  // Asegura que el campo 'apellido' sea requerido
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,  // Asegura que el campo 'correo' sea requerido
      unique: true,      // Asegura que el campo 'correo' sea único
      validate: {
        isEmail: true     // Valida que el formato del correo sea correcto
      }
    }
  }, {
    sequelize,
    modelName: 'Personas',
  });
  return Personas;
};
