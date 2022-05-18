<template>
  <form @submit.prevent="handleSubmit">
    <div class="flex flex-row items-center justify-center lg:justify-start">
      <p class="text-lg mb-0 mr-4">Sign in with</p>
      <button
        type="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        class="btn-primary p-3 rounded-full mx-1"
      >
        <!-- Facebook -->
        <i class="fa-brands fa-facebook-f w-4 h-4 block text-sm"></i>
      </button>

      <button
        type="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        class="btn-primary p-3 rounded-full mx-1"
      >
        <!-- Twitter -->
        <i class="fa-brands fa-twitter w-4 h-4 block text-sm"></i>
      </button>

      <button
        type="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        class="btn-primary p-3 rounded-full mx-1"
      >
        <!-- Linkedin -->
        <i class="fa-brands fa-linkedin-in w-4 h-4 block text-sm"></i>
      </button>
    </div>

    <div
      class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
    >
      <p class="text-center font-semibold mx-4 mb-0">Or</p>
    </div>
    <div v-if="response">
      <p
        v-if="response.success === false"
        class="font-medium text-red-600 text-lg mb-5"
      >
        {{ response.message }}
      </p>
    </div>

    <!-- Email input -->
    <div class="mb-6">
      <input
        type="text"
        class="input-default"
        placeholder="Email address"
        required
        v-model="email"
      />
    </div>

    <!-- Password input -->
    <div class="mb-6">
      <input
        type="password"
        class="input-default"
        placeholder="Password"
        required
        v-model="password"
      />
    </div>

    <div class="flex justify-between items-center mb-6">
      <div>
        <input type="checkbox" id="exampleCheck2" />
        <label class="text-gray-800 ml-2" for="exampleCheck2"
          >Remember me</label
        >
      </div>
      <a href="#!" class="text-gray-800">Forgot password?</a>
    </div>

    <div class="text-center lg:text-left">
      <button
        type="submit"
        class="btn-primary flex items-center justify-center w-32"
      >
        <Spinner v-if="loading" />
        Login
      </button>
      <p class="text-sm font-semibold mt-2 pt-1 mb-0">
        Don't have an account?
        <nuxt-link
          to="/register"
          class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
          >Register</nuxt-link
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
    const response = ref();

    const store = useStore();
    const router = useRouter();

    async function handleSubmit() {
      const res = await store.dispatch("login", {
        email: email.value,
        password: password.value,
      });
      response.value = res;
      if (res.success) {
        router.push("/");
      }
    }

    return {
      email,
      password,
      response,
      loading: computed(() => store.state.loading),
      handleSubmit,
    };
  },
  layout: "login",
});
</script>
