// @ts-ignore
/* Remove vue-router import (if it exists) */
// import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import { routes, handleHotUpdate } from 'vue-router/auto-routes'
import { setupLayouts } from 'virtual:generated-layouts'

const router = createRouter({
  history: createWebHistory(),
  // You don't need to manually add the routes anymore,
  // the plugin writes it for you
  routes: setupLayouts(routes),
})

export default router

// This will update routes at runtime without reloading the page
if (import.meta.hot) {
  handleHotUpdate(router)
}
