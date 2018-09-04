import Vue from 'vue'
import TodoList from './components/TodoList.vue'
import store from './store';

new Vue({
    store,
    render: h => h(TodoList)
}).$mount('#app')