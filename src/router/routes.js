
const routes = [
  {
    path: '',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      /* {
        path: '',
        meta: { name: "landingpage", requiresAuth: false },
        component: () => import('components/LandingRoute.vue')
      }, */
      {
        path: '/',
        meta: { name: "login", requiresAuth: false },
        component: () => import('pages/Login.vue')
      },
      {
        path: '/landing',
        meta: { name: "landing", requiresAuth: false },
        component: () => import('pages/Landing.vue')
      },
      /* {
        path: '/register',
        meta: { name: "register", requiresAuth: false },
        component: () => import('pages/profile/personal-profile.vue')
      } */
      /* {
        path: '/input',
        meta: { name: "input", requiresAuth: false },
        component:  () => import('components/test/table1.vue')
      },
      {
        path: '/setup',
        meta: { name: "setup", requiresAuth: false },
        component:  () => import('components/test/table2.vue')
      } */
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
