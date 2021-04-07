<template>
  <div class="mb-4">
    <h1 class="text-grey-darkest text-4xl">
      VUE SIMPLE CRUD WITH VUEX [ToDo List]
    </h1>
    <div class="flex mt-4">
      <input
        v-model="dataManualOrder"
        class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
        placeholder="Add Todo"
      />
      <button
        @click="manualOrderButton"
        class="flex-no-shrink mr-5 p-2 border-2 rounded text-teal border-green-200 bg-green-100 hover:bg-white"
      >
        Add Manual
      </button>
      <button
        @click="fetchDataList"
        class="flex-no-shrink p-2 border-2 rounded text-teal border-green-400 bg-green-200 hover:text-white hover:bg-green-600 transition delay-150 duration-300 ease-in-out"
      >
        Generate From API
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataManualOrder: "",
    };
  },
  methods: {
    fetchDataList() {
      this.$emit("fetchDataList");
    },
    manualOrderButton() {
      if (this.dataManualOrder == "") {
        return alert("Input tidak boleh kosong!");
      }
      this.$emit("manualOrderButton", this.dataManualOrder);
    },
  },
};
</script>