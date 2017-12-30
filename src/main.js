// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import goods from '@/components/goods/goods'
import seller from '@/components/seller'
import ratings from '@/components/ratings/ratings'

// 明确安装路由功能：
Vue.use(VueRouter)
  
// 配置路由
const routes = [{
  path: '/goods', component: goods
}, {
  path: '/ratings', component: ratings
}, {
  path: '/seller', component: seller
}]
Vue.config.productionTip = false

// 创建路由实例
const router = new VueRouter({
  linkActiveClass:'active',
  routes
})
// router.map({
//   '/goods': {
//     component: goods
//   },
//   '/ratings': {
//     component: ratings
//   },
//   '/seller': {
//     component: seller
//   }
// })
// router.start(app, '#app')
// /* eslint-disable no-new */

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
router.push('/seller');
