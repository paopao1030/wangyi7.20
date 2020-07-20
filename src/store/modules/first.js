/* 
用于操作首页模块数据的vuex模块
*/
import { getIndexData } from "../../api";

const state = {
  firstData: {},
};
const mutations = {
  async GET_FIRST_DATA(state) {
    let result = await getIndexData();
    state.firstData = result.index;
  },
};
const actions = {};
const getters = {
  // topList(state) {
  //   let topList = state.firstData.kingKongModule;
  //   return topList || [];
  // },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
