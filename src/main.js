import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { gsap } from "gsap";



createApp(App).use(gsap).use(AOS.init()).use(store).use(router).mount('#app')
