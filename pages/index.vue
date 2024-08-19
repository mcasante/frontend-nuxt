<script setup lang="ts">
import type { Seller } from "~/types";

const sellers = await $fetch<Seller.ISeller[]>("/api/sellers");
</script>

<template>
  <div class="flex gap-4 justify-end">
    <seller-card v-for="seller in sellers" :seller="seller" />
  </div>

  <client-only>
    <orders-table />
  </client-only>
</template>
