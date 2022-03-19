<script setup>
import LogoIcon from "./icons/LogoIcon.vue";
import CloseIcon from "./icons/CloseIcon.vue";
import CaretRight from "./icons/CaretDown.vue";
import { ref } from "vue";
const { list } = defineProps({
  list: Array,
});
const hoverList = ref("");
</script>

<template>
  <nav
    class="h-full bg-side-bg md:w-1/4 flex flex-col overflow-auto md:overflow-visible"
  >
    <div
      class="top text-main-color-light h-16 py-4 bg-main-color font-medium text-2xl flex gap-3 items-center justify-start pl-5"
    >
      <LogoIcon class="text-accent-color text-3xl" />
      <span
        class="tracking-wide text-accent-color opacity-70"
        style="font-family: 'Nunito'; transform: scale(1, 0.95)"
      >
        errand
      </span>
      <CloseIcon
        class="md:hidden opacity-60 grid place-content-center ml-auto mr-4"
        @click="$emit('close')"
      />
    </div>

    <ul class="px-2 py-3 flex flex-col md:gap-2 w-full">
      <li
        v-for="(item, index) in list"
        :key="index"
        class="text-secondary-color px-3 py-1 md:py-2 rounded-md flex flex-col cursor-pointer relative"
        @click.prevent="$router.push(`${item.linkTo}`)"
        @click="$emit('close')"
        :class="{
          'bg-main-color text-main-color-light hover:text-top-bg':
            $route.path === item.linkTo,
          'hover:text-top-bg hover:bg-secondary-color':
            $route.path !== item.linkTo,
        }"
        @mouseover="hoverList = item.name"
        @mouseleave="hoverList = ''"
      >
        <span class="flex gap-3 items-center">
          <span><component :is="item.icon"></component></span>
          <span>{{ item.name }}</span>
        </span>
        <transition name="slide-up-fade">
          <ul
            v-if="item.hasOwnProperty('children') & (hoverList === item.name)"
            class="rounded-md px-2 py-2 bg-main-color md:flex flex-col gap-2 text-left w-48 text-secondary-color absolute top-0 -right-52 z-10 transition-all hidden"
          >
            <li
              v-for="(item, index) in item.children"
              :key="index"
              class="px-2 py-2 rounded-md hover:bg-main-color-light hover:text-side-bg"
            >
              {{ item.name }}
            </li>
          </ul>
        </transition>

        <ul
          class="md:hidden px-2 md:py-2 md:bg-main-color flex flex-col gap-2 text-left w-48 text-secondary-color md:absolute md:top-0 mx-2 my-2"
        >
          <li
            v-for="(item, index) in item.children"
            :key="index"
            class="px-2 py-0.5 hover:bg-main-color-light hover:text-side-bg flex items-center gap-1"
          >
            <CaretRight class="grid place-content-center" /><span>
              {{ item.name }}
            </span>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.slide-up-fade-enter-active {
  transition: all 0.1s ease-out;
}

.slide-up-fade-leave-active {
  transition: all 0.35s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-up-fade-enter-from,
.slide-up-fade-leave-to {
  transform: translateY(20%);
  opacity: 0;
}
</style>
