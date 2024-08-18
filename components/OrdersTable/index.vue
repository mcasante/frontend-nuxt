<script setup lang="ts">
import type { Order } from "~/types";

interface TableSort {
  column: Order.SortBy;
  direction: Lowercase<Order.SortOrder>;
}

const sort = ref<TableSort>({
  column: "orderId",
  direction: "asc",
});

const columns = [
  { key: "orderId", label: "Order ID", sortable: true },
  { key: "product", label: "Product", sortable: true },
  { key: "seller.name", label: "Seller", sortable: true },
  { key: "country", label: "Country", sortable: true },
  { key: "price", label: "Price", sortable: true },
];

const page = ref(1);
const pageCount = ref(5);
const total = ref(0);

const listOrdersQuery = computed(() => {
  return {
    page: page.value,
    limit: pageCount.value,
    sort: sort.value.column,
    order: sort.value.direction.toUpperCase(),
  };
});

const { status, data: response } = useLazyFetch<Order.ListRes>("/api/orders", {
  query: listOrdersQuery,
});

const orders = computed(() => response.value?.data);

watch(orders, () => {
  total.value = response.value?.total ?? 0;
});

const pending = computed(() => status.value === "pending");
</script>

<template>
  <u-card class="mt-8">
    <u-table
      sort-mode="manual"
      :loading-state="{
        icon: 'i-heroicons-arrow-path-20-solid',
        label: 'Loading...',
      }"
      :progress="{ color: 'primary', animation: 'carousel' }"
      :columns="columns"
      :rows="orders!"
      :loading="pending"
      v-model:sort="sort"
    />
    <template #footer>
      <div class="flex justify-end px-3 mb-4">
        <UPagination v-model="page" :page-count="pageCount" :total="total" />
      </div>
    </template>
  </u-card>
</template>
