import Home from './components/Home'
import Signup from './components/Signup'
import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/Login.vue'

const routes = [
    {
        name: "Home",
        component: Home,
        path: '/'
    },
    {
        name: "Signup",
        component: Signup,
        path: '/Signup'
    },
    {
        name: "Login",
        component: Login,
        path: '/Login'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;