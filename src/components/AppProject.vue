<script setup>
import { getProjects } from "@/services/getProjects.js";
import { ref } from "vue";
import ArrowIcon from "@/components/icons/ArrowIcon.vue";
import AppButton from "@/components/AppButton.vue";

const { count, order } = defineProps({
  count: Number,
  order: String
});

const { data } = await getProjects();
const projects = ref(data.projects);

if (order === "DESC") {
  projects.value = projects.value.reverse();
}

const isProjectOpened = ref([]);

const toggleIsProjectOpened = (i) => {
  if (!("ontouchstart" in window)) return;
  isProjectOpened.value[i] = !isProjectOpened.value[i];
};
</script>

<template>
  <div class="grid gap-4 md:gap-6 lg:gap-8">
    <figure
      @click="toggleIsProjectOpened(project.id)"
      v-for="project in projects.slice(0, count ? count - projects.length : projects.length)"
      :key="project.id"
      class="group relative overflow-hidden rounded-lg shadow-2xl"
    >
      <img
        :src="project.thumbnail"
        :alt="'image pour le projet ' + project.title"
        loading="lazy"
        class="duration-600 z-10 object-cover transition ease-in-out group-hover:scale-110 group-hover:cursor-pointer"
        :class="{
          'scale-110 ': isProjectOpened[project.id],
          'cursor-pointer': !isProjectOpened[project.id]
        }"
      />
      <figcaption
        class="pointer-events-none absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-4 bg-primary-500 opacity-0 transition-opacity duration-300 ease-in-out group-hover:pointer-events-auto group-hover:opacity-100"
        :class="{
          'pointer-events-auto opacity-100': isProjectOpened[project.id]
        }"
      >
        <h3 class="text-center text-2xl font-semibold text-secondary-50 md:text-3xl lg:text-4xl">
          {{ project.title }}
        </h3>
        <p class="md:text-1xl w-[90%] text-center text-secondary-50 lg:text-xl">{{ project.introduction }}</p>
        <AppButton :is-primary="false" :data="project" :name="'project'" :params="{ slug: project.slug }">
          En savoir plus
          <ArrowIcon />
        </AppButton>
        <svg
          v-if="isProjectOpened[project.id]"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute right-3 top-3 h-10 w-10 cursor-pointer fill-none stroke-primary-50 md:h-14 md:w-14"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m15 9-6 6" />
          <path d="m9 9 6 6" />
        </svg>
      </figcaption>
    </figure>
  </div>
</template>
