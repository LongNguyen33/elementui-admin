<template>
  <div>
    <div style="margin: 20px"></div>
    <el-form label-width="100px">
      <el-form-item label="Name">
        <el-input v-model="name"></el-input>
      </el-form-item>
      <el-form-item label="Gender">
        <el-input v-model="gender"></el-input>
      </el-form-item>
      <el-form-item label="Age">
        <el-input v-model="age"></el-input>
      </el-form-item>
      <el-form-item label="Phone">
        <el-input v-model="phone"></el-input>
      </el-form-item>
      <el-form-item label="Address">
        <el-input v-model="address"></el-input>
      </el-form-item>
    </el-form>
    <el-button
      type="success"
      icon="el-icon-check"
      round
      style="float: left; margin-left: 100px"
      @click="submit"
      >Submit</el-button
    >
    <router-link to="/example/table">
      <el-button type="danger" icon="el-icon-close" round style="float: right"
        >Cancel</el-button
      >
    </router-link>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "add-page",
  data() {
    return {
      name: "",
      gender: "",
      age: "",
      phone: "",
      address: "",
      id: "",
    };
  },
  methods: {
    ...mapActions("staff", ["addStaff"]),
    submit(e) {
      e.preventDefault();
      let data = {
        name: this.name,
        gender: this.gender,
        age: this.age,
        phone: this.phone,
        address: this.address,
        id: this.id,
      };
      this.addStaff(data);
      this.$router.push("/example/table");
    },
  },
};
</script>

<style></style>
