<template>
  <div>
    <router-link to="/add"
      ><el-button
        type="success"
        icon="el-icon-plus"
        round
        style="float: left; margin-top: 5px; margin-bottom: 12px"
        >Add</el-button
      ></router-link
    >

    <el-table
      :data="dataArray"
      border
      class="table"
      style="width: 100%"
      fit
      highlight-current-row
    >
      <el-table-column label="ID" width="180px">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="Name" width="180px">
      </el-table-column>
      <el-table-column
        prop="gender"
        label="Gender"
        width="180px"
      ></el-table-column>
      <el-table-column prop="age" label="Age" width="180px"> </el-table-column>
      <el-table-column prop="phone" label="Phone"> </el-table-column>
      <el-table-column prop="address" label="Address"></el-table-column>
      <el-table-column label="Action" width="130px">
        <template slot-scope="scope">
          <router-link :to="'/edit/' + scope.row.id"
            ><el-button
              type="primary"
              icon="el-icon-edit"
              circle
              style="margin: 5px"
            ></el-button
          ></router-link>

          <el-button
            style="margin: 5px"
            type="danger"
            icon="el-icon-delete"
            circle
            @click="deleteStaff(scope.row.id)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "table-page",
  data() {
    return {
      deletingId: null,
    };
  },
  computed: {
    ...mapGetters("staff", {
      data: "data",
    }),
    dataArray() {
      // chuyển đổi object thành array
      return Object.values(this.data);
    },
  },
  mounted() {
    this.getStaff();
  },
  methods: {
    ...mapActions("staff", ["getStaff"]),
    ...mapActions("staff", ["deleteStaff"]),
  },
};
</script>
<style></style>
