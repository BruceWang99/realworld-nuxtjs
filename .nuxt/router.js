import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3964eeb1 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _6ae01e26 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _6add06ef = () => interopDefault(import('../pages/auth' /* webpackChunkName: "" */))
const _3979f1fc = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _165de9ea = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _2d9614f4 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _6be56b62 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _3964eeb1,
    children: [{
      path: "",
      component: _6ae01e26,
      name: "home"
    }, {
      path: "/login",
      component: _6add06ef,
      name: "login"
    }, {
      path: "/register",
      component: _6add06ef,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _3979f1fc,
      name: "profile"
    }, {
      path: "/settings",
      component: _165de9ea,
      name: "settings"
    }, {
      path: "/editor",
      component: _2d9614f4,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _6be56b62,
      name: "article"
    }]
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
