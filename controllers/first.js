var fn_index = async (ctx, next) => {
  ctx.response.body = `<h1 style='text-align:center'>hello Koa</h1>`;
};

var fn_signin = async (ctx, next) => {
  var
      name = ctx.request.body.name || '',
      password = ctx.request.body.password || '';
  if (name === 'admin' && password === '123') {
      let obj={
        state:200,
        remark:'登录成功',
        userName:'大海',
        userId:1
      }
      ctx.body = JSON.stringify(obj);
  } else {
    let obj={
      state:500,
      remark:'账号或密码错误',
    }
    ctx.body = JSON.stringify(obj);
  }
};

module.exports = {
  'GET /': fn_index,
  'POST /signin': fn_signin
};