import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import mixins from './mixins'


const app = createApp(App)
app.use(router)
app.mixin(mixins);
app.mount('#app')
