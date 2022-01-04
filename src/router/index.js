import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Legal from '../components/Legal.vue'
import Credits from '../components/Credits.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/legal',
        name: 'Legal',
        component: Legal
    },
    {
        path: '/credits',
        name: 'credits',
        component: Credits

    },
    {
        path:'/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
    
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router