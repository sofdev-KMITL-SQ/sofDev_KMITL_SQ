import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _29a1b76a = () => interopDefault(import('..\\pages\\Carts\\index.vue' /* webpackChunkName: "pages/Carts/index" */))
const _b63f7ad0 = () => interopDefault(import('..\\pages\\Home\\index.vue' /* webpackChunkName: "pages/Home/index" */))
const _2a7120ff = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _69a1998e = () => interopDefault(import('..\\pages\\Product\\index.vue' /* webpackChunkName: "pages/Product/index" */))
const _f4350fbe = () => interopDefault(import('..\\pages\\Shop\\index.vue' /* webpackChunkName: "pages/Shop/index" */))
const _ba188dbc = () => interopDefault(import('..\\pages\\users\\copy.vue' /* webpackChunkName: "pages/users/copy" */))
const _e24d9ea0 = () => interopDefault(import('..\\pages\\users\\Forgot.vue' /* webpackChunkName: "pages/users/Forgot" */))
const _3ec1ea8c = () => interopDefault(import('..\\pages\\users\\LogIn.vue' /* webpackChunkName: "pages/users/LogIn" */))
const _123459f4 = () => interopDefault(import('..\\pages\\users\\Newpass.vue' /* webpackChunkName: "pages/users/Newpass" */))
const _3f1b657e = () => interopDefault(import('..\\pages\\users\\Regis.vue' /* webpackChunkName: "pages/users/Regis" */))
const _6d13f715 = () => interopDefault(import('..\\pages\\users\\shopping.vue' /* webpackChunkName: "pages/users/shopping" */))
const _7cc177bf = () => interopDefault(import('..\\pages\\users\\test.vue' /* webpackChunkName: "pages/users/test" */))
const _4392da37 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Carts",
    component: _29a1b76a,
    name: "Carts"
  }, {
    path: "/Home",
    component: _b63f7ad0,
    name: "Home"
  }, {
    path: "/inspire",
    component: _2a7120ff,
    name: "inspire"
  }, {
    path: "/Product",
    component: _69a1998e,
    name: "Product"
  }, {
    path: "/Shop",
    component: _f4350fbe,
    name: "Shop"
  }, {
    path: "/users/copy",
    component: _ba188dbc,
    name: "users-copy"
  }, {
    path: "/users/Forgot",
    component: _e24d9ea0,
    name: "users-Forgot"
  }, {
    path: "/users/LogIn",
    component: _3ec1ea8c,
    name: "users-LogIn"
  }, {
    path: "/users/Newpass",
    component: _123459f4,
    name: "users-Newpass"
  }, {
    path: "/users/Regis",
    component: _3f1b657e,
    name: "users-Regis"
  }, {
    path: "/users/shopping",
    component: _6d13f715,
    name: "users-shopping"
  }, {
    path: "/users/test",
    component: _7cc177bf,
    name: "users-test"
  }, {
    path: "/",
    component: _4392da37,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
