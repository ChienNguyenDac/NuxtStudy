<template>
  <div class="mx-auto w-max mt-20">
    <input
      type="text"
      placeholder="Enter user ID"
      v-model="userId"
      @keydown.enter="loadUserPage"
      class="py-3 px-6 rounded-md border border-gray-200 shadow-md focus:outline-none"
    />
    <button
      @click="loadUserPage"
      class="py-3 px-6 rounded-md shadow-sm bg-blue-700 text-white font-semibold"
    >
      Load User
    </button>
    <div class="my-10">
      <nuxt-child></nuxt-child>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, useRouter } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const userId = ref();
    const router = useRouter();

    function loadUserPage() {
      router.push(`/users/${userId.value ?? 0}`);
      userId.value = "";
    }

    return {
      userId,
      loadUserPage,
    };
  },
  layout: "user",
});
</script>
