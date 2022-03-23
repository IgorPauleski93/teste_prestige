import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

function lazyLoad(view) {
  return () => import(`../views/${view}.vue`);
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contato",
    name: "Contato",
    component: lazyLoad("Contato"),
  },
  {
    path: "/pagina",
    name: "Pagina",
    component: lazyLoad("Pagina"),
  },
  {
    path: "/:pathMatch(.*)",
    component: lazyLoad("PageNotFound"),
    meta: { layout: "navbar" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;