import { createRouter, createWebHistory } from "vue-router";

export const routes = [{
  //路由懒加载:单页面应用,首页时,加载内容时间过长.运用懒加载对页面组件进行划分,减少首页加载时间
  path: "/",
  name: "index", // 给路由命名，设置的name要唯一
  component: () => import("@/layout/index.vue")
}];

const router = createRouter({
  mode: 'history', // 去掉url中的#
  history: createWebHistory(),
  routes,
});

export default router;
