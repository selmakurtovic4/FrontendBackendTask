'use strict';

import {
  Model, UUIDV4
} from 'sequelize';

interface UserAttributes {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> 
  implements UserAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    _id!: string;
    firstName!: string;
    lastName!: string;
    email!: string;
    phoneNumber!: string;
    static associate(models: any) {
  
    }
  };
  User.init({
    _id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }, 
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};