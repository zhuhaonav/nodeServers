const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx, next) {

})

router.get('/bar', function (ctx, next) {

})

module.exports = router
