const { Posts, Comments } = require("../models");
const CommentsM = require("../models/Comments");

class PostClass {
  constructor(title, postText) {
    this.title = title;
    this.postText = postText;
  }

  async handleCreatePost() {
    const data = await Posts.create({
      title: this.title,
      postText: this.postText,
    }).catch((err) => {
      throw err;
    });
    if (data) {
      return data.dataValues;
    }
  }

  static async handleGetAllPost() {
    const data = await Posts.findAll().catch((err) => {
      throw err;
    });
    if (data) {
      return data;
    }
  }

  static async handleGetPostById(id) {
    const data = await Posts.findByPk(id).catch((err) => {
      throw err;
    });
    if (data) {
      return data;
    }
  }

  static async handleDeletePost(id) {
    //delete all comments of post

    const res = await Posts.destroy({ where: { id } }).catch((err) => {
      throw err;
    });

    return res;
  }

  async handleEditPost(id) {
    const updatedPost = await Posts.update(
      {
        title: this.title,
        postText: this.postText,
      },
      {
        where: { id },
      }
    ).catch((err) => {
      throw err;
    });

    return updatedPost[0];
  }
}

module.exports = PostClass;
