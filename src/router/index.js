import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AlbumsView from '../views/AlbumsView.vue'
import AlbumView from '../views/AlbumView.vue'
import ChanteursView from '../views/ChanteursView.vue'
import ChanteurView from '../views/ChanteurView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/albums',
      name: 'albums',
      component: AlbumsView
    },
    {
      path: '/album/:id',
      name: 'album',
      component: AlbumView
    },
    {
      path: '/chanteurs',
      name: 'chanteurs',
      component: ChanteursView
    },
    {
      path: '/chanteur/:id',
      name: 'chanteur',
      component: ChanteurView
    }
  ]
})

export default router
