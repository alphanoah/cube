import {createApp} from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/main.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min' // 多余引用，导致tooltip和collapse冲突

const app = createApp(App)

app.mount('#app')