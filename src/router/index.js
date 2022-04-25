import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      redirect: '/layout',
    },
    {
      path: '/layout',
      name: 'layout',
      redirect: '/home',
      component: () => import('@/views/layout/index.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/layout/home.vue'),
        },
        {
          path: '/dynamic',
          name: 'dynamic',
          component: () => import('@/views/layout/dynamic.vue'),
        },
        {
          path: '/shop',
          name: 'shop',
          component: () => import('@/views/layout/shop.vue'),
        },
        {
          path: '/person',
          name: 'person',
          component: () => import('@/views/layout/person.vue'),
        },
      ],
    },
    {
      path: '/video',
      name: 'video',
      component: () => import('@/views/video'),
    },
    {
      path: '/upload',
      name: 'upload',
      component: () => import('@/views/upload'),
    },
    {
      path: '/*',
      name: '404',
      // redirect: "/nav",
      component: () => import('@/views/404.vue'),
    },
  ],
})
