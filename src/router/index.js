import { createRouter, createWebHistory } from 'vue-router';
import SignUp from '../views/SignUp.vue';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';



const routes = [
    { path: '/', component: Home },
    { path: '/register', component: SignUp },
    { path: '/login', component: Login },
  ]
  
const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})



export default router;