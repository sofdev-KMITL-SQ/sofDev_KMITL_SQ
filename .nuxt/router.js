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
const _39122b1e = () => interopDefault(import('..\\pages\\Store\\index.vue' /* webpackChunkName: "pages/Store/index" */))
const _26dec1c0 = () => interopDefault(import('..\\pages\\LoginTest\\logintest.vue' /* webpackChunkName: "pages/LoginTest/logintest" */))
const _ae7746aa = () => interopDefault(import('..\\pages\\Product\\Review\\index.vue' /* webpackChunkName: "pages/Product/Review/index" */))
const _33129c5a = () => interopDefault(import('..\\pages\\Shipping\\Paying\\index.vue' /* webpackChunkName: "pages/Shipping/Paying/index" */))
const _0a602b83 = () => interopDefault(import('..\\pages\\Shop\\shop.js' /* webpackChunkName: "pages/Shop/shop" */))
const _5ffa132d = () => interopDefault(import('..\\pages\\users\\copy.vue' /* webpackChunkName: "pages/users/copy" */))
const _23b133fb = () => interopDefault(import('..\\pages\\users\\Forgot.vue' /* webpackChunkName: "pages/users/Forgot" */))
const _2286d1e1 = () => interopDefault(import('..\\pages\\users\\LogIn.vue' /* webpackChunkName: "pages/users/LogIn" */))
const _2115d328 = () => interopDefault(import('..\\pages\\users\\MyShop\\index.vue' /* webpackChunkName: "pages/users/MyShop/index" */))
const _185cc009 = () => interopDefault(import('..\\pages\\users\\Newpass.vue' /* webpackChunkName: "pages/users/Newpass" */))
const _fd3ecac8 = () => interopDefault(import('..\\pages\\users\\Order\\index.vue' /* webpackChunkName: "pages/users/Order/index" */))
const _bf1e0e74 = () => interopDefault(import('..\\pages\\users\\OrderShop\\index.vue' /* webpackChunkName: "pages/users/OrderShop/index" */))
const _a1c85a10 = () => interopDefault(import('..\\pages\\users\\Post.vue' /* webpackChunkName: "pages/users/Post" */))
const _3002a821 = () => interopDefault(import('..\\pages\\users\\profile.vue' /* webpackChunkName: "pages/users/profile" */))
const _779196d4 = () => interopDefault(import('..\\pages\\users\\Regis.vue' /* webpackChunkName: "pages/users/Regis" */))
const _2bf853a0 = () => interopDefault(import('..\\pages\\users\\shopping.vue' /* webpackChunkName: "pages/users/shopping" */))
const _72e300a9 = () => interopDefault(import('..\\pages\\users\\ShopUser\\index.vue' /* webpackChunkName: "pages/users/ShopUser/index" */))
const _39c7d1ca = () => interopDefault(import('..\\pages\\users\\test.vue' /* webpackChunkName: "pages/users/test" */))
const _444f9d2c = () => interopDefault(import('..\\pages\\users\\testpost.vue' /* webpackChunkName: "pages/users/testpost" */))
const _65e5af44 = () => interopDefault(import('..\\pages\\users\\MyShop\\Edit.vue' /* webpackChunkName: "pages/users/MyShop/Edit" */))
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
    path: "/Store",
    component: _39122b1e,
    name: "Store"
  }, {
    path: "/LoginTest/logintest",
    component: _26dec1c0,
    name: "LoginTest-logintest"
  }, {
    path: "/Product/Review",
    component: _ae7746aa,
    name: "Product-Review"
  }, {
    path: "/Shipping/Paying",
    component: _33129c5a,
    name: "Shipping-Paying"
  }, {
    path: "/Shop/shop",
    component: _0a602b83,
    name: "Shop-shop"
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
    path: "/users/MyShop",
    component: _2115d328,
    name: "users-MyShop"
  }, {
    path: "/users/Newpass",
    component: _185cc009,
    name: "users-Newpass"
  }, {
    path: "/users/Order",
    component: _fd3ecac8,
    name: "users-Order"
  }, {
    path: "/users/OrderShop",
    component: _bf1e0e74,
    name: "users-OrderShop"
  }, {
    path: "/users/Post",
    component: _a1c85a10,
    name: "users-Post"
  }, {
    path: "/users/profile",
    component: _3002a821,
    name: "users-profile"
  }, {
    path: "/users/Regis",
    component: _779196d4,
    name: "users-Regis"
  }, {
    path: "/users/shopping",
    component: _2bf853a0,
    name: "users-shopping"
  }, {
    path: "/users/ShopUser",
    component: _72e300a9,
    name: "users-ShopUser"
  }, {
    path: "/users/test",
    component: _39c7d1ca,
    name: "users-test"
  }, {
    path: "/users/testpost",
    component: _444f9d2c,
    name: "users-testpost"
  }, {
    path: "/users/MyShop/Edit",
    component: _65e5af44,
    name: "users-MyShop-Edit"
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
