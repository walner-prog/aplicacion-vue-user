import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';


import EditProduct from '@/views/EditProduct.vue'; // Importa el componente de edición de producto
import CreateProduct from '@/views/CreateProduct.vue'; // Importa el componente de edición de producto
import AboutView from '../views/AboutView.vue';
import GraficaView from '../views/GraficaView.vue';
import ReporteView from '../views/ReporteView.vue';
import Login       from '../views/Login.vue';
import RegisterForm from '../views/RegisterForm.vue';
const routes = [
  {
    path: '/',
   
    redirect: '/home' // Redirige '/' a '/login'
  },
  {
    path: '/register',
  
    component: RegisterForm
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
 
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/grafica',
    name: 'grafica',
    component: GraficaView
  },
  {
    path: '/reporte',
    name: 'reporte',
    component: ReporteView
  },

  // Otras rutas aquí...
  {
    path: '/edit/:id', // Define una ruta dinámica con el parámetro de ID
    name: 'EditProduct',
    component: EditProduct // Asocia la ruta al componente de edición de producto
  },

  {
    path: '/create',
    name: 'create-product',
    component: CreateProduct // Reemplaza 'CreateProduct' con el nombre de tu componente de creación de productos
  },

  {
    path: '/login', // Ruta para la vista de inicio de sesión
    name: 'login',
    component: Login // Componente de inicio de sesión
  }
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
