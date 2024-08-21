import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(({ $router }) => {
  $router.options.scrollBehavior = (to, _, savedPosition) => {
    if (to.hash) {
      return {
        el: to.hash,
        top: 0,
        behavior: "smooth",
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  };
});
