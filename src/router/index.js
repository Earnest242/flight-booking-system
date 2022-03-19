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
      path: "/customers",
      name: "customers",
      // route level code-splitting
      // this generates a separate chunk (Customers.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Customers.vue"),
    },
    {
      path: "/orders",
      name: "orders",
      // route level code-splitting
      // this generates a separate chunk (Orders.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Orders.vue"),
    },
    {
      path: "/analytics",
      name: "analytics",
      // route level code-splitting
      // this generates a separate chunk (Analytics.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Analytics.vue"),
    },
    {
      path: "/stores",
      name: "stores",
      // route level code-splitting
      // this generates a separate chunk (Stores.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Stores.vue"),
    },
    {
      path: "/billing",
      name: "billing",
      // route level code-splitting
      // this generates a separate chunk (Billing.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Billing.vue"),
    },
    {
      path: "/system",
      name: "system",
      // route level code-splitting
      // this generates a separate chunk (System.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/System.vue"),
    },
  ],
});

export default router;
