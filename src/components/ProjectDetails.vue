<script setup>
import ArrowIcon from "@/components/icons/ArrowIcon.vue";
import ProjectSubtitle from "@/components/ProjectSubtitle.vue";
import WebsiteIcon from "@/components/icons/WebsiteIcon.vue";
import ProjectSlider from "@/components/ProjectCarousel.vue";
import GithubIcon from "@/components/icons/GithubIcon.vue";
import { getProjects } from "@/services/getProjects.js";
import { useRoute } from "vue-router";
import Error from "@/pages/Error.vue";
import router from "@/router/index.js";
const route = useRoute();
const projectSlug = route.params.slug;

const { data } = await getProjects();

const project = data.projects.filter((project) => project.slug === projectSlug)[0];

if (!project) {
  router.push("error");
}
</script>

<template>
  <section v-if="!project" class="grid gap-4">
    <Error />
  </section>
  <section v-else class="flex flex-col justify-around">
    <p
      @click="$router.back()"
      class="fixed bottom-2 right-2 z-50 w-fit cursor-pointer rounded-full border-2 border-primary-400 bg-secondary-50 p-2 md:bottom-4 md:right-4"
      title="Revenir en arrière"
    >
      <ArrowIcon class="rotate-180 stroke-primary-500" />
    </p>
    <div class="grid gap-5">
      <h3 class="text-center text-3xl font-bold md:mb-2">{{ project.title }}</h3>
      <div>
        <ProjectSubtitle>Technologies</ProjectSubtitle>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in project.technology"
            :key="tech.id"
            class="w-fit rounded-lg bg-white p-1 px-2 text-sm text-secondary-950 dark:bg-secondary-900 dark:text-secondary-50"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <div>
        <ProjectSubtitle>À propos</ProjectSubtitle>
        <!--          <p>{{ project.description }}</p>-->
        <p v-html="project.description"></p>
        <p class="mt-3">
          Pour en savoir plus, consultez le projet sur
          <a :href="project.link_github" target="_blank" class="hover:underline">Github</a>
        </p>
      </div>
      <div v-if="project.link_github">
        <ProjectSubtitle>
          <GithubIcon :width="6" :height="6" />
          Github
        </ProjectSubtitle>
        <a :href="project.link_github" target="_blank" class="font-semibold tracking-wide hover:underline">{{
          project.link_github
        }}</a>
      </div>
      <div v-if="project.link_website">
        <ProjectSubtitle>
          <WebsiteIcon :width="6" :height="6" />
          Site internet
        </ProjectSubtitle>
        <a :href="project.link_website" target="_blank" class="font-semibold tracking-wide hover:underline">{{
          project.link_website
        }}</a>
      </div>
      <div v-if="project.images">
        <ProjectSubtitle>Galerie</ProjectSubtitle>
        <ProjectSlider :images="project.images" :title="project.title" />
      </div>
    </div>
  </section>
</template>
