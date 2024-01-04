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
    <title>Site internet</title>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
</template>
