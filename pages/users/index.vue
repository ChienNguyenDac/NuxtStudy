<template>
  <div>
    <p class="text-center font-semibold text-red-500">
      Please enter a number user ID
    </p>
    <ul class="shadow-lg my-10">
      <li v-for="user in users" class="border border-gray-200 py-2 px-4 my-1">
        {{ user.id }} - {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import {
  defineComponent,
  onMounted,
  ref,
  useAsync,
  useContext,
  useStore,
} from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const store = useStore();
    const users = useAsync(async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return store.state.users;
    });

    return {
      users,
    };
  },
  layout: "user",
});
</script>
