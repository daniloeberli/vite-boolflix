import { createApp } from 'vue'
import App from './App.vue'
import CountryFlag from 'vue-country-flag'
import './assets/scss/main.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faStar as fastarsolid } from '@fortawesome/free-solid-svg-icons'

library.add(faStar, fastarsolid)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
