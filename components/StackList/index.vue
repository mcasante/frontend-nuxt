<script setup lang="ts">
const props = defineProps<{
  stack: {
    name: string;
    url: string;
    icon: string;
  }[];
}>();

const stackItemBtn: any = {
  padded: false,
  color: "black",
  variant: "link",
  target: "_blank",
  rel: "noopener noreferrer",
  size: "xl",
};
</script>

<template>
  <ul class="stack">
    <li class="mb-1" v-for="tech in props.stack" :key="tech.name">
      <u-button :icon="tech.icon" :to="tech.url" v-bind="stackItemBtn">
        {{ tech.name }}
      </u-button>
    </li>
  </ul>
</template>
