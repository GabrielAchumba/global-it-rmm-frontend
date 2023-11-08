
const routes = [
  {
    path: '',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
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
      {
        path: '/dashboard',
        meta: { name: "dashboard", requiresAuth: false },
        component: () => import('pages/Dashboard.vue')
      },
      {
        path: '/access-control',
        meta: { name: "accessControl", requiresAuth: false },
        component: () => import('pages/AccessControl.vue')
      },
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
