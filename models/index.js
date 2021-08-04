const User = require('./User');
const Post = require('./Posts');
const Comments = require('./Comments');

User.hasMany(Post, {
  foreignKey: 'user_id',
});

User.hasMany(Comments, {
  foreignKey: 'user_id',
});
Post.belongsTo(User, {
  foreignKey: 'post_id',
});

Comments.belongsTo(Post, {
  foreignKey: 'post_id',
});

Comments.belongsTo(Post, {
  foreignKey: 'post_id',
});

module.exports = { User, Post, Comments };
