const state = {
  collapse: false,
};
const mutations = {
  handleResize(state) {
    state.collapse = window.innerWidth < 768;
  },
  toggleCollapse(state) {
    state.collapse = !state.collapse;
  },
};
export default {
  namespaced: true,
  state,
  mutations,
};
