import { reactive } from "vue";

export let counter = reactive({
  //state
  count: 0,
  //action
  increment() {
    this.count++;
  }
});
