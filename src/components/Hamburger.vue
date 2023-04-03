<template>
  <div style="padding: 0 15px" @click="toggleCollapse">
    <i v-if="collapse" class="el-icon-s-unfold"></i>
    <i v-else class="el-icon-s-fold"></i>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "ham-burger",
  computed: {
    ...mapState("layout", {
      collapse: (state) => state.collapse,
    }),
  },
  methods: {
    ...mapMutations("layout", ["toggleCollapse"]),
  },
};
</script>

<style scoped>
.hamburger {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
}
</style>
