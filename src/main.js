import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { siteConfig } from './config/site.js'

createApp(App).use(router).mount('#app')

document.title = siteConfig.shortName
