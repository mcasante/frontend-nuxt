<script setup lang="ts">
import type { Seller } from "~/types";

useSeoMeta({
  title: "Dashboard",
  ogTitle: "Dashboard",
  description: "This is the dashboard page.",
  ogDescription: "This is the dashboard page.",
});

const sellers = await $fetch<Seller.ISeller[]>("/api/sellers");

const { sort, page, sellerIds, pageCount, total, orders, pending } =
  useOrders();

const selectedSellers = ref<number[]>([]);

const sellerOptions = sellers.map((seller) => ({
  label: seller.name,
  id: seller.id,
}));

watch(selectedSellers, () => {
  sellerIds.value = selectedSellers.value.length
    ? selectedSellers.value
    : undefined;
});
</script>

<template>
  <div id="dashboard">
    <div class="flex gap-4 justify-end">
      <seller-card v-for="seller in sellers" :seller="seller" />
    </div>

    <div class="flex justify-end gap-2 mt-8 mb-4">
      <USelectMenu
        v-if="sellers.length > 1"
        :options="sellerOptions"
        v-model="selectedSellers"
        placeholder="Filter by seller"
        multiple
        value-attribute="id"
      />

      <UButton
        icon="i-heroicons-funnel"
        color="gray"
        size="xs"
        :disabled="!selectedSellers.length"
        @click="selectedSellers = []"
      >
        Reset
      </UButton>
    </div>

    <orders-table
      v-model:sort="sort"
      v-model:page="page"
      :pageCount="pageCount"
      :total="total"
      :orders="orders"
      :pending="pending"
    />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.emphasis {
  color: rgb(237, 65, 54);
  background: linear-gradient(90deg, rgb(237, 65, 54), rgb(162, 41, 185)) text;
  -webkit-text-fill-color: transparent;
}

em {
  font-style: normal;
  transition: all 0.4s;
}
</style>
