const db = require("../config/db");

class Post {
  constructor(title, desc) {
    this.title = title;
    this.desc = desc;
  }

  async createPost() {
    try {
      const d = new Date();
      const year = d.getFullYear();
      const month = d.getMonth() + 1;
      const date = d.getDate();

      const createdAt = `${year}-${month}-${date}`;
      const sql = `INSERT INTO posts(
          title,
          description,
          created_at
      ) VALUES (
          '${this.title}',
          '${this.desc}',
          '${createdAt}'
      )`;

      return db.execute(sql);
    } catch (err) {
      throw err;
    }
  }

  static async getAllPosts() {
    try {
      const sql = "SELECT * FROM posts;";
      const response = await db.execute(sql);
      const [data, _] = response;
      return data;
    } catch (err) {
      throw err;
    }
  }
  static async deletePost(id) {
    try {
      const sql = `DELETE  FROM posts where id = '${id}'`;
      const sqlDelete = `DELETE FROM comments where idPost = '${id}'`;
      await db.execute(sqlDelete);
      await db.execute(sql);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  static async getPostById(id) {
    try {
      const sql = `SELECT * FROM posts where id = '${id}'`;
      const res = await db.execute(sql);
      const [data, _] = res;

      return data;
    } catch (err) {
      throw err;
    }
  }
  async editPostById(id) {
    try {
      const sql = `UPDATE posts SET title = '${this.title}' , description = '${this.desc}' WHERE id = '${id}' ;`;
      await db.execute(sql);
      const getSql = `SELECT * FROM posts WHERE id = '${id}'`;
      const res = await db.execute(getSql);
      const [data, _] = res;
      return data;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = Post;
