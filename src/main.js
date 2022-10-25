import Vue from 'vue'
import App from './App'
import uView from 'uview-ui';

//mescroll
import MescrollBody from "mescroll-uni/mescroll-body.vue"
import MescrollUni from "mescroll-uni/mescroll-uni.vue"
Vue.component('mescroll-body', MescrollBody)
Vue.component('mescroll-uni', MescrollUni)

//uView引入
Vue.use(uView);
//阻止启动生产消息
Vue.config.productionTip = false

//
App.mpType = 'app'

const app = new Vue({
	...App
})

app.$mount()
