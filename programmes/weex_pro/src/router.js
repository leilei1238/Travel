/*global Vue*/
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Web from '@/components/Web'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path:'/',
      redirect:'/web'
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/web',
      name:'web',
      component:Web
    }
  ]
})
