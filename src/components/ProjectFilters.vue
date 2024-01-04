<script setup>
import { getProjects } from "@/services/getProjects.js";
import { ref, computed } from "vue";
import ArrowIcon from "@/components/icons/ArrowIcon.vue";
import AppButton from "@/components/AppButton.vue";

const { data } = await getProjects();
const projects = ref(data.projects.reverse());

const uniqTechnology = computed(() => {
  let technologies = projects.value.map((project) => project.technology.map((technology) => technology));
  const result = [];

  for (let i = 0; i < technologies.length; i++) {
    for (const tech of technologies[i]) {
      if (tech !== "HTML") {
        result.push(tech);
      }
    }
  }
  // console.log(result)
  return [...new Set(result)];
});

const filters = ref([]);
const filteredProjects = computed(() => {
  if (filters.value.length === 0) {
    return projects.value;
  }

  return projects.value.filter((project) => filters.value.every((genre) => project.technology.includes(genre)));
});

const addFilters = (technology) => {
  const index = filters.value.indexOf(technology);

  if (index === -1) {
    filters.value.push(technology);
  } else {
    filters.value.splice(index, 1);
  }
};

const isProjectOpened = ref([]);

const toggleIsProjectOpened = (i) => {
  if (!("ontouchstart" in window)) return;
  isProjectOpened.value[i] = !isProjectOpened.value[i];
};
</script>

<template>
  <section v-if="uniqTechnology" class="mt-4">
    <h4 class="my-2 w-full text-xl font-semibold">Trier par technologie</h4>
    <div class="mb-4 flex flex-wrap gap-3">
      <span
        v-for="technology in uniqTechnology"
        :key="technology"
        @click="addFilters(technology)"
        class="w-fit cursor-pointer select-none rounded-lg p-1 px-2 text-sm dark:text-secondary-50"
        :class="[filters.includes(technology) ? 'bg-primary-500 text-secondary-50' : 'bg-white dark:bg-secondary-900']"
        >{{ technology }}</span
      >
    </div>
  </section>
  <div class="grid gap-4 md:gap-6 lg:gap-8">
    <figure
      @click="toggleIsProjectOpened(project.id)"
      v-for="project in filteredProjects"
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
  <p v-if="filteredProjects.length < 1">Aucun projet trouvé. Essayez de changer les filtres.</p>
</template>
