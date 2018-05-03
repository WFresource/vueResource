import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/demo/Home.vue'
import Main from './views/demo/Main.vue'
import Table from './views/demo/nav1/Table.vue'
import Form from './views/demo/nav1/Form.vue'
import user from './views/demo/nav1/user.vue'
import Page4 from './views/demo/nav2/Page4.vue'
import Page5 from './views/demo/nav2/Page5.vue'
import Page6 from './views/demo/nav3/Page6.vue'
import echarts from './views/demo/charts/echarts.vue'

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
        // {
        //     path: '/index',
        //     component: DashbordHome,
        //     defaultPath: true,  
        //     name: '首页'
        // }
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


