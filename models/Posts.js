const { Comments } = require("./index");

module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define("Posts", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  // Posts.hasMany(Comments, { foreignKey: "id", targetKey: "idPost" });
  // Posts.associate = function (models) {
  //   Posts.hasMany(models.Comments, { foreignKey: "id" });
  // };
  return Posts;
};
