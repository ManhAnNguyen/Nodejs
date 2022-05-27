const db = require("../config/db");

class User {
  constructor(name, password, role) {
    this.name = name;
    this.password = password;
    this.role = role;
  }
  async signUp() {
    try {
      const d = new Date();
      const year = d.getFullYear();
      const month = d.getMonth() + 1;
      const date = d.getDate();

      const createdAt = `${year}-${month}-${date}`;

      const sql = `INSERT INTO users (
          username,
          password,
          role,
          created_at
      ) VALUES (
          '${this.name}',
          '${this.password}',
          '${this.role}',
          '${createdAt}'
      )`;

      return db.execute(sql);
    } catch (err) {
      throw err;
    }
  }
  static async logIn(username, password) {
    try {
      const sql = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}' ;`;
      const response = await db.execute(sql);
      const [data, _] = response;

      return data[0];
    } catch (err) {
      throw err;
    }
  }
  static async getAllUser() {
    try {
      const sql = "SELECT * FROM users";
      const res = await db.execute(sql);
      const [data, _] = res;
      return data;
    } catch (err) {
      throw err;
    }
  }
  static async deleteUserById(id) {
    try {
      const sql = `DELETE FROM users WHERE id = '${id}'`;

      return db.execute(sql);
    } catch (err) {
      throw err;
    }
  }
}

module.exports = User;
