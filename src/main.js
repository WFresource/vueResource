import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import Common from './common/js/util';
import App from './App'
import './styles/reset.css'
import ElementUI from 'element-ui'
import './styles/element-variables.scss'
import './styles/style.scss'
import router from './router'
import store from './vuex/store'
import Vuex from 'vuex'
import 'font-awesome/css/font-awesome.min.css'
import './styles/iconfont/iconfont.css'

import Mock from './mock'
Mock.bootstrap();

Vue.use(Common)
Vue.use(ElementUI)
Vue.use(Vuex)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
