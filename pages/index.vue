<script setup lang="ts">
import type { Seller } from "~/types";

const sellers = await $fetch<Seller.ISeller[]>("/api/sellers");
</script>

<template>
  <h1 class="text-4xl">Orders</h1>

  <div class="flex gap-4 justify-end mt-8">
    <u-card v-for="seller in sellers">
      <template #header>
        <span>Total of {{ seller.name }}</span>
      </template>

      <span>{{ seller.totalSales }}</span>
    </u-card>
  </div>

  <client-only>
    <orders-table />
  </client-only>
</template>
