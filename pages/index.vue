<script setup lang="ts">
import type { Order, Seller, TableSort } from "~/types";

type OrderTableSort = TableSort<Order.SortBy, Lowercase<Order.SortOrder>>;

const sellers = await $fetch<Seller.ISeller[]>("/api/sellers");

const { sort, page, pageCount, total, orders, pending } = useOrders();
</script>

<template>
  <div class="flex gap-4 justify-end">
    <seller-card v-for="seller in sellers" :seller="seller" />
  </div>

  <orders-table
    v-model:sort="sort"
    v-model:page="page"
    :pageCount="pageCount"
    :total="total"
    :orders="orders"
    :pending="pending"
  />
</template>
