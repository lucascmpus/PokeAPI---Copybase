import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.scss'
import Subcard from '@/components/SubCard/Subcard.vue'
import Card from '@/components/Card/Card.vue'

const app = createApp(App)

app.use(router)

app.component('Subcard', Subcard)
app.component('Card', Card)

app.mount('#app')
