import { Request, Response, NextFunction } from 'express';
import { UserService } from '../services/userService';

const userService = new UserService();

interface UserAttributes {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string | null;
}

async function getAllUsers(request: Request, response: Response, errorHandler: NextFunction): Promise<UserAttributes[] | undefined> {
  try {
    console.log("user controller");
    let users = await userService.getAllUsers();
    const { query, email, phoneNumber } = request.query as {
      query?: string;
      email?: string;
      phoneNumber?: string;
    };

    if (query) {
      console.log("query");
      users = users.filter((user) => (
        user.firstName.toLowerCase().includes(query.toLowerCase()) ||
        user.lastName.toLowerCase().includes(query.toLowerCase())
      ));
      console.log(users);
    }
    if (email) {
      users = users.filter((user) => {
        return user.email.toLowerCase().includes(email.toLowerCase());
      });
    }

    if (phoneNumber) {
      users = users.filter((user) => {
        return user.phoneNumber && user.phoneNumber.toLowerCase().includes(phoneNumber.toLowerCase());
      });
    }

    return users; // Return the filtered 'users' array
  } catch (error) {
    console.log("greska controller");
    errorHandler(error);
  }
}


async function getUserById(request: Request, response: Response, errorHandler: NextFunction): Promise<UserAttributes | undefined>  {
  try {
    const { id } = request.params;
    const user = await userService.getUserById(id);
    console.log("kraj");

    if (user) {
      console.log(user.dataValues);
     return user.dataValues;
    } else {
       // No return value in the else block
    }
  } catch (error) {
    console.log("greska controller");
    errorHandler(error);
    throw error; // Rethrow the error
  }
}

async function updateUser(request: Request, response: Response, errorHandler: NextFunction): Promise<void>{
  const { id } = request.params; 
    const userData = request.body;
    console.log("kontroler update");

    try{
      await userService.updateUser(id, userData); 
    }
   catch (error) {
    console.error('Error updating user:', error);
    errorHandler(error);
  }
}

async function createUser(request: Request, response: Response, errorHandler: NextFunction): Promise<void>{
      const userData = request.body;
      console.log("kontroler create");
      
  
      try{
        console.log("servis");
        await userService.createUser( userData); 
      }
     catch (error) {
      console.error('Error creating user:', error);
      errorHandler(error);
    }
  }
  async function deleteUser(request: Request, response: Response, errorHandler: NextFunction): Promise<void>{
    const { id } = request.params;
    try{
      await userService.deleteUser(id); 
    }
   catch (error) {
    console.error('Error creating user:', error);
    errorHandler(error);
  }
}





export { getAllUsers, getUserById, updateUser, createUser, deleteUser };
