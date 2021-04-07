// state
export const state = () => ({
  dataList: []
});

// getters
export const getters = {
  getDataList: state => {
    return state.dataList;
  },
  getDataByIndex: (state, getters) => index => {
    return state.dataList[index];
  }
};

// actions
export const actions = {
  saveDataList(state, payload) {
    this.commit("addDataList", payload);
  },
  removeList(state, payload) {
    this.commit("removeDataList", payload);
  },
  updateDataList(state, payload) {
    console.log("payload", payload);
    this.commit("updateDataList", payload);
  },
  addManualData(state, payload) {
    this.commit("addManualData", payload);
  },
};

// mutations
export const mutations = {
  addDataList(state, dataList) {
    dataList.map((item, index) => {
      state.dataList.push(item);
    });
  },
  removeDataList(state, id) {
    state.dataList.splice(id, 1);
  },
  updateDataList(state, payload) {
    state.dataList[payload.indexData].title = payload.title;
  },
  markAsDone(state, payload) {
    state.dataList[payload].completed = true;
  },
  addManualData(state, payload) {
    state.dataList.push(payload);
  }
};
