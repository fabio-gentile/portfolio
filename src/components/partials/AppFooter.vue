<script setup>
import GithubIcon from "@/components/icons/GithubIcon.vue";
import LinkedinIcon from "@/components/icons/LinkedinIcon.vue";
import MailIcon from "@/components/icons/MailIcon.vue";
</script>

<template>
  <footer
    class="sticky top-[100vh] mt-4 grid gap-3 bg-primary-500 p-6 text-center font-display text-secondary-50 md:mt-6 lg:mt-8"
  >
    <h1 class="text-xl font-bold">Fabio Gentile</h1>
    <ul class="flex justify-center gap-4">
      <li>
        <a href="https://github.com/fabio-gentile" target="_blank">
          <GithubIcon />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/fabio-gentile-920685259/" target="_blank"><LinkedinIcon /></a>
      </li>
      <li>
        <a href="mailto:gentilef.fabio@gmail.com"><MailIcon /> </a>
      </li>
    </ul>
    <p>
      Tous droits réservés -
      <span>icônes par <a class="hover:underline" href="https://lucide.dev/" rel="noreferrer">lucide</a></span>
    </p>
  </footer>
</template>
