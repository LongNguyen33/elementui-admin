import Vue from "vue";
import Vuex from "vuex";
import layout from "./modules/layout";
import staff from "./modules/staff";
import auth from "./modules/auth";
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    layout,
    staff,
    auth,
  },
});
