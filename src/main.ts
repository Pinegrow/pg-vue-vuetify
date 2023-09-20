// import devtools from '@vue/devtools'

// // @ts-ignore
// if (process.env.NODE_ENV === 'development') {
//   // devtools.connect(/* host, port */)
//   // (window as any) = devtools
//   // @ts-ignore
//   window.devtools = devtools
// }

import 'uno.css'
import '@/assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'

import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './plugins/youtube.client'

const app = createApp(App)
const head = createHead()

app.use(createPinia())
app.use(router)
app.use(head)
app.use(vuetify)

app.mount('#app')
