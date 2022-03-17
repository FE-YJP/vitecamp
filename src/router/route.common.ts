// 不需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';

const commonRoutes: Array<RouteRecordRaw> = [
  {
    path: '/demo',
    name: 'demo',
    meta: {
      title: 'Demo',
      icon: '',
    },
    component: () => import('@/views/example/DemoPage.vue'),
  },
];

export default commonRoutes;
