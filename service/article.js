const { article } = require('../models/index');
const { Op } = require("sequelize");

class AccountService {
 // 通过id获取当前查询的实例
  async getArticleById(id) {
    return article.findOne({
      where: {
        id: id,
      },
    });
  };
  // 通过username 来查询
  async getArticle(obj) {
    return article.findAndCountAll({
      where: {
        title:{[Op.regexp]:obj.title},
        // authorId: obj.authorId,
      },
      offset:0,
      limit: 10
    });
  };
  // 新增账户
  async createArticle(users) {
    return article.create(users);
  };
  // 更新账户
  async updateArticle(id, user) {
    const item = await this.getArticleById(id);
    if (item) {
      return item.update(user);
    } else {
      throw new Error('the user with id is not exist!');
    }
  }; 
};
module.exports = new AccountService();