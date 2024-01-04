import { createRouter, createWebHistory } from "vue-router";
import routes from "@/router/routes.js";

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

router.beforeEach((to, from, next) => {
  const title = to.meta.title;

  let slug = to.params.slug;
  if (title) {
    document.title = title;
  }
  if (slug) {
    slug = slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    document.title = `${slug} - ${document.title}`;
  }

  next();
});

export default router;
