<script setup lang="ts">
interface Seller {
  id: number;
  name: string;
}

interface Order {
  orderId: number;
  product: string;
  seller: number;
  country: string;
  price: number;
}

const BASE_URL = "http://localhost:4000";
const sellers = await $fetch<Seller[]>(`${BASE_URL}/sellers`, {
  method: "GET",
});

const sort = ref<{ column: string; direction: "asc" | "desc" }>({
  column: "orderId",
  direction: "asc",
});

const { status, data: orders } = useFetch<Order[]>(`${BASE_URL}/orders`, {
  method: "GET",
  query: {
    page: 1,
    limit: 5,
    sortBy: sort.value.column,
    order: sort.value.direction,
  },
});

const columns = [
  { key: "orderId", label: "Order ID", sortable: true },
  { key: "product", label: "Product", sortable: true },
  { key: "seller", label: "Seller", sortable: true },
  { key: "country", label: "Country", sortable: true },
  { key: "price", label: "Price", sortable: true },
];

const pending = computed(() => status.value === "pending");

const page = ref(1);
const pageCount = 5;
const rows = computed(() => {
  if (pending.value) return [];

  return orders.value!.slice(
    (page.value - 1) * pageCount,
    page.value * pageCount
  );
});
</script>

<template>
  <h1 class="text-4xl">Orders</h1>

  <div class="flex gap-4 justify-end mt-8">
    <u-card v-for="seller in sellers">
      <template #header>
        <span>Total of {{ seller.name }}</span>
      </template>

      <span>
        <span>Orders: 10</span><br />
        <span>Revenue: $1000</span>
      </span>
    </u-card>
  </div>

  <client-only>
    <u-card class="mt-8">
      <u-table
        sort-mode="manual"
        :loading-state="{
          icon: 'i-heroicons-arrow-path-20-solid',
          label: 'Loading...',
        }"
        :progress="{ color: 'primary', animation: 'carousel' }"
        :columns="columns"
        :rows="rows"
        :loading="pending"
        v-model:sort="sort"
      />
      <template #footer>
        <div class="flex justify-end px-3 mb-4">
          <UPagination
            v-model="page"
            :page-count="pageCount"
            :total="orders!.length"
          />
        </div>
      </template>
    </u-card>
  </client-only>
</template>
