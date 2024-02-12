const User = require("../models/user");

class UserService {
  // In memory store
  users = [];

  async createUser(req) {
    
    const id = req.body.id; 
    const name = req.body.name;
    const email = req.body.email;
    const age = req.body.age;
    
    const user = new User(id, name, email, age);
  
    this.users.push(user);
    return "Successfully created";
  }

  async getAllUsers() {
    return this.users;
  }

  // Other user methods
}

module.exports = new UserService();
