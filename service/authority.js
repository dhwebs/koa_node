const { authority } = require('../models/index');
const { Op } = require("sequelize");

class AccountService {
 // 通过id获取当前查询的实例
  async getArticleById(id) {
    return authority.findOne({
      where: {
        id: id,
      },
    });
  };
  // 通过username 来查询
  async getArticle() {
    return authority.findAll({
    });
  };
  // 新增账户
  async createArticle(users) {
    return authority.create(users);
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
  //删除
  async destroyAuthority(id){
    return authority.destroy({
      where: {
        id: id
      }
    })
  }
};
module.exports = new AccountService();