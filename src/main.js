import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import ElementPlus from 'element-plus';
import axios from 'axios';
import Vuex from 'vuex'


import 'element-plus/dist/index.css'
const app = createApp(App)
app.config.globalProperties.axios=axios;
app.use(router)
app.use(ElementPlus)
app.use(Vuex)
app.mount('#app')


