const { Users } = require("../models");

class UserClass {
  constructor(name, password, role) {
    this.name = name;
    this.password = password;
    this.role = role;
  }

  async handleRegister() {
    const data = await Users.create({
      name: this.name,
      password: this.password,
      role: this.role,
    }).catch((err) => {
      throw err;
    });
    if (data) {
      return data.dataValues;
    }
  }

  static async handleLogIn(name, password) {
    const data = await Users.findOne({ where: { name, password } }).catch(
      (err) => {
        throw err;
      }
    );
    if (data) {
      return data.dataValues;
    }
  }

  static async handleGetAllUser() {
    try {
      const data = await Users.findAll();
      return data;
    } catch (err) {
      throw err;
    }
  }

  static async handleDeleteUser(id) {
    try {
      const data = await Users.destroy({
        where: { id },
      });

      return data;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = UserClass;
