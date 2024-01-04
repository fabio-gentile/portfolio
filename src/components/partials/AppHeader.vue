<script setup>
import AppDarkMode from "@/components/partials/AppDarkMode.vue";
import { ref } from "vue";
import GithubIcon from "@/components/icons/GithubIcon.vue";
import LinkedinIcon from "@/components/icons/LinkedinIcon.vue";
import MailIcon from "@/components/icons/MailIcon.vue";
import HomeIcon from "@/components/icons/HomeIcon.vue";
import ProjectIcon from "@/components/icons/ProjectIcon.vue";
import MapIcon from "@/components/icons/MapIcon.vue";

const isMenuBurgerOpened = ref(false);
const toggleMenuBurger = () => {
  isMenuBurgerOpened.value = !isMenuBurgerOpened.value;
};
</script>
<template>
  <header
    :class="{ '': isMenuBurgerOpened }"
    class="sticky top-0 z-50 h-full max-w-full bg-secondary-50 dark:bg-secondary-950"
  >
    <nav class="sticky top-0">
      <div class="grid gap-5 py-4">
        <div class="flex items-center justify-between">
          <RouterLink :to="{ name: 'home' }">
            <h1 class="text-4xl font-bold">Fabio Gentile</h1>
          </RouterLink>
          <div class="flex gap-3">
            <!--          links tablet -->
            <ul class="hidden w-fit gap-3 md:flex lg:hidden">
              <li>
                <RouterLink
                  :to="{ name: 'home' }"
                  class="flex items-center gap-4 rounded-xl bg-primary-500 px-4 py-2 font-semibold text-secondary-50 hover:cursor-pointer hover:bg-primary-600"
                >
                  <HomeIcon />
                  <p class="text-xl">Accueil</p>
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  :to="{ name: 'projects' }"
                  class="flex items-center gap-4 rounded-xl bg-primary-500 px-4 py-2 font-semibold text-secondary-50 hover:cursor-pointer hover:bg-primary-600"
                >
                  <ProjectIcon />
                  <p class="text-xl">Projets</p>
                </RouterLink>
              </li>
              <li>
                <a
                  href="mailto:gentilef.fabio@gmail.com"
                  class="flex items-center gap-4 rounded-xl bg-primary-500 px-4 py-2 font-semibold text-secondary-50 hover:cursor-pointer hover:bg-primary-600"
                >
                  <MailIcon />
                  <p class="text-xl">Contact</p>
                </a>
              </li>
            </ul>
            <AppDarkMode />
            <!--            burger menu-->
            <div
              class="rounded-full bg-primary-500 p-2 hover:cursor-pointer hover:bg-primary-600 md:hidden"
              @click="toggleMenuBurger"
            >
              <svg
                v-if="!isMenuBurgerOpened"
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 fill-none stroke-primary-50"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 fill-none stroke-primary-50"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </div>
          </div>
        </div>
        <p class="hidden lg:block">Étudiant en développement web.</p>
        <div class="hidden lg:flex lg:items-center lg:gap-2">
          <MapIcon :width="6" :height="6" />
          <p>Lobbes</p>
        </div>
        <ul class="mb-5 hidden gap-4 lg:flex">
          <li>
            <a href="https://github.com/fabio-gentile" target="_blank">
              <GithubIcon />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/fabio-gentile-920685259/" target="_blank">
              <LinkedinIcon />
            </a>
          </li>
        </ul>
      </div>
      <ul :class="{ 'mb-5 grid': isMenuBurgerOpened, hidden: !isMenuBurgerOpened }" class="w-full gap-3 lg:grid">
        <li>
          <RouterLink
            :to="{ name: 'home' }"
            class="flex items-center gap-4 rounded-xl bg-primary-500 px-6 py-4 font-semibold text-secondary-50 hover:cursor-pointer hover:bg-primary-600"
            @click="toggleMenuBurger"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 fill-none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <p class="text-xl">Accueil</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'projects' }"
            class="flex items-center gap-4 rounded-xl bg-primary-500 px-6 py-4 font-semibold text-secondary-50 hover:cursor-pointer hover:bg-primary-600"
            @click="toggleMenuBurger"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 fill-none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
              />
            </svg>
            <p class="text-xl">Projets</p>
          </RouterLink>
        </li>
        <li>
          <a
            href="mailto:gentilef.fabio@gmail.com"
            class="flex items-center gap-4 rounded-xl bg-primary-500 px-6 py-4 font-semibold text-secondary-50 hover:cursor-pointer hover:bg-primary-600"
            @click="toggleMenuBurger"
          >
            <MailIcon />
            <p class="text-xl">Contact</p>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
