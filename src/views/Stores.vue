<script setup>
import AppTable from "../components/AppTable.vue";
import { storeList, storeFields } from "@/store/stores";
import BreadCrumbs from "../components/BreadCrumbs.vue";
</script>

<template>
  <div class="w-full h-full">
    <div class="w-full h-full flex flex-col gap-4">
      <BreadCrumbs />
      <AppTable
        class="flex-1 outline outline-1 shadow outline-main-color-light rounded-md mb-3"
        :table-data="storeList"
        :table-headers="storeFields"
        :editable="false"
      />
    </div>
  </div>
</template>
