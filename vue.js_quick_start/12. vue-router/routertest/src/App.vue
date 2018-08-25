<template>
  <div>
    <div class="header">
      <h1 class="headerText">(주) OpenSG</h1>
      <nav>
        <ul>
          <li>
            <!-- <a href="#" @click="changeMenu('home')">Home</a> -->
            <router-link to="/home">Home</router-link>
          </li>
          <li>
            <!-- <a href="#" @click="changeMenu('about')">About</a> -->
            <router-link to="/about">Abount</router-link>
          </li>
          <li>
            <!-- <a href="#" @click="changeMenu('contact')">Contact</a> -->
            <router-link to="/contacts">Contacts</router-link>
          </li>
        </ul>
      </nav>
    </div>

    <div class="container">
      <!-- <keep-alive include="about,home">
        <component v-bind:is="currentView"></component>
      </keep-alive> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import VueRouter from 'vue-router';

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/contacts', component: Contact }
  ]
})

export default {
  name: 'app',
  router
}
</script>

<style>
.header {
  background-color: aqua;
  padding: 10px 0px 0px 0px;
}
.headerText {
  padding: 0px 20px 0px 20px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: purple;
}
li {
  float: left;
}
li a {
  display: block;
  color: yellow;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
li a:hover {
  background-color: aqua;
  color: black;
}
</style>
