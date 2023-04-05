import { addStaff, getStaff, deleteStaff, editStaff } from "@/api/staff.js";
import {
  SET_STAFF,
  DELETE_STAFF,
  ADD_STAFF,
  EDIT_STAFF,
} from "../types/mutations.type";

const default_data = {
  name: "John",
  age: 30,
  id: "1233333",
  phone: "31231412",
  address: "aaaaaaaa22",
  gender: "male",
};
const state = {
  data: default_data,
};
const getters = {
  data: ({ data }) => data,
};
const mutations = {
  [SET_STAFF]: (state, data) => {
    state.data = data;
  },
  [DELETE_STAFF]: (state, dataId) => {
    state.data = state.data.filter((value) => value.id !== dataId);
  },
  [ADD_STAFF]: (state, data) => {
    state.data.push(data);
  },
  [EDIT_STAFF]: (state, data) => {
    const editdata = state.data.find((value) => value.id == data.id);
    if (editdata) {
      editdata.name = data.name;
      editdata.age = data.age;
    }
  },
};
const actions = {
  async deleteStaff({ commit }, id) {
    try {
      await deleteStaff(id);
      commit(DELETE_STAFF, id);
    } catch (error) {
      console.log(error);
    }
  },
  // [DELETE_STAFF]: async ({ commit }, dataId) => {
  //   try {
  //     const response = await axios.delete(
  //       `https://641d4a37b556e431a87feee0.mockapi.io/staff/${dataId}`
  //     );
  //     commit(DELETE_STAFF, response.data.id);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
  async getStaff({ commit }) {
    try {
      const response = await getStaff();
      commit(SET_STAFF, response.data);
    } catch (error) {
      console.log(error);
    }
  },
  // [GET_STAFF]: async ({ commit }) => {
  //   try {
  //     const response = await axios.get(
  //       "https://641d4a37b556e431a87feee0.mockapi.io/staff"
  //     );
  //     commit(SET_STAFF, response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
  async addStaff({ commit }, data) {
    try {
      const response = await addStaff(data);
      commit(ADD_STAFF, response.data);
    } catch (error) {
      console.log(error);
    }
  },
  // [ADD_STAFF]: async ({ commit }, data) => {
  //   try {
  //     const response = await axios.post(
  //       "https://641d4a37b556e431a87feee0.mockapi.io/staff",
  //       data
  //     );
  //     commit(ADD_STAFF, response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
  async editStaff({ commit }, data) {
    try {
      const response = await editStaff(data);
      commit(EDIT_STAFF, response.data);
    } catch (error) {
      console.log(error);
    }
  },
  // [EDIT_STAFF]: async ({ commit }, data) => {
  //   try {
  //     const response = await axios.put(
  //       `https://641d4a37b556e431a87feee0.mockapi.io/staff/${data.id}`,
  //       data
  //     );
  //     commit(EDIT_STAFF, response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
