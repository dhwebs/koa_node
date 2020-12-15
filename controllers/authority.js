const AccountService = require('../service/authority')
var fn_index = async (ctx, next) => {
  const rows =await AccountService.getArticle();
  ctx.success({rows:rows},'查询成功',200)
};

var add_article = async (ctx, next) => {
  let user={
    name:ctx.request.body.name || '',
    icon:ctx.request.body.icon || '',
    grade:ctx.request.body.grade || '',
    order:ctx.request.body.order || '',
    alias:ctx.request.body.alias || '',
    path:ctx.request.body.path || '',
    belongId:ctx.request.body.belongId || 0,
    type:ctx.request.body.type || '',
    children:"[]"
  }
  const account =await AccountService.createArticle(user);
  if(account.id){
    ctx.success({data:account},'添加成功',201)
  }else{
    ctx.fail('添加失败',500)
  }
};
var update_article = async (ctx, next) => {
  let user={}
  if(ctx.request.body.name) user.name=ctx.request.body.name
  if(ctx.request.body.icon) user.icon=ctx.request.body.icon
  if(ctx.request.body.grade) user.grade=ctx.request.body.grade
  if(ctx.request.body.order) user.order=ctx.request.body.order
  if(ctx.request.body.alias) user.alias=ctx.request.body.alias
  if(ctx.request.body.path) user.path=ctx.request.body.path
  if(ctx.request.body.belongId) user.belongId=ctx.request.body.belongId
  if(ctx.request.body.type) user.type=ctx.request.body.type
  if(ctx.request.body.children) user.children=JSON.stringify(ctx.request.body.children)
  let id=ctx.request.body.id
  const account =await AccountService.updateArticle(id,user);
  if(account.id){
    ctx.success({data:account},'修改成功',200)
  }else{
    ctx.fail('修改失败',500)
  }
};
var deleteAuthority= async (ctx, next)=>{
  let id=ctx.request.body.id
  const account =await AccountService.destroyAuthority(id);
  if(account){
    ctx.success({data:account},'删除成功',200)
  }else{
    ctx.fail('删除失败',500)
  }
}
module.exports = {
  'GET /authority': fn_index,
  'POST /authority_add': add_article,
  'POST /authority_update': update_article,
  'DELETE /authority_delete': deleteAuthority,
  
};