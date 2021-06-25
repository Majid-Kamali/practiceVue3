import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/tailwind.css';
// import axios from 'axios'
// window.axios = axios
// import Axios from 'axios'


// createApp.prototype.$http = Axios;
// import axios from './axios';
// let host = 'http://localhost:8080/api/' ;
// axios.create({baseURL: host});

// createApp.prototype.$axios = axios
const app = createApp(App)

// app.config.globalProperties.axios=axios

app.use(router)
app.mount('#app')