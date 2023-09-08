import { createRouter, createWebHistory } from 'vue-router';

//pages
import SignUp from '@/views/SignUp.vue';
import Home from '@/views/Home.vue';
import Login from '@/views/LogIn.vue';
import Add from '@/views/AddResturent.vue';
import Update from '@/views/UpdateResturent.vue';
//pages




const routes = [
    {
        name: 'SignUp',
        path: '/Sign-Up',
        component: SignUp

    },
    {
        name: 'Home',
        path: '/',
        component: Home

    },
    {
        name: 'Login',
        path: '/Login',
        component: Login

    },
    {
        name: 'Add',
        path: '/Add-Resturent',
        component: Add

    },
    {
        name: 'Update',
        path: '/Update/:id',
        component: Update

    },

]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;