import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Main from './views/demo/Main.vue'

import HomePage from './views/HomePage.vue'

export const constantRouterMap = [{
    path: '/login',
    component: Login,
    name: '',
    hidden: true
}];

export const asyncRouterMap  = [{
    path: '/',
    component: HomePage,
    redirect: '/index',
    children: [
        {
            path: '/index',
            component: Main,
            defaultPath: true,  
            name: '首页'
        }
    ]},
    {
        path: '/404',
        component: NotFound,
        name: '404'
    },
    {
        path: '*',
        redirect: { path: '/404' }
    }];


