import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import Table from "@/views/Example/Table/index.vue";
import Dashboad from "@/views/Dashboard";
import Tree from "@/views/Example/Tree";
import Menu1 from "@/views/Form/Menu1";
import Menu2 from "@/views/Form/Menu2";
import Donate from "@/views/Donate";
import Edit from "@/views/Example/Table/edit.vue";
import Add from "@/views/Example/Table/add.vue";
export const routes = [
  {
    path: "/example/table",
    component: Table,
    meta: {
      title: "Table",
    },
  },
  {
    path: "/",
    component: Dashboad,
    meta: {
      title: "Dashboard",
    },
  },
  {
    path: "/example/tree",
    component: Tree,
    meta: {
      title: "Tree",
    },
  },
  {
    path: "/form/menu1",
    component: Menu1,
    meta: {
      title: "Menu 1",
    },
  },
  {
    path: "/form/menu2",
    component: Menu2,
    meta: {
      title: "Menu 2",
    },
  },
  {
    path: "/donate",
    component: Donate,
    meta: {
      title: "Donate",
    },
  },
  {
    path: "/edit/:id",
    name: "Edit",
    component: Edit,
    meta: {
      title: "Edit",
    },
  },
  {
    path: "/add",
    name: "Add",
    component: Add,
    meta: {
      title: "Add",
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
