<script setup lang="ts">
import type { Order, TableSort } from "~/types";
import type { ProgressColor, ProgressAnimation } from "#ui/types";

type OrderTableSort = TableSort<Order.SortBy, Lowercase<Order.SortOrder>>;

const props = defineProps<{
  sort: OrderTableSort;
  page: number;
  pageCount: number;
  total: number;
  orders: Order.IOrder[] | undefined;
  pending: boolean;
}>();

const columns = [
  { key: "orderId", label: "Order ID", sortable: true },
  { key: "product", label: "Product", sortable: true },
  { key: "seller.name", label: "Seller", sortable: true },
  { key: "country", label: "Country", sortable: true },
  { key: "price", label: "Price", sortable: true },
];

const loadingStateProps = {
  icon: "i-heroicons-arrow-path-20-solid",
  label: "Loading...",
};

const progressProps = {
  color: "primary" as ProgressColor,
  animation: "carousel" as ProgressAnimation,
};

const pageFrom = computed(() => (props.page - 1) * props.pageCount + 1);
const pageTo = computed(() =>
  Math.min(props.page * props.pageCount, props.total)
);

const emit = defineEmits<{
  (e: "update:sort", value: OrderTableSort): void;
  (e: "update:page", value: number): void;
}>();
</script>

<template>
  <u-card>
    <u-table
      sort-mode="manual"
      :loading-state="loadingStateProps"
      :progress="progressProps"
      :columns="columns"
      :rows="props.orders!"
      :loading="props.pending"
      :sort="props.sort"
      @update:sort="$emit('update:sort', $event)"
    />
    <template #footer>
      <div class="flex flex-wrap justify-between items-center px-3 mb-4">
        <div>
          <span class="text-sm leading-5">
            Showing
            <span class="font-medium">{{ pageFrom }}</span>
            to
            <span class="font-medium">{{ pageTo }}</span>
            of
            <span class="font-medium">{{ props.total }}</span>
            results
          </span>
        </div>
        <UPagination
          :model-value="props.page"
          :page-count="props.pageCount"
          :total="props.total"
          @update:modelValue="$emit('update:page', $event)"
        />
      </div>
    </template>
  </u-card>
</template>
