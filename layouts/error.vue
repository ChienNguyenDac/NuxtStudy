<template>
  <div>
    <button
      @click="goBack"
      class="bg-gray-500 m-2 py-2 px-6 rounded-md shadow-lg text-white font-semibold hover:bg-gray-600 duration-200"
    >
      Back
    </button>
    <p
      class="text-center text-red-600 font-semibold fixed top-1/2 left-1/2 text-3xl -translate-x-1/2 -traslate-y-1/2"
    >
      Something is wrong, please try later...
    </p>
  </div>
</template>

<script>
import { defineComponent, useRouter } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const router = useRouter();
    function goBack() {
      router.back();
    }

    return {
      goBack,
    };
  },
});
</script>
