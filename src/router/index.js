import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/products",
      name: "products",
      // route level code-splitting
      // this generates a separate chunk (Products.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Products.vue"),
    },
    {
      path: "/bookings",
      name: "bookings",
      // route level code-splitting
      // this generates a separate chunk (Customers.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Bookings.vue"),
    },
  ],
});

export default router;
