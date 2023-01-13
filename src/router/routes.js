
const routes = [
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/Welcome.vue'), props: true },
      { path: 'intro', component: () => import('../pages/Introduction.vue') },
      { path: 'school', component: () => import('../pages/School.vue') },
      { path: 'experiences', component: () => import('../pages/Experiences.vue') },
      { path: 'curriculum', component: () => import('../pages/CurriculumVitae.vue') },
    ]
  },

  {
    path: '/saff-quasar-app/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/IndexPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('../pages/ErrorNotFound.vue')
  }
]

export default routes