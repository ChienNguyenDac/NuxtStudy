<template>
  <div class="shadow-lg p-20">
    <p class="font-semibold text-green-700 my-5">{{ counter }}</p>
    <button @click="increaseCounter" class="btn-primary">Increase</button>
  </div>
</template>

<script>
import { computed, defineComponent, useStore } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const store = useStore();
    function increaseCounter() {
      store.commit("increment");
    }

    return {
      counter: computed(() => store.state.counter),
      increaseCounter,
    };
  },
});
</script>
