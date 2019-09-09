'use strict';

import Vue    from 'vue';
import Router from 'vue-router';

import Home      from './views/Home.vue';
import Contacts  from './views/Contacts.vue';
import Companies from './views/Companies.vue';
import Projects from './views/Projects.vue';
import Products from './views/Products.vue';

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts
        },
        {
            path: '/companies',
            name: 'companies',
            component: Companies
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        {
            path: '/products',
            name: 'products',
            component: Products
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})
