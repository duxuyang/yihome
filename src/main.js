// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'swiper/dist/css/swiper.css'
import store from './store'
import 'lib-flexible'
import axios from './http.js';

Vue.prototype.axios = axios;
Vue.config.productionTip = false
import './assets/css/reset.css'

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>'
})