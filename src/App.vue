<template>
  <div id="app">
    <div v-if="!isAuthenticated">
      <login></login>
    </div>
    <div v-else>
      <sidebar></sidebar>
      <div class="fixed-header" :style="{ width: headerWidth }">
        <navbar></navbar>
      </div>
      <appmain class="fixed-content" :style="{ width: headerWidth }"></appmain>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import Appmain from "@/components/Appmain.vue";
import Login from "@/views/Login/index.vue";
import { mapState, mapGetters } from "vuex";

export default {
  name: "App",
  data() {
    return {
      headerWidth: "calc(100% - 210px)",
    };
  },
  computed: {
    ...mapState("layout", ["collapse"]),
    isSidebarCollapsed() {
      return this.collapse;
    },
    ...mapGetters({
      isAuthenticated: "auth/isAuthenticated",
    }),
  },
  watch: {
    isSidebarCollapsed(newVal) {
      if (newVal) {
        this.headerWidth = "calc(100% - 64px)";
      } else {
        this.headerWidth = "calc(100% - 210px)";
      }
    },
  },
  components: {
    Navbar,
    Sidebar,
    Appmain,
    Login,
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.fixed-header {
  position: fixed;
  top: 0px;
  right: 0;
  z-index: 9;
  transition: width 0s ease-out;
}
.fixed-content {
  transition: width 0s ease-out;
}
</style>
