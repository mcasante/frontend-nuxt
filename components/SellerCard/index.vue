<script setup lang="ts">
import type { Seller } from "~/types";

const props = defineProps<{
  seller: Seller.ISeller;
}>();

const amount = computed(() => formatCurrency(props.seller.totalSales));
</script>

<template>
  <u-card
    :ui="{
      base: 'rtb-card',
      header: {
        background: 'bg-white rounded-t-xl',
        base: 'relative text-sm font-bold overflow-hidden z-10',
      },
      body: {
        base: 'relative z-1',
        background: 'bg-white rounded-b-xl',
        padding: '!py-3',
      },
    }"
  >
    <template #header> Total of {{ seller.name }} </template>

    <div class="text-right">
      {{ amount }}
    </div>
  </u-card>
</template>

<style scoped lang="postcss">
.rtb-card {
  @apply relative z-10;
  border-radius: 14px;
  padding: 2px;

  &::before {
    @apply absolute inset-0;
    content: "";
    transition: opacity 0.25s linear;
    border-radius: 14px;
    background: linear-gradient(
      261.7deg,
      rgb(162, 41, 185) 23.74%,
      rgb(237, 65, 54) 77.94%
    );
    opacity: 0;
  }

  &:hover::before {
    opacity: 1;
  }
}
</style>
