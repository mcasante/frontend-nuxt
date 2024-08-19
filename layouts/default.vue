<template>
  <header
    class="flex justify-center shadow-md"
    style="box-shadow: 0 0 24px 0 rgb(230, 230, 230)"
  >
    <u-container class="py-6 flex gap-4 justify-end">
      <u-link to="/" class="text-2xl text-primary font-bold mr-auto">
        <h1>Dashboard</h1>
      </u-link>

      <u-link
        to="/frontend"
        active-class="text-primary"
        inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >frontend</u-link
      >
      <u-link
        to="/backend"
        active-class="text-primary"
        inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >backend</u-link
      >
      <u-link
        to="/about-me"
        active-class="text-primary"
        inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >about me</u-link
      >
    </u-container>
  </header>
  <main>
    <u-container class="py-8">
      <slot />
    </u-container>
  </main>
</template>
