import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pagges/index.vue'
import ThreatPerception from '../components/ThreatPerception.vue'
import  login from '../components/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index' ,
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/threat_perception' ,
      name: 'ThreatPerception',
      component: ThreatPerception
    },
    {
      path: '/login' ,
      name: 'login',
      component: login
    },
  ]
})

