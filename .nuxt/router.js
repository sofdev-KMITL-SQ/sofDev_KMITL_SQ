import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0d669ebf = () => interopDefault(import('..\\pages\\Carts\\index.vue' /* webpackChunkName: "pages/Carts/index" */))
const _61e69ca3 = () => interopDefault(import('..\\pages\\Home\\index.vue' /* webpackChunkName: "pages/Home/index" */))
const _95978eec = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _6fc9ffa3 = () => interopDefault(import('..\\pages\\Product\\index.vue' /* webpackChunkName: "pages/Product/index" */))
const _a91c9f18 = () => interopDefault(import('..\\pages\\Shipping\\index.vue' /* webpackChunkName: "pages/Shipping/index" */))
const _42ebd22c = () => interopDefault(import('..\\pages\\Shop\\index.vue' /* webpackChunkName: "pages/Shop/index" */))
const _5ffa132d = () => interopDefault(import('..\\pages\\users\\copy.vue' /* webpackChunkName: "pages/users/copy" */))
const _23b133fb = () => interopDefault(import('..\\pages\\users\\Forgot.vue' /* webpackChunkName: "pages/users/Forgot" */))
const _2286d1e1 = () => interopDefault(import('..\\pages\\users\\LogIn.vue' /* webpackChunkName: "pages/users/LogIn" */))
const _185cc009 = () => interopDefault(import('..\\pages\\users\\Newpass.vue' /* webpackChunkName: "pages/users/Newpass" */))
const _779196d4 = () => interopDefault(import('..\\pages\\users\\Regis.vue' /* webpackChunkName: "pages/users/Regis" */))
const _2bf853a0 = () => interopDefault(import('..\\pages\\users\\shopping.vue' /* webpackChunkName: "pages/users/shopping" */))
const _39c7d1ca = () => interopDefault(import('..\\pages\\users\\test.vue' /* webpackChunkName: "pages/users/test" */))
const _1a874efc = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _0d669ebf,
    name: "Carts"
  }, {
    path: "/Home",
    component: _61e69ca3,
    name: "Home"
  }, {
    path: "/inspire",
    component: _95978eec,
    name: "inspire"
  }, {
    path: "/Product",
    component: _6fc9ffa3,
    name: "Product"
  }, {
    path: "/Shipping",
    component: _a91c9f18,
    name: "Shipping"
  }, {
    path: "/Shop",
    component: _42ebd22c,
    name: "Shop"
  }, {
    path: "/users/copy",
    component: _5ffa132d,
    name: "users-copy"
  }, {
    path: "/users/Forgot",
    component: _23b133fb,
    name: "users-Forgot"
  }, {
    path: "/users/LogIn",
    component: _2286d1e1,
    name: "users-LogIn"
  }, {
    path: "/users/Newpass",
    component: _185cc009,
    name: "users-Newpass"
  }, {
    path: "/users/Regis",
    component: _779196d4,
    name: "users-Regis"
  }, {
    path: "/users/shopping",
    component: _2bf853a0,
    name: "users-shopping"
  }, {
    path: "/users/test",
    component: _39c7d1ca,
    name: "users-test"
  }, {
    path: "/",
    component: _1a874efc,
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
