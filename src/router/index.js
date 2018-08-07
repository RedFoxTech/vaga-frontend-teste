import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

Vue.use(Router);

import 'bootstrap/dist/css/bootstrap.css'

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        }
    ]
})
