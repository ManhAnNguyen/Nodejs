const db = require("../config/db");

class Comments {
  constructor(comment) {
    this.comment = comment;
  }
  async createNewComment(idUser, idPost) {
    try {
      const sql = `INSERT INTO comments (
            comment,
            idUser,
            idPost
        ) VALUES (
           '${this.comment}',
           '${idUser}',
           '${idPost}'
        ) ;`;

      return await db.execute(sql);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async getAllCommentByIdPost(idPost) {
    try {
      const sql = `SELECT * FROM comments JOIN users On users.id = comments.idUser where idPost = '${idPost}'  ;`;
      const res = await db.execute(sql);
      const [data, _] = res;
      return data;
    } catch (err) {
      throw err;
    }
  }

  static async deleteCommentByIdPost(id) {
    try {
      const sql = `DELETE FROM comments where id = '${id}'`;
      return db.execute(sql);
    } catch (err) {
      throw err;
    }
  }
}

module.exports = Comments;
