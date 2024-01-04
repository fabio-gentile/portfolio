<script setup>
import AppHeader from "@/components/partials/AppHeader.vue";
import AppWrapper from "@/components/AppWrapper.vue";
import AppFooter from "@/components/partials/AppFooter.vue";
</script>

<template>
  <div
    class="min-h-screen w-full bg-secondary-50 font-display text-secondary-950 dark:bg-secondary-950 dark:text-secondary-50"
  >
    <AppWrapper>
      <div class="grid grid-cols-1 lg:grid-cols-[300px_1fr] lg:gap-8">
        <AppHeader />
        <main>
          <router-view />
        </main>
      </div>
    </AppWrapper>
    <AppFooter />
  </div>
</template>
