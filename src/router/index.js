import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/CitasPendientes',
    name: 'CitasPendientes',
    component: () => import(/* webpackChunkName: "about" */ '../views/CitasPendientes.vue')
  },
  {
    path: '/ConsultaPaciente',
    name: 'ConsultaPaciente',
    component: () => import(/* webpackChunkName: "about" */ '../views/ConsultaPaciente.vue')
  },
  {
    path: '/ProximaCita',
    name: 'ProximaCita',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProximaCita.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
