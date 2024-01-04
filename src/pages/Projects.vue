<script setup>
import ProjectFilters from "@/components/ProjectFilters.vue";
import AppSubtitle from "@/components/AppSubtitle.vue";
</script>
<template>
  <div class="mt-4 grid">
    <AppSubtitle>Mes derniers projets</AppSubtitle>
    <Suspense>
      <ProjectFilters />
    </Suspense>
  </div>
</template>
