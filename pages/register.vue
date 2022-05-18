<template>
  <form @submit.prevent="handleSubmit">
    <div class="flex flex-row items-center justify-center lg:justify-start">
      <p class="text-2xl font-semibold mb-0 mr-4">Sign up</p>
    </div>

    <div
      class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
    ></div>
    <div v-if="response">
      <p
        v-if="response.success === false"
        class="font-medium text-red-600 text-lg mb-5"
      >
        {{ response.message }}
      </p>
    </div>
    <p v-if="error" class="font-medium text-red-600 text-lg mb-5">
      {{ error }}
    </p>
    <!-- Email input -->
    <div class="mb-6">
      <input
        type="text"
        class="input-default"
        placeholder="Email address"
        v-model="email"
        required
      />
    </div>

    <!-- Name input -->
    <div class="mb-6">
      <input
        type="text"
        class="input-default"
        placeholder="User name"
        v-model="name"
        required
      />
    </div>

    <!-- Password input -->
    <div class="mb-6">
      <input
        type="password"
        class="input-default"
        placeholder="Password"
        v-model="password"
        required
      />
    </div>

    <!-- Confirm Password input -->
    <div class="mb-6">
      <input
        type="password"
        class="input-default"
        placeholder="Confirm Password"
        v-model="confirmPassword"
        required
      />
    </div>

    <div class="text-center lg:text-left">
      <button
        type="submit"
        class="btn-primary flex items-center justify-center w-38"
      >
        <Spinner v-if="loading" />
        Register
      </button>
      <p class="text-sm font-semibold mt-2 pt-1 mb-0">
        Already have an account ?
        <nuxt-link
          to="/login"
          class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
          >Login</nuxt-link
        >
      </p>
    </div>
  </form>
</template>

<script>
import {
  computed,
  defineComponent,
  ref,
  useRouter,
  useStore,
} from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const email = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const name = ref("");
    const response = ref();
    const error = ref();

    const store = useStore();
    const router = useRouter();

    async function handleSubmit() {
      if (confirmPassword.value !== password.value) {
        error.value = "Password not match confirm password.";
      } else {
        const res = await store.dispatch("register", {
          email: email.value,
          password: password.value,
          name: name.value,
        });
        response.value = res;
        if (res.success) {
          router.push("/login");
        }
      }
    }

    return {
      email,
      password,
      name,
      confirmPassword,
      response,
      error,
      loading: computed(() => store.state.loading),
      handleSubmit,
    };
  },
  layout: "login",
});
</script>
