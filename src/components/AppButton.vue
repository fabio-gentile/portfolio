<script setup>
const props = defineProps({
  isPrimary: Boolean,
  params: Object,
  name: String,
  styles: Array
});
</script>

<template>
  <RouterLink
    :to="{ name: props.name, params: props.params }"
    :class="[
      isPrimary
        ? 'bg-primary-500 text-secondary-50 hover:bg-primary-600'
        : 'bg-primary-50 text-secondary-950 hover:bg-primary-100',
      styles ? styles : 'text-xl'
    ]"
    class="flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-lg px-6 py-3 font-semibold"
  >
    <slot />
  </RouterLink>
</template>
