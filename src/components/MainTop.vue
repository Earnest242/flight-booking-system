<script setup>
import SearchIcon from "./icons/SearchIcon.vue";
import BellIcon from "./icons/BellIcon.vue";
import MenuIcon from "./icons/MenuIcon.vue";

import { navigationList } from "@/store/navigation";
import AppNav from "./AppNav.vue";
import { ref } from "vue";

const showMenu = ref(false);
</script>

<template>
  <div
    class="top w-full bg-top-bg h-16 text-secondary-color flex justify-between px-4 items-center shadow-md text-lg"
  >
    <div class="left flex gap-2">
      <span
        class="icon grid place-content-center md:hidden"
        @click.prevent="showMenu = true"
      >
        <MenuIcon />
      </span>
      <span class="hidden md:block">
        <input
          placeholder="Enter something to search..."
          class="btn text-sm px-1 py-0.5 focus:outline-none focus:border-b-2 focus:border-b-secondary-color"
          type="text"
        />
      </span>
      <span class="icon grid place-content-center"><SearchIcon /></span>
    </div>

    <div class="right flex gap-2">
      <div class="icon grid place-content-center"><BellIcon /></div>

      <div class="bottom ml-3 flex items-center gap-2 relative">
        <div
          style="
            background-image: url('https://images.unsplash.com/photo-1519238359922-989348752efb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGNoaWxkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60');
          "
          class="img grid place-content-center rounded-full overflow-hidden h-8 aspect-square bg-cover"
        >
          <span
            class="absolute left-6 bottom-0 bg-accent-color h-2 aspect-square rounded-full z-10"
          ></span>
        </div>
        <div
          class="user text-main-color-light text-sm font-black hidden md:block"
        >
          Bosset
        </div>
      </div>
    </div>

    <transition name="slide-left-fade">
      <AppNav
        v-if="showMenu"
        :list="navigationList"
        class="menu fixed inset-0 z-50 h-screen w-screen"
        @close="showMenu = false"
      />
    </transition>
  </div>
</template>

<style scoped>
.slide-left-fade-enter-active {
  transition: all 0.8s ease-out;
}

.slide-left-fade-leave-active {
  transition: all 0.65s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-left-fade-enter-from,
.slide-left-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
