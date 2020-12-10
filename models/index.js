const Sequelize = require('sequelize');

const config = require('../config');

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  port: config.port,
  dialect: config.dialect,
  pool: {   //连接池设置
    max: 5, //最大连接数
    min: 0, //最小连接数
    idle: 10000
  },
});

const user = sequelize.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  company: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  sex: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  authorise: {
    type: Sequelize.STRING,
    allowNull: true,
  },
},{
  freezeTableName: true //取消表名自动复数化
});
user.sync({ force: false });

const article = sequelize.define('article', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cover: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  subtitle: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  author: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  authorId: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
},{
  freezeTableName: true //取消表名自动复数化
});
article.sync({ force: false });
module.exports = {
  user,
  article,
};
// export const user = sequelize.import(__dirname+ '/user.js')