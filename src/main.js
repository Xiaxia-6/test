// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*
* 引入相关组件
*/
import Vue from 'vue'
import router from './router/router'
import Layout from './components/layout.vue'
import axios from 'axios'


new Vue({
  el: '#app',
  router,
  axios,
  template: '<Layout/>',
  components: { Layout }
})

