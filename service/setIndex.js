const { setIndex } = require('../models/index');
const { Op } = require("sequelize");

class AccountService {
 // 当前查询的实例
  async getArticleById() {
    return setIndex.findOne({
   
    });
  };

  // 更新
  async updateArticle(id, user) {
    const item = await this.getArticleById();
    if (item) {
      return item.update(user);
    } else {
      throw new Error('the user with id is not exist!');
    }
  }; 
 
};
module.exports = new AccountService();