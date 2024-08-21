<script setup lang="ts">
const props = defineProps<{
  title: string;
  emphasis?: string | null | false;
  hash: string;
}>();

const parsedTitle = computed(() => {
  if (!props.emphasis) return [props.title];

  const emphasisOnIndex = props.title.indexOf(props.emphasis);
  const firstPart = props.title.slice(0, emphasisOnIndex);
  const secondPart = props.title.slice(emphasisOnIndex);

  return [firstPart, secondPart];
});
</script>

<template>
  <div class="about-section">
    <h1 class="title">
      <u-link
        class="w-full inline-block"
        :hash="props.hash"
        :to="`#${props.hash}`"
      >
        <client-only>
          <template v-for="(word, index) in parsedTitle" :key="index">
            <template v-if="word === props.emphasis">
              <em class="emphasis">{{ word }}</em>
            </template>
            <template v-else>
              {{ word }}
            </template>
          </template>
          <template #fallback>
            {{ props.title }}
          </template>
        </client-only>
      </u-link>
    </h1>

    <slot />
  </div>
</template>

<style scoped lang="postcss">
.about-section {
  @apply py-8 px-4;

  > .title {
    @apply text-4xl relative w-full border-b border-stone-200 pb-2 mb-1;

    &:before {
      @apply absolute top-1 left-[-28px] h-full text-gray-300 font-light text-3xl transition opacity-0;
      content: "#";
    }

    &:hover:before {
      @apply opacity-100;
    }
  }

  > .stack {
    @apply list-disc list-inside mb-4;
  }

  > .content {
    @apply leading-6;
  }
}
</style>
