import { createRouter, createWebHashHistory } from 'vue-router';

// Import your components
import Home from '@/views/HomeView.vue';
import About from '@/views/AboutView.vue';
// import News from '@/components/News.vue';
// import Folders from '@/components/Folders.vue';
import Contact from '@/views/ContactView.vue';
import Alphabet from '@/components/Alphabet.vue';
import LearnArabic from '@/views/LearnArabic.vue';

const routes = [
    {
        path: '/',
        component: Home,
        name: 'Home'
    },
    {
        path: '/about',
        component: About,
        name: 'About'
    },
    // {
    //     path: '/news',
    //     component: News,
    //     name: 'News'
    // },
    // {
    //     path: '/folders',
    //     component: Folders,
    //     name: 'Folders'
    // },
    {
        path: '/alphabet',
        component: Alphabet,
        name: 'Alphabet'
    },
    {
        path: '/arabic',
        component: LearnArabic,
        name: 'LearnArabic'
    },
    {
        path: '/contact',
        component: Contact,
        name: 'Contact'
    },
];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
