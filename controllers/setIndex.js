const AccountService = require('../service/setIndex')
var fn_index = async (ctx, next) => {
  const rows =await AccountService.getArticleById();
  ctx.success({data:rows},'查询成功',200)
};

var update_article = async (ctx, next) => {
  let user={
    chapter:ctx.request.body.chapter,
    footer:ctx.request.body.footer,
    logo:ctx.request.body.logo,
    github:ctx.request.body.github,
    email:ctx.request.body.email,
    address:ctx.request.body.address,
    phone:ctx.request.body.phone,
    swiper:ctx.request.body.swiper
  }
  let id=ctx.request.body.id
  const account =await AccountService.updateArticle(id,user);
  if(account.id){
    ctx.success({data:account},'修改成功',200)
  }else{
    ctx.fail('修改失败',500)
  }
};

module.exports = {
  'GET /setIndex': fn_index,
  'POST /setIndex_update': update_article,
};