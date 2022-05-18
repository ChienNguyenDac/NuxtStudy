<template>
  <div class="w-full flex justify-center items-center my-10">
    <div class="text-center">
      <NuxtLogo />
      <nuxt-link to="/counter" class="nav-link mx-2 my-5"> Counter </nuxt-link>
      <nuxt-link to="/users" class="nav-link mx-2 my-5"> User </nuxt-link>
      <nuxt-link to="/login" class="nav-link mx-2 my-5"> Login </nuxt-link>
      <nuxt-link to="/register" class="nav-link mx-2 my-5">
        Register
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { defineComponent, useRouter, useStore } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "IndexPage",
  setup() {
    const store = useStore();
    const router = useRouter();
    if (!store.state.currentUser) {
      router.push("/login");
    }
  },
});
</script>
