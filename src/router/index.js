import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import Table from "@/views/Example/Table";
import Dashboad from "@/views/Dashboard";
import Tree from "@/views/Example/Tree";
import Menu1 from "@/views/Form/Menu1";
import Menu2 from "@/views/Form/Menu2";
import Donate from "@/views/Donate";

export const routes = [
  {
    path: "/example/table",
    component: Table,
  },
  {
    path: "/",
    component: Dashboad,
  },
  {
    path: "/example/tree",
    component: Tree,
  },
  {
    path: "/form/menu1",
    component: Menu1,
  },
  {
    path: "/form/menu2",
    component: Menu2,
  },
  {
    path: "/form/menu2",
    component: Menu2,
  },
  {
    path: "/donate",
    component: Donate,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
