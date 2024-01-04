<script setup>
import { ref } from "vue";
import { swiper } from "@/utils/swiper.js";
import ChevronIcon from "@/components/icons/ChevronIcon.vue";

const { images, title } = defineProps({
  images: Array,
  title: String
});

const index = ref(0);

const changeSlide = (num) => {
  if (num < 0) num = images.length - 1;

  index.value = num % images.length;
};

swiper(document, {
  left: () => {
    changeSlide(index.value + 1);
  },
  right: () => {
    changeSlide(index.value - 1);
  }
});

const checkIsTouchedScreen = () => {
  return "ontouchstart" in document.documentElement;
};

const isTouchedScreen = ref(checkIsTouchedScreen());
</script>
<template>
  <div class="relative overflow-hidden rounded-lg pt-[calc(9/16*100%)] shadow-2xl">
    <ChevronIcon
      v-if="!isTouchedScreen"
      @click="changeSlide(index - 1)"
      title="Reculer d'une slide"
      id="prev"
      class="absolute left-2 top-1/2 z-50 -translate-y-1/2 transform cursor-pointer md:left-4"
    />
    <div
      class="slides absolute left-0 top-0 h-[calc(9/16*100%)] w-full opacity-0 transition-all"
      v-for="(image, i) in images"
      :key="image"
      :class="[i === index ? 'active' : '']"
    >
      <img :src="image" alt="image" loading="lazy" class="pointer-events-none absolute w-full object-contain" />
    </div>
    <div class="bullets absolute bottom-2 left-1/2 z-50 flex -translate-x-1/2 transform flex-wrap gap-2">
      <div
        v-for="(image, i) in images"
        :key="i"
        :data-id="i"
        class="bullet h-4 w-6 cursor-pointer rounded-lg border-2 border-primary-500 bg-secondary-50"
        :class="[i === index ? 'active' : '']"
        @click="changeSlide(+i)"
        :title="'Slide n°' + (i + 1)"
      ></div>
    </div>
    <ChevronIcon
      v-if="!isTouchedScreen"
      @click="changeSlide(index + 1)"
      title="Avancer d'une slide"
      id="next"
      class="absolute right-2 top-1/2 z-50 -translate-y-1/2 rotate-180 transform cursor-pointer select-none md:right-4"
    />
  </div>
</template>
<style scoped>
.slides.active {
  opacity: 1;
  z-index: 2;
}

.bullet.active {
  background-color: #4c65f9;
}
</style>
