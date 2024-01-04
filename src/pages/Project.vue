<script setup>
import ProjectDetails from "@/components/ProjectDetails.vue";
</script>
<template>
  <div class="grid gap-4 lg:mt-4">
    <Suspense>
      <ProjectDetails />
    </Suspense>
  </div>
</template>
