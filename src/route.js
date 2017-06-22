import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import vux from '@/components/HelloFromVux'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // },
    {
      path: '/vux/:code',
      name: 'vux',
      component: r => require.ensure([], () => r(require('./components/HelloFromVux')), '/vux')
    }
  ]
})
