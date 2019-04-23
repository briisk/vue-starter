export default [
  {
    path: '/',
    component: () => import('./Dashboard.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '/',
        name: 'HomePage',
        component: () => import('./components/home-page/HomePage.vue'),
      },
      {
        path: '/example',
        name: 'StoreExample',
        component: () => import('./components/store-example/StoreExample.vue'),
      },
    ],
  },
];
