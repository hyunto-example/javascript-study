// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

// Vue 인스턴스에서 매번 axios를 import하지 않고도 사용할 수 있는 방법
// Vue.prototype에 axios를 추가한다.
// 이제 각 Vue 인스턴스에서는 this.$axios를 통해 axios를 import하지 않고도 사용할 수 있다.
// AppAxiosTest.vue의 fetchContactOne 메소드 참고
// import axios from 'axios';
// Vue.prototype.$axios = axios;

// 전역수준에서 Promise Polyfill 사용하도록 설정
// require('es6-promise').polyfill();
import ES6Promise from 'es6-promise';
ES6Promise.polyfill();

// Bootstrap 참조
import 'bootstrap/dist/css/bootstrap.css';

import store from './store';

Vue.config.productionTip = false;

// vue-router 추가
import VueRouter from 'vue-router';

import Home from './components/Home';
import About from './components/About';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import UpdatePhoto from './components/UpdatePhoto';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactList,
            children: [
                {
                    path: 'add',
                    name: 'addcontact',
                    component: ContactForm
                },
                {
                    path: 'update/:no',
                    name: 'updatecontact',
                    component: ContactForm,
                    props: true
                },
                {
                    path: 'photo/:no',
                    name: 'updatephoto',
                    component: UpdatePhoto,
                    props: true
                }
            ]
        }
    ]
});

/* eslint-disable no-new */
new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')