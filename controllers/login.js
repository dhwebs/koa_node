const AccountService = require('../service/user')
var fn_index = async (ctx, next) => {
  ctx.response.body = `<h1 style='text-align:center'>hello Koa</h1>`;
};

var fn_login = async (ctx, next) => {
  let obj={
    name : ctx.request.body.name || '',
    password : ctx.request.body.password || ''
  }
  const account =await AccountService.getAccountByUserName(obj);
  if(account.id){
    let obj={
      state:200,
      remark:'登录成功',
      data:account
    }
    ctx.body = JSON.stringify(obj);
  }else{
    let obj={
      state:500,
      remark:'账号或密码错误',
    }
    ctx.body = JSON.stringify(obj);
  }
};
var fn_register = async (ctx, next) => {
  let user={
    name:ctx.request.body.name || '',
    password:ctx.request.body.password || '',
    company:ctx.request.body.company || '',
    phone:ctx.request.body.phone || '',

  }
  const account =await AccountService.createAccount(user);
  if(account.id){
    let obj={
      state:201,
      remark:'注册成功',
      data:account
    }
    ctx.body = JSON.stringify(obj);
  }else{
    let obj={
      state:500,
      remark:'注册失败',
    }
    ctx.body = JSON.stringify(obj);
  }
};
module.exports = {
  'GET /': fn_index,
  'POST /login': fn_login,
  'POST /register': fn_register,
  
};