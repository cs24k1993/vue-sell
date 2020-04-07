import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import goods from 'components/goods/goods'
import ratings from 'components/ratings/ratings'
import seller from 'components/seller/seller'

import 'common/stylus/index.styl'

// 为什么要Vue.use呢？（注册全局方法，在其他组件也可以用VueResource的方法）
Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller },
  // 重定向，不然第一次进入localhost:8080时内容为空
  { path: '/', redirect: '/goods' }
]
const router = new VueRouter({
  routes,
  // 点击链接时设置类名为active，再设置active的css样式
  linkActiveClass: 'active'
})

new Vue({
  // router要在Vue实例化的时候用，看Vue-router文档介绍
  router,
  render: h => h(App)
}).$mount('#app')
