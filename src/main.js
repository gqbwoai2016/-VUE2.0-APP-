import Vue from 'vue';
// 配制vue-router使得点击得以跳转
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';
import './common/scss/index.scss';
// 这里也是配制vue-router
Vue.use(VueRouter);
Vue.use(VueResource);

// let app = Vue.extend(App);

/* VUE2.0无下述功能
* router.map({
*  '/goods': {
*    component: goods
*  }
* });
*/
// 使用如下方式

const router = new VueRouter({
   routes: [{path: '/goods', component: goods},
   {path: '/ratings', component: ratings},
   {path: '/seller', component: seller}],
  // linkActiveClass是vue-router的默认属性，给它添加active使得可以对active设置属性改变样式
    linkActiveClass: 'active'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
