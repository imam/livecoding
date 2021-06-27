import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
    faArrowCircleRight, 
    faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './index.css'

library.add(
    faArrowCircleRight, 
    faArrowCircleLeft
)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
