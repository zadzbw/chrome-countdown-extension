import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupApp } from '~/logic/common-setup'
import '../styles'

const app = createApp(App)

setupApp(app)

app.use(router).mount('#app')
