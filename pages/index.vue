<template>
  <div class="container">
    <div
      class="h-00 w-full flex items-center justify-center bg-teal-lightest font-sans"
    >
      <div class="bg-white rounded shadow p-6 m-4 w-3/4">
        <InputField
          @fetchDataList="fetchDataList"
          @manualOrderButton="manualOrderButton"
        />
        <p v-if="loading">Fetching Data...</p>
        <ListData
          :dataList="getDataList"
          @removeList="removeList"
          @showDialog="showDialog"
          @markAsDone="markAsDone"
        />
      </div>
    </div>
    <Dialog
      :isOn="isOn"
      :indexData="indexData"
      :title="title"
      @cancelButton="cancelButton"
      @submitButton="submitButton"
    />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import ListData from "@/components/ListData";
import InputField from "@/components/InputField";
import Dialog from "@/components/Dialog";

export default {
  data: () => ({
    isOn: false,
    indexData: "",
    title: "",
    loading: false,
  }),
  computed: {
    ...mapState(["dataList"]),
    ...mapGetters(["getDataList", "getDataByIndex"]),
  },
  components: {
    ListData,
    InputField,
    Dialog,
  },
  methods: {
    ...mapActions([
      "saveDataList",
      "removeList",
      "updateDataList",
      "addManualData"
    ]),
    async fetchDataList() {
      this.loading = true;
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      const data = await response.json();
      this.saveDataList(data);
      this.loading = false;
    },
    markAsDone(key) {
      this.$store.commit('markAsDone', key);
      console.log('mark done', key)
    },
    manualOrderButton(val) {
      let inputData = {
        title: val,
        userId: 1,
        completed: false,
      };
      this.addManualData(inputData);
      // console.log("input data", inputData);
    },
    submitButton(value) {
      this.updateDataList(value);
      this.isOn = false;
    },
    showDialog(item) {
      this.indexData = item.indexData;
      this.title = item.itemData.title;
      this.isOn = !this.isOn;
    },
    cancelButton() {
      this.isOn = false;
    },
  },
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
