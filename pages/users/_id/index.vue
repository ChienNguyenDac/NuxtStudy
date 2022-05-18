<template>
  <p class="text-center font-semibold text-gray-700">
    User with ID: {{ $route.params.id }}
  </p>
</template>

<script>
export default {
  validate(data) {
    return /^\d+$/.test(data.params.id);
  },
  layout(context) {
    return "user";
  },
};
</script>
