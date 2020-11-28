
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/abogados', component: () => import('pages/Abogado.vue') },
      { path: '/tecnicos', component: () => import('pages/Tecnicos.vue') },
      { path: '/eventos', component: () => import('pages/Eventos.vue') },
      { path: '/belleza', component: () => import('pages/Belleza.vue') },
      { path: '/salud', component: () => import('pages/Salud.vue') }

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
