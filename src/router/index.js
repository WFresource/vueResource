import Vue from 'vue'
import VueRouter from 'vue-router'
import {constantRouterMap,asyncRouterMap} from './routes'
import store from '../vuex/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import _ from 'lodash'

NProgress.configure({ showSpinner: false });
Vue.use(VueRouter)

const routes = _.concat(constantRouterMap, asyncRouterMap);

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
  NProgress.start();
  if (to.path == '/login') {
    store.dispatch('LogOut');
    next();
  }else{
    if (store.getters.token) {
      // if (store.getters.apiRoutes === null) { // 判断当前用户是否已拉取完 user_info 信息
      //     store.dispatch('GetInfo').then(res => { // 拉取 info
      //         store.dispatch('SetUser',{userName: res.data.userName});//保存username
      //         const routes = res.data.routes;
      //         store.dispatch('GenerateRoutes', { routes }).then(() => { // 生成可访问的路由表
      //             router.addRoutes(store.getters.addRouters); // 动态添加可访问路由表
      //             next(to) // hack 方法 确保 addRoutes 已完成
      //         })
      //     }).catch(err => {
      //         console.log(err);
      //     });
      // } else {
      //     next() //当有用户权限的时候，说明所有可访问路由已生成 如访问没权限的全面会自动进入 404 页面
      // }
      next()
    }else{
      next({ path: '/login',query: { redirect: to.fullPath } }); // 重定向到登录页
    }
  }
});

router.afterEach(transition => {
  NProgress.done();
});

export default router;

