import LayoutVue from '@/views/Layout.vue'
import LinksVue from '@/views/Links.vue'
import LoginVue from '@/views/Login.vue'
import RegisterVue from '@/views/Register.vue'
import Users from '@/views/Users.vue'
import ProductsVue from '@/views/products/Products.vue'
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/', 
    component: LayoutVue, 
    children: 
    [
      {path: '', redirect: '/users'},
      {path: '/users', component: Users},
      {path: '/users/:id/links', component: LinksVue},
      {path: '/products', component: ProductsVue},
    ]
  },
  {
    path: '/login', component: LoginVue, name: 'Login'
  },
  {
    path: '/register', component: RegisterVue, name: 'Register'
  },
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});


export default router
