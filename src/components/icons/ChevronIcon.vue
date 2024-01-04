<script setup>
const { width, height, title } = defineProps({
  width: Number,
  height: Number,
  title: String
});
</script>
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="fill-secondary-50 stroke-primary-500"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="[width ? `w-${width}` : 'w-8', height ? `h-${height}` : 'h-8']"
  >
    <title v-if="title">{{ title }}</title>
    <circle cx="12" cy="12" r="10" />
    <path d="m14 16-4-4 4-4" />
  </svg>
</template>
