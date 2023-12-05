const { DataTypes } = require("sequelize");

const Contact = (sequelize) => {
  sequelize.define("Contact", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [2,100]
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    favorite: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },{
    timeStamps: false
  })
}

module.exports = Contact;