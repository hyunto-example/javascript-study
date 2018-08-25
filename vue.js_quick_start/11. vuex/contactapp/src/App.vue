<template>
  <div id="container">
    <div class="page-header">
      <h1 class="text-center">연락처 관리 애플리케이션</h1>
      <p>(Dynamic Component + EventBus + Axios)</p>
    </div>

    <!-- AddContact, UpdateContact, UpdatePhoto 컴포넌트는 동적 컴포넌트 방식으로 currentView 옵션을 통해 나타낸다 -->
    <component :is="currentView"></component>

    <contactList></contactList>

  </div>
</template>

<script>
// import Vue from 'vue';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import UpdatePhoto from './components/UpdatePhoto';

import { mapState } from 'vuex';

export default {
  name: 'app',
  components: {
    ContactList,
    ContactForm,
    UpdatePhoto
  },
  computed: mapState([ 'currentView' ])
}

</script>

<style scoped>
#container {
  font-family: 'Avenir', Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
