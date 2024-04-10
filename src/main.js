import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuelidate from 'vuelidate'; // Importa vuelidate
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap';



createApp(App)
  .use(store)
  .use(router)
  .use(Vuelidate) // Usa Vuelidate
  .mount('#app');
