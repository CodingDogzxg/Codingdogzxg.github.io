import {
  createRouter,
  createWebHashHistory 
} from "vue-router";
import Home from './components/Home.vue';
import Posts from './components/Posts.vue';
import Repositories from './components/Repositories.vue';
import Contact from './components/Contact.vue';
import Blossom from './components/Blossom.vue'
import NotFound from './components/NotFound.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [{
      path: '/',
      component: Home,
    },
    {
      path: '/Posts',
      component: Posts,
    },
    {
      path: '/Repositories',
      component: Repositories,
    },
    {
      path: '/Contact',
      component: Contact,
    },
    {
      path: '/Blossom',
      component: Blossom
    },
    {
      path: '/:catchAll(.*)',
      component: NotFound,
    }
  ]
})
export default router;