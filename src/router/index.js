import { createRouter, createWebHashHistory } from "vue-router";

export const routes = [
  { path: "/", component: () => import("@/layout/index.vue") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
