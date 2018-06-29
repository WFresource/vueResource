import Login from '@/views/Login.vue'
import NotFound from '@/views/404.vue'
import Main from '@/views/demo/Main.vue'

import HomePage from '@/views/HomePage.vue'

// about
import About from '@/views/about/Index.vue'

// campaign
import CampaignForm from '@/views/campaign/Form.vue'
import CampaignEdit from '@/views/campaign/Edit.vue'
import CampaignList from '@/views/campaign/List.vue'

// market
import MarketSearch from '@/views/market/Search.vue'
import MarketDetail from '@/views/market/Detail.vue'
import MarketMot from '@/views/market/Mot.vue'

// chart
import ChartIndex from '@/views/chart/Index.vue'
import ChartDetail from '@/views/chart/Detail.vue'

export const constantRouterMap = [{
    path: '/login',
    component: Login,
    name: '登录',
}];

export const asyncRouterMap  = [{
    path: '/',
    component: HomePage,
    redirect: '/index',
    children: [
        {
            path: '/index',
            component: Main,
            name: '推荐名单'
        },
        {
            path: '/campaign/form',
            component: CampaignForm,
            name: '发布活动'
        }, {
            path: '/campaign/edit',
            component: CampaignEdit,
            name: '编辑活动'
        }, {
            path: '/campaign/list',
            component: CampaignList,
            name: '我的任务'
        },
        {
            path: '/chart/index',
            component: ChartIndex,
            name: '营销效果'
        }, {
            path: '/chart/detail',
            component: ChartDetail,
            name: '营销效果详情'
        }, {
            path: '/about',
            component: About,
            name: '关于我们'
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


