import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/ItegoMainView.vue')
  },
  {
    path: '/thanks',
    component: () => import('../views/ItegoThanksView.vue')
  },
  {
    path: '/privacy-policy',
    component: () => import('../views/PrivacyPolicyView.vue'),
  },
  {
    path: '/blog',
    component: () => import('../views/public/PostsView.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/public/PostListView.vue'),
      },
      {
        path: ':id',
        component: () => import('../components/ItegoPostDetails.vue'),
        props: true
      },
    ]
  },
  {
    path: '/blog/categories',
    component: () => import('../views/public/PostsView.vue'),
    children: [
      {
        path: ':id',
        component: () => import('../views/public/PostListView.vue'),
      },
    ]
  },
  // маршруты для администраторской части сайта
  // {
  //   path: '/admin',
  //   component: () => import('../views/admin/AdminLayout.vue'),
  //   meta: { requiresAuth: true },
  //   children: [
  //     {
  //       path: '',
  //       component: () => import('../views/admin/AdminPanelView.vue'),
  //       children: [
  //         {
  //           path: 'articles',
  //           component: () => import('../views/admin/AdminPostView.vue'),
  //           children: [
  //             {
  //               path: '',
  //               component: () => import('../views/admin/PostListView.vue'),
  //             },
  //             {
  //               path: 'create',
  //               component: () => import('../components/admin/AdminCreateArticle.vue')
  //             },
  //             {
  //               path: 'edit/:id',
  //               component: () => import('../components/admin/AdminEditArticle.vue')
  //             }
  //           ]
  //         },
  //         {
  //           path: 'categories',
  //           component: () => import('../views/admin/CategoryListView.vue')
  //         },
  //         {
  //           path: 'users',
  //           component: () => import('../views/admin/UserListView.vue')
  //         }
  //       ]
  //     },
  //     {
  //       path: 'login',
  //       component: () => import('../views/admin/LoginView.vue'),
  //       meta: { requiresGuest: true }
  //     }
  //   ]
  // },
  {
    path: '/:notFound(.*)',
    component: () => import('../views/404.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  const success = localStorage.getItem('success') === 'true';
  if (!success && to.path.startsWith('/admin') && to.path !== '/admin/login') {
      next('/admin/login');
  } else {
      next();
  }
});

export default router;
