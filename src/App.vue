<template>
  <div id="app">
    <sidebar></sidebar>
    <div class="fixed-header" :style="{ width: headerWidth }">
      <navbar></navbar>
    </div>
    <appmain class="fixed-content" :style="{ width: headerWidth }"></appmain>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import Appmain from "@/components/Appmain.vue";
import { mapState } from "vuex";

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
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
