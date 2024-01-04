const BASE_URL = "Fabio Gentile";

export default [
  {
    name: "home",
    path: "/",
    component: () => import("@/pages/Home.vue"),
    meta: {
      title: `${BASE_URL} - Développeur web junior`
    }
  },
  {
    name: "projects",
    path: "/projets",
    component: () => import("@/pages/Projects.vue"),
    meta: {
      title: `Projets - ${BASE_URL}`
    }
  },
  {
    name: "project",
    path: "/projet/:slug",
    component: () => import("@/pages/Project.vue"),
    meta: {
      title: BASE_URL
    }
  },
  {
    name: "error",
    path: "/:pathMatch(.*)*",
    component: () => import("@/pages/Error.vue"),
    meta: {
      title: `Page introuvable - ${BASE_URL}`
    }
  }
];
