<template>
  <div class="container">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="collapse"
        :router="true"
      >
        <el-menu-item index="1" route="/">
          <i class="el-icon-menu"></i>
          <span>Dashboard</span>
        </el-menu-item>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-s-help"></i>
            <span>Example</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1" route="/example/table">
              <span>Table</span>
            </el-menu-item>
            <el-menu-item index="1-2" route="/example/tree"
              ><span>Tree</span></el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>Form</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1" route="/form/menu1"
              ><span>Menu1</span></el-menu-item
            >
            <el-menu-item index="1-2" route="/form/menu2"
              ><span>Menu2</span></el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item
          index="4"
          onclick="window.open('https://example.com', '_blank')"
        >
          <i class="el-icon-link"></i>
          <span>External Link</span>
        </el-menu-item>
        <el-menu-item index="5" route="/donate">
          <i class="el-icon-wallet"></i>
          <span>Donate</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "side-bar",
  computed: {
    ...mapState("layout", {
      collapse: (state) => state.collapse,
    }),
  },
  methods: {
    ...mapMutations("layout", ["handleResize"]),
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo {
  transition: width 0s ease-out;
  background-color: #304156;
  height: 100%;
  position: fixed;
  font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 210px !important;
}
.el-menu-item,
.el-submenu {
  text-align: left;
}

.el-menu-item i,
.el-submenu i {
  margin-right: 5px;
  text-align: left;
}
</style>
