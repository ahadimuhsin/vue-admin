import LayoutVue from '@/views/Layout.vue'
import LinksVue from '@/views/Links.vue'
import LoginVue from '@/views/Login.vue'
import OrdersVue from '@/views/Orders.vue'
import ProfileVue from '@/views/Profile.vue'
import RegisterVue from '@/views/Register.vue'
import Users from '@/views/Users.vue'
import ProductFormVue from '@/views/products/ProductForm.vue'
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
      {path: '/products/create', component: ProductFormVue},
      {path: '/products/:id/edit', component: ProductFormVue},
      {path: '/orders', component: OrdersVue},
      {path: '/profile', component: ProfileVue},
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
