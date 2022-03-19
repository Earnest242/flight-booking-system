<script setup>
import EditICon from "./icons/EditICon.vue";
import CheckboxEmpty from "./icons/CheckboxEmpty.vue";
import CheckboxMarked from "./icons/CheckboxMarked.vue";
import { ref, computed, onMounted } from "vue";

const { tableData, tableHeaders, editable } = defineProps({
  tableData: Array,
  tableHeaders: Array,
  editable: Boolean,
});

const selected = ref([]);

const handleSelect = (index) => {
  selected.value[index] = !selected.value[index];
};

const handleSelectAll = () => {
  if (allSelected.value) toggleAll(false);
  else toggleAll(true);
};

const toggleAll = (value) => {
  tableData.forEach((item, index) => {
    selected.value[index] = value;
  });
};

const allSelected = computed(() => {
  return !selected.value.some((value) => value === false);
});

toggleAll(false);
</script>

<template>
  <div class="w-full text-sm">
    <tr
      class="px-3 py-3 bg-main-color-light grid grid-flow-col auto-cols-fr content-center"
    >
      <th
        class="grid place-content-center cursor-pointer"
        @click="handleSelectAll()"
      >
        <CheckboxMarked v-if="allSelected" />
        <CheckboxEmpty v-else />
      </th>
      <th
        v-for="(field, index) in tableHeaders"
        :key="index"
        class="md:block"
        :class="{ hidden: !field.important, 'md:pl-4': field.align === 'left' }"
        :style="{
          'grid-column': `span ${field.span}/ span ${field.span}`,
          'text-align': `${field.align}`,
        }"
      >
        {{ field.title }}
      </th>
      <th class="cursor-default" v-if="editable">
        <span class="hidden md:block">Edit</span>
        <span class="grid place-content-center md:hidden"><EditICon /></span>
      </th>
    </tr>

    <tr
      class="px-3 py-2 border-b-2 border-b-main-color-light grid grid-flow-col auto-cols-fr content-center"
      v-for="(item, index) in tableData"
      :key="index"
    >
      <td
        class="grid place-content-center opacity-60 cursor-pointer"
        @click="handleSelect(index)"
      >
        <CheckboxMarked v-if="selected[index]" />
        <CheckboxEmpty v-else />
      </td>

      <td
        v-for="(field, i) in tableHeaders"
        :key="i"
        class="md:block"
        :style="{
          'grid-column': `span ${field.span}/ span ${field.span}`,
          'text-align': `${field.align}`,
        }"
        :class="{
          hidden: !field.important,
          'md:pl-4': field.align === 'left',
          'md:grid place-content-center': field.align === 'center',
        }"
      >
        <div
          v-if="field.title === 'Image'"
          class="h-6 aspect-square bg-cover rounded-sm"
          :style="{ backgroundImage: `url(${item[field.name]})` }"
        ></div>
        <span
          v-else
          :class="{
            'font-medium': field.name === 'name',
            'opacity-80': field.name !== 'name',
            'py-0.5 px-4 rounded-lg font-medium text-side-bg text-xs':
              field.name === 'status',
            'bg-active': field.name === 'status' && item.status === 'active',
            'bg-inactive':
              field.name === 'status' && item.status === 'inactive',
          }"
        >
          {{ item[field.name] }}
        </span>
      </td>

      <td
        class="grid place-content-center opacity-70 cursor-pointer"
        :class="{ hidden: !editable }"
      >
        <EditICon />
      </td>
    </tr>
  </div>
</template>
