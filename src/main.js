import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import { icon } from 'element-ui'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(icon)

app.mount('#app')
