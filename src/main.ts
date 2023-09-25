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
import pinia from '@/plugins/pinia'
import head from '@/plugins/head'
import vuetify from '@/plugins/vuetify'
import '@/plugins/youtube.client'

import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(head)
app.use(vuetify)

app.mount('#app')
