import Vue, { AsyncComponent } from 'vue'
import Router, { RouteConfig, Route, NavigationGuard } from 'vue-router'

const home: AsyncComponent = (): any => import('@/components/home.vue')

Vue.use(Router)

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: home
  }
]

const router: Router = new Router({
  mode: 'history',
  base: '/',
  routes
})

export default router
