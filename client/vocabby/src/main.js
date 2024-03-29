import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
// todo: this should be done somewhere else I think!
if (location.hostname == 'localhost') {
    app.config.globalProperties.$apiHost = 'https://localhost:3069' // development comment in to use, comment out for git
} else if (location.hostname == 'daddydev.local') {
    app.config.globalProperties.$apiHost = 'https://daddydev.local:3069' // testing from windows host
} else {
    app.config.globalProperties.$apiHost = 'https://home.daddyswork.com:3069' //staging
}
app.use(router).mount('#app')
