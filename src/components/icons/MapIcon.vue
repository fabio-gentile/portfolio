<script setup>
const { width, height } = defineProps({
  width: Number,
  height: Number
});
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="fill-none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="[width ? `w-${width}` : 'w-8', height ? `h-${height}` : 'h-8']"
  >
    <title>Localisation</title>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
</template>
