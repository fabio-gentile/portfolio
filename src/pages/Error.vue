<template>
  <div class="">
    <section class="font-bold">
      <p class="mb-4 text-xl">La page recherchée n'existe pas.</p>
      <RouterLink :to="{ name: 'home' }" class="font-semibold underline">Revenir à l'accueil</RouterLink>
    </section>
  </div>
</template>
