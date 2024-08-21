<script setup lamg="ts">
import { useWindowScroll, watchDebounced } from "@vueuse/core";

const navLinks = [
  { label: "the frontend", hash: "#frontend" },
  { label: "the backend", hash: "#backend" },
  { label: "about me", hash: "#about-me" },
];

const { y } = useWindowScroll();

const isScrollingUp = ref(false);
watchDebounced(
  y,
  (value, oldValue) => {
    isScrollingUp.value = value < oldValue;
  },
  { debounce: 500, maxWait: 250 }
);

const transform = computed(() => {
  if (isScrollingUp.value || y.value < 100) {
    return `translateY(0%)`;
  }

  return "translateY(-100%)";
});
</script>

<template>
  <header
    class="flex justify-center items-center shadow-md transition-all duration-300 w-full left-0 fixed top-0 z-50 bg-white"
    style="box-shadow: 0 0 24px 0 rgb(230, 230, 230)"
    :style="{ transform }"
  >
    <u-container class="py-6 flex gap-4 justify-end">
      <u-link
        active-class="emphasis"
        inactive-class="text-primary"
        to="/"
        class="text-2xl font-bold mr-auto transition"
      >
        <h1>Dashboard</h1>
      </u-link>

      <client-only>
        <u-link
          v-for="link in navLinks"
          :key="link.hash"
          :to="{ path: '/about', hash: link.hash }"
          exact-hash
          active-class="emphasis"
          class="transition hover:text-primary"
          >{{ link.label }}</u-link
        >

        <template #fallback>
          <u-link
            v-for="link in navLinks"
            :key="link.hash + '-fallback'"
            :to="{ path: '/about', hash: link.hash }"
            >{{ link.label }}</u-link
          >
        </template>
      </client-only>
    </u-container>
  </header>
  <main class="mt-20">
    <u-container class="py-8">
      <slot />
    </u-container>
  </main>
</template>
