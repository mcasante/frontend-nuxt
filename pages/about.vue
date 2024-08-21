<script setup lang="ts">
const route = useRoute();

const hashless = computed(() => route?.hash?.replace("#", ""));

const frontEndStack = [
  {
    name: "Vue.js",
    url: "https://vuejs.org/",
    icon: "i-logos-vue",
  },
  {
    name: "Nuxt.js",
    url: "https://nuxtjs.org/",
    icon: "i-logos-nuxt-icon",
  },
  {
    name: "TailwindCSS",
    url: "https://tailwindcss.com/",
    icon: "i-logos-tailwindcss-icon",
  },
  {
    name: "TypeScript",
    url: "https://www.typescriptlang.org/",
    icon: "i-logos-typescript-icon",
  },
];

const backEndStack = [
  {
    name: "NestJS",
    url: "https://nestjs.com/",
    icon: "i-logos-nestjs",
  },
  {
    name: "TypeScript",
    url: "https://www.typescriptlang.org/",
    icon: "i-logos-typescript-icon",
  },
  {
    name: "MySQL",
    url: "https://www.mysql.com/",
    icon: "i-logos-mysql-icon",
  },
  {
    name: "Docker",
    url: "https://www.docker.com/",
    icon: "i-logos-docker-icon",
  },
  {
    name: "Makefile",
    url: "https://www.gnu.org/software/make/",
    icon: "i-logos-gnu",
  },
];

const sourceBtnConfig: any = {
  padded: false,
  variant: "link",
  color: "gray",
  class: "italic",
  target: "_blank",
  rel: "noopener noreferrer",
};
</script>

<template>
  <div id="about" class="max-w-3xl mx-auto">
    <about-section
      id="frontend"
      title="The frontend"
      :emphasis="hashless"
      hash="frontend"
    >
      <small class="text-stone-500 inline-block mb-6">
        source:
        <u-button
          to="https://github.com/mcasante/frontend-nuxt"
          v-bind="sourceBtnConfig"
        >
          https://github.com/mcasante/frontend-nuxt
        </u-button>
      </small>
      <stack-list :stack="frontEndStack" />

      <p class="content">
        My frontend expertise revolves around building high-performance,
        user-friendly interfaces using modern technologies like
        <em>Vue.js</em> and <em>Nuxt.js</em>. I leverage <em>TypeScript</em> for
        type safety and tools like <em>Vite</em> for optimized build processes.
        My approach emphasizes clean, responsive design using
        <em>Tailwind CSS</em> and <em>SCSS</em>, with a strong focus on
        component-based development. By utilizing <em>Vuex</em>, <em>Pinia</em>,
        and <em>VueUse</em>, I ensure that my applications are not only visually
        appealing but also robust, scalable, and easy to maintain.
      </p>
    </about-section>

    <about-section
      id="backend"
      title="The backend"
      :emphasis="hashless"
      hash="backend"
    >
      <small class="text-stone-500 inline-block mb-6">
        source:
        <u-button
          to="https://github.com/mcasante/backend-njs"
          v-bind="sourceBtnConfig"
        >
          https://github.com/mcasante/backend-njs
        </u-button>
      </small>

      <stack-list :stack="backEndStack" />

      <p class="content">
        For the backend of this project, I opted for <em>NestJS</em> because,
        while some might consider it overkill for smaller projects, I recognize
        that backend development isn't my strongest area. NestJS, with its
        highly opinionated structure and design patterns, provides a robust
        foundation that helps me avoid common pitfalls. Though it may have a
        steeper learning curve and could be seen as time-consuming, I believe
        that starting with a less structured framework can lead to issues down
        the road. I also believe that by working with highly strcutured
        frameworks is a great opportunity to understand further their design
        decisions, why they exist and how they can help to build better
        software. <br /><br />

        To further ensure consistency and ease of setup, I decided to use
        <em>Docker</em>, particularly for managing <em>MySQL</em>, which was
        chosen to align with specific job requirements.
        <em>Docker</em> simplifies the process of setting up the
        <em>MySQL</em> database, ensuring that my development environment is
        consistent, reliable, and easy to manage.
      </p>
    </about-section>

    <about-section
      id="about-me"
      title="About me"
      :emphasis="hashless === 'about-me' && 'me'"
      hash="about-me"
    >
      <small class="text-stone-500 inline-block mb-4">
        profile:
        <u-button
          to="https://www.linkedin.com/in/mcasante/"
          v-bind="sourceBtnConfig"
        >
          https://www.linkedin.com/in/mcasante/
        </u-button>
      </small>

      <p class="content !mt-0">
        I am Matheus Casante, a seasoned front-end developer with a strong focus
        on creating intuitive and efficient user interfaces. Currently, I am
        part of the team at Folha de São Paulo, where I contribute to building a
        robust Design System and middleware backend layer, ensuring seamless
        data processing and declarative UI rendering. My experience spans from
        developing comprehensive front-end solutions for client credit platforms
        at a55 to crafting international brand websites at The9Level, using
        technologies like Vue.js, TypeScript, and Astro. With a foundation in
        Marketing and Systems Analysis and Development, I combine technical
        expertise with strategic thinking to deliver high-impact digital
        products.
      </p>
    </about-section>
  </div>
</template>

<style scoped lang="postcss">
.content {
  @apply text-justify mt-6 leading-relaxed;

  > em {
    @apply relative;

    &:after {
      content: "";
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, rgb(237, 65, 54), rgb(162, 41, 185));
      z-index: -1;
    }
  }
}
</style>
