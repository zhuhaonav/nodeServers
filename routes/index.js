const router = require('koa-router')()
router.post('/login', async (ctx, next) => {
  let request = ctx.request.body;
  if(request.username=='zhu'&&request.password=='hao'){
    ctx.body = {
      success:true,
    }
  }
  else{
    ctx.body = {
      success:false,
    }
  }
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
