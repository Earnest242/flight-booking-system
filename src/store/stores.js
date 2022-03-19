import { ref, computed } from "vue";

const state = ref({
  storeList: [
    {
      id: 21,
      name: "Bosset's Store",
      url: "n/a",
      scope: "n/a",
      dateCreated: "18 Feb, 2022",
      status: "active",
    },
  ],
  storeFields: [
    {
      title: "ID",
      name: "id",
      span: 1,
      align: "center",
      important: true,
    },
    {
      title: "Store Name",
      name: "name",
      span: 3,
      align: "left",
      important: true,
    },
    {
      title: "URL",
      name: "url",
      span: 1,
      align: "center",
      important: false,
    },
    {
      title: "Scope",
      name: "scope",
      span: 2,
      align: "center",
      important: true,
    },
    {
      title: "Date Created",
      name: "dateCreated",
      span: 3,
      align: "center",
      important: true,
    },
    {
      title: "Status",
      name: "status",
      span: 1,
      align: "center",
      important: false,
    },
  ],
});

export const storeList = computed(() => {
  return state.value.storeList;
});

export const storeFields = computed(() => {
  return state.value.storeFields;
});
