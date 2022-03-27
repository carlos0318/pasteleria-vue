import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Administrador from "../views/Administrador.vue";
import Inventario from "../views/Inventario.vue";
import FormPedidos from "../views/FormPedidos.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/pedidos",
    name: "pedidos",
    component: Administrador,
  },
  {
    path: "/inventario",
    name: "inventario",
    component: Inventario,
  },
  {
    path: "/form",
    name: "fromPedidos",
    component: FormPedidos,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
