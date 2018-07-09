import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import transfer from '@/components/transfer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test1',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/transfer',
      name: 'transfer',
      component: transfer
    }
  ]
})
