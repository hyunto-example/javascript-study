<template>
    <!-- <ul id="todolist"> -->
    <transition-group name="list" tag="ul">
        <li v-for="(val, index) in todolist" v-bind:key="val.todo" v-bind:class="checked(val.done)" v-on:click="doneToggle({index: index})">
            <span>{{ val.todo }}</span>
            <span v-if="val.done"> (완료)</span>
            <span class="close" v-on:click.stop="deleteTodo({index: index})">&#x00D7;</span>
        </li>
    </transition-group>
    <!-- </ul> -->
</template>

<script>
import Constant from '../Constant';
import { mapState, mapMutations } from 'vuex';

export default {
    name: 'List',
    computed: mapState(['todolist']),
    methods: {
        checked: function(done) {
            if (done) {
                return {
                    checked: true
                };
            } else {
                return {
                    checked: false
                };
            }
        },
        // 11.5 액션 적용 전 코드
        // ...mapMutations([
        //     Constant.DELETE_TODO,
        //     Constant.DONE_TOGGLE
        // ])
        deleteTodo: function(payload) {
            this.$store.dispatch(Constant.DELETE_TODO, payload);
        },
        doneToggle: function(payload) {
            this.$store.dispatch(Constant.DONE_TOGGLE, payload);
        }
    }
    
}
</script>

<style>
* {
    box-sizing: border-box;
}
ul {
    margin: 0;
    padding: 0;
}
ul li {
    cursor: pointer;
    position: relative;
    padding: 8px 8px 8px 40px;
    background: #eee;
    font-size: 14px;
    transition: 0.2s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
ul li:hover {
    background: #ddd;
}
ul li.checked {
    background: #BBB;
    color: #fff;
    text-decoration: line-through;
}
ul li.checked::before {
    content: '';
    position: absolute;
    border-color: #fff;
    border-style: solid;
    border-width: 0px 1px 1px 0px;
    top: 10px;
    left: 16px;
    transform: rotate(45deg);
    height: 8px;
    width: 8px;
}
.close {
    position: absolute;
    right: 0;
    top: 0;
    padding: 8px 12px 8px 12px;
}
.close:hover {
    background-color: #f44336;
    color: white;
}
.list-enter-active, .list-leave-active {
    transition: all 0.5s;
}
.list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(50px);
}
</style>