<script setup>
import { RouterView } from "vue-router";
import AppNav from "./components/AppNav.vue";
import MainTop from "./components/MainTop.vue";
import { navigationList } from "@/store/navigation";
</script>

<template>
  <div class="bg w-screen h-screen overflow-hidden md:px-12 md:py-8">
    <div
      class="container h-full rounded-lg overflow-hidden outline outline-1 outline-main-bg shadow-md flex"
    >
      <AppNav :list="navigationList" class="hidden md:block" />

      <main class="w-full h-full flex flex-col">
        <MainTop />
        <RouterView
          class="bg-main-bg text-main-color px-4 py-3 md:px-8 md:py-5 flex-1 flex items-center justify-center"
        />
      </main>
    </div>
  </div>
</template>
