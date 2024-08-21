<script setup lang="ts">
import type { Order, Seller, TableSort } from "~/types";

type OrderTableSort = TableSort<Order.SortBy, Lowercase<Order.SortOrder>>;

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

    {{ sellerIds }}
    <div class="flex justify-end mt-8 mb-4">
      <USelectMenu
        v-if="sellers.length > 1"
        :options="sellerOptions"
        v-model="selectedSellers"
        placeholder="Filter by seller"
        multiple
        value-attribute="id"
      />
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
</style>
