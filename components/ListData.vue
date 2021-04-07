<template>
  <div>
    <div
      v-for="(list, index) in dataList"
      :key="index"
      class="flex mb-4 justify-between hover:bg-red"
    >
      <div class="justify-center text-center">
        <p
          class="w-full text-green text-center"
          :class="`${list.completed === true ? 'line-through' : ''}`"
        >
          {{ list.title }}
        </p>
      </div>
      <div class="">
        <button
          v-if="!list.completed"
          @click="markAsDoneButton(index)"
          class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded bg-green-300 hover:text-white text-grey border-grey hover:bg-green-500"
        >
          Mark as Done
        </button>
        <button
          @click="showDialog(list, index)"
          class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-black"
        >
          Edit Data
        </button>
        <button
          @click="removeList(index)"
          class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red-500 hover:text-white hover:bg-red-500"
        >
          Remove Data
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["dataList"],
  methods: {
    removeList(key) {
      this.$emit("removeList", key);
    },
    markAsDoneButton(key) {
      this.$emit("markAsDone", key);
    },
    showDialog(itemData, indexData) {
      this.$emit("showDialog", { itemData: itemData, indexData: indexData });
    },
  },
};
</script>