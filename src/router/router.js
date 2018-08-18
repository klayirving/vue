import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// 3、配置路由
// 1、创建组件 引入组件
import Homes from "../components/Homes.vue"
import News from "../components/News.vue"
import content from "../components/content.vue"
import todolist from "../components/TodoList.vue"
import zhihu from "../components/zhihu.vue"
import zhihucontent from "../components/zhihucontent.vue"

 // 2、定义路由  （建议复制s）

const routes = [
  {path: '/homes', component: Homes},
  {path: '/news', component: News},
  {path: '/content/:docid', component: content},
  {path:'/todolist',component:todolist},
  {path:'/zhihu',component:zhihu},
  {path:'/zhihucontent/:id',component:zhihucontent},
  { path: '*', redirect: '/homes' }

  /*默认跳转路由*/
];

// 3、实例化VueRouter

const router = new VueRouter({
  mode: 'history',
  routes // （缩写）相当于 routes: routes
});

export default router;
