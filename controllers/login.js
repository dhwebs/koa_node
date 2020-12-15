const AccountService = require('../service/user')
const AuthorService = require('../service/authority')
var fn_index = async (ctx, next) => {
  ctx.response.body = `<h1 style='text-align:center'>hello Koa</h1>`;
};

var fn_login = async (ctx, next) => {
  let obj={
    name : ctx.request.body.name || '',
    password : ctx.request.body.password || ''
  }
  const account =await AccountService.getAccountByUserName(obj);
  console.log(ctx.fail)
  if(account && account.id){
    const author=await AuthorService.getArticle()
    ctx.success({data:account,author:author},'登录成功',200)
  }else{
    ctx.fail('账号或密码错误',500)
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
    ctx.success({data:account},'注册成功',201)
  }else{
    ctx.fail('注册失败',500)
  }
};
module.exports = {
  'GET /': fn_index,
  'POST /login': fn_login,
  'POST /register': fn_register,
  
};