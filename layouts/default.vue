<script setup lamg="ts">
const navLinks = [
  { label: "the backend", hash: "#backend" },
  { label: "the frontend", hash: "#frontend" },
  { label: "about me", hash: "#about-me" },
];
</script>

<template>
  <header
    class="flex justify-center shadow-md"
    style="box-shadow: 0 0 24px 0 rgb(230, 230, 230)"
  >
    <u-container class="py-6 flex gap-4 justify-end">
      <u-link to="/" class="text-2xl text-primary font-bold mr-auto">
        <h1>Dashboard</h1>
      </u-link>

      <client-only>
        <u-link
          v-for="link in navLinks"
          :key="link.hash"
          :to="{ path: '/about', hash: link.hash }"
          exact-hash
          active-class="text-primary"
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
  <main>
    <u-container class="py-8">
      <slot />
    </u-container>
  </main>
</template>
