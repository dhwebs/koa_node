const { user } = require('../models/index');

class AccountService {
 // 通过id获取当前查询的实例
  async getAccountById(id) {
    return user.findAll({
      where: {
        id: id,
      },
    });
  };
  // 通过username 来查询
  async getAccountByUserName(obj) {
    return user.findOne({
      where: {
        name: obj.name,
        password: obj.password,
      },
    });
  };
  // 新增账户
  async createAccount(users) {
    return user.create(users);
  };
  // 更新账户
  async updateAccount(id, user) {
    const item = await getAccountById(id);
    if (item) {
      return item.update(user);
    } else {
      throw new Error('the user with id is not exist!');
    }
  }; 
};
module.exports = new AccountService();