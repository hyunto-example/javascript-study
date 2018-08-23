// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// Vue 인스턴스에서 매번 axios를 import하지 않고도 사용할 수 있는 방법
// Vue.prototype에 axios를 추가한다.
// 이제 각 Vue 인스턴스에서는 this.$axios를 통해 axios를 import하지 않고도 사용할 수 있다.
// AppAxiosTest.vue의 fetchContactOne 메소드 참고
import axios from 'axios';
Vue.prototype.$axios = axios;

// 전역수준에서 Promise Polyfill 사용하도록 설정
// require('es6-promise').polyfill();
import ES6Promise from 'es6-promise';
ES6Promise.polyfill();

// Bootstrap 참조
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})