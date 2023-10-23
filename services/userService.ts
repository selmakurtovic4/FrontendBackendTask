import { Sequelize, Model, ModelCtor } from 'sequelize';
import db from '../models';

interface UserAttributes {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string | null;
}
type UserData = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  updatedAt: string;
};

export class UserService {
  private userModel: ModelCtor<Model<UserAttributes>>;
  private sequelize: Sequelize;

  constructor() {
    this.sequelize = db.sequelize;
    this.userModel = this.sequelize.model('User') as ModelCtor<Model<UserAttributes>>;
  }

  async getAllUsers(): Promise<UserAttributes[]> {
    try {
      const users = await this.userModel.findAll();
      const newusers = users.map((user) => user.dataValues);
      return newusers;
    } catch (error) {
      console.log("service error");
      throw error;
    }
  }
  
  async getUserById(id: string): Promise<Model<UserAttributes> | null> {
    try {
      const user = await this.userModel.findByPk(id);
      return user;
    } catch (error) {
      console.log("service error");
      throw error;
    }
  }
 

async updateUser(id: string, userData: UserData): Promise<Model<UserAttributes> | null> {
  try {
    const user = await this.userModel.findByPk(id);
    if (user) {
      return await user.update(userData);
      }
     
    return null;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
}
async createUser(userData: UserData): Promise<Model<UserAttributes> | null> {
  try {
    const user = await this.userModel.create(userData);
    return user;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
}

async deleteUser(id: string): Promise<void> {
  try {
    const user = await this.userModel.findByPk(id);

    if (user) {
      
      await user.destroy();
    } else {
  
      throw new Error('User not found!');
    }
  } catch (error) {
    console.log("service error");
    throw error;
  }
}


}
