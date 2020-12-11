const AccountService = require('../service/article')
var fn_index = async (ctx, next) => {
  let obj={
    title : ctx.request.query.title || '',
    authorId : ctx.request.query.authorId || ''
  }
  let limit=Number(ctx.request.query.limit) || 10
  let cursor=Number(ctx.request.query.cursor) || 1
  const {count, rows} =await AccountService.getArticle(obj,limit,cursor);
  let obj2={
    state:200,
    remark:'查询成功',
    rows:rows,
    total:count
  }
  ctx.body = JSON.stringify(obj2);
};

var add_article = async (ctx, next) => {
  let user={
    title:ctx.request.body.title || '',
    subtitle:ctx.request.body.subtitle || '',
    content:ctx.request.body.content || '',
    cover:ctx.request.body.cover || '',
    author:ctx.request.body.author || '',
    authorId:ctx.request.body.authorId || '',
    state:1
  }
  const account =await AccountService.createArticle(user);
  if(account.id){
    let obj={
      state:201,
      remark:'添加成功',
      data:account
    }
    ctx.body = JSON.stringify(obj);
  }else{
    let obj={
      state:500,
      remark:'添加失败',
    }
    ctx.body = JSON.stringify(obj);
  }
};
var update_article = async (ctx, next) => {
  let user={
    title:ctx.request.body.title || '',
    subtitle:ctx.request.body.subtitle || '',
    content:ctx.request.body.content || '',
    cover:ctx.request.body.cover || '',
    author:ctx.request.body.author || '',
    authorId:ctx.request.body.authorId || '',
    state:ctx.request.body.state || 1
  }
  let id=ctx.request.body.id
  const account =await AccountService.updateArticle(id,user);
  if(account.id){
    let obj={
      state:200,
      remark:'修改成功',
      data:account
    }
    ctx.body = JSON.stringify(obj);
  }else{
    let obj={
      state:500,
      remark:'修改失败',
    }
    ctx.body = JSON.stringify(obj);
  }
};
module.exports = {
  'GET /article': fn_index,
  'POST /article_add': add_article,
  'POST /article_update': update_article,
  // 'POST /register': fn_register,
  
};