<script setup>
import AppTable from "../components/AppTable.vue";
import { productList, productFields } from "@/store/products";
import BreadCrumbs from "../components/BreadCrumbs.vue";
</script>

<template>
  <div class="w-full h-full">
    <div class="w-full h-full flex flex-col gap-4">
      <BreadCrumbs />
      <AppTable
        class="flex-1 outline outline-1 shadow outline-main-color-light rounded-md mb-3"
        :table-data="productList"
        :table-headers="productFields"
        :editable="true"
      />
    </div>
  </div>
</template>
