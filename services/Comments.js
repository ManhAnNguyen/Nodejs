const { Comments, Posts, User } = require("../models");

class ClassComments {
  constructor(comment, userId, postId) {
    this.comment = comment;
    this.userId = userId;
    this.postId = postId;
  }

  async handleCreateComment() {
    const data = await Comments.create({
      comment: this.comment,
      UserId: this.userId,
      PostId: this.postId,
    }).catch((err) => {
      throw err;
    });
    if (data) {
      return data.dataValues;
    }
  }

  static async handleGetAllComments(PostId) {
    console.log(PostId);
    const data = await Comments.findAll({
      include: [
        {
          model: Posts,
          where: {
            id: PostId,
          },
        },
        {
          model: User,
        },
      ],
    }).catch((err) => {
      console.log(err);
      throw err;
    });

    if (data) return data;
  }

  static async handleDeleteComment(id) {
    try {
      const response = await Comments.destroy({ where: { id } });
      return response;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = ClassComments;
