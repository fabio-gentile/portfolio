<script setup>
import AppProject from "@/components/AppProject.vue";
import MailIcon from "@/components/icons/MailIcon.vue";
import AppSubtitle from "@/components/AppSubtitle.vue";
</script>
<template>
  <div class="grid gap-8 lg:mt-4">
    <section
      class="flex min-h-[calc(80vh-88px)] flex-col items-center justify-around gap-4 text-center md:gap-0 lg:min-h-[calc(80vh-1rem)]"
    >
      <p class="text-3xl font-bold md:text-4xl lg:text-5xl">Bonjour, je m'appelle <span>Fabio</span></p>
      <picture class="group/avatar lg:h-68 relative -mt-4 h-44 w-40 sm:h-60 sm:w-56 lg:w-64">
        <img
          src="/avatar.svg"
          loading="lazy"
          alt="Avatar"
          class="absolute left-1/2 top-1/2 my-auto w-40 -translate-x-1/2 -translate-y-1/2 object-contain transition-all hover:opacity-0 sm:w-56 lg:w-64"
        />
        <img
          src="/avatar_surprised.svg"
          loading="lazy"
          alt="Avatar"
          class="absolute left-1/2 top-1/2 my-auto w-40 -translate-x-1/2 -translate-y-1/2 object-contain opacity-0 transition-all group-hover/avatar:opacity-100 sm:w-56 lg:w-64"
        />
      </picture>
      <div class="text-xl font-bold md:text-2xl">
        <div class="hidden md:block">
          <p>Passionné de developpement web,</p>
          <p>j'effectue un brevet de l'enseignement supérieur à l'EPSE, Enghien</p>
        </div>
        <div class="block md:hidden">
          <p>Passionné de developpement web, j'effectue un brevet de l'enseignement supérieur à l'EPSE, Enghien</p>
        </div>
        <p class="mt-12">
          Je suis à la recherche d’un stage avec une durée comprise entre 7 et 11 semaines, dans la période allant du 26
          février 2024 au 10 mai 2024.
        </p>
      </div>
    </section>
    <!--    projects-->
    <Suspense>
      <section class="grid gap-6">
        <AppSubtitle>Mes derniers projets</AppSubtitle>
        <AppProject :count="2" :order="'DESC'" />
      </section>
    </Suspense>

    <!--    contact-->
    <section class="grid gap-6">
      <AppSubtitle>Me contacter</AppSubtitle>
      <a
        class="flex items-center gap-3 text-xl"
        href="mailto:gentilef.fabio@gmail.com
"
      >
        <MailIcon />
        gentilef.fabio@gmail.com
      </a>
    </section>
  </div>
</template>
