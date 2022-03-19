import { ref, computed } from "vue";

const state = ref({
  customerList: [
    {
      id: 21,
      name: "Johnny Bravo",
      email: "johnybravo@gmail.com",
      orders: "n/a",
      spend: "n/a",
      country: "U.S",
      dateAdded: "28 Aug, 2021",
      status: "inactive",
    },
    {
      id: 15,
      name: "Klaus Schmidt",
      email: "klausschmidt@gmail.com",
      orders: "n/a",
      spend: "n/a",
      country: "Germany",
      dateAdded: "1 Jul, 2021",
      status: "inactive",
    },
    {
      id: 57,
      name: "Joachim Sutton",
      email: "joachimsutton@gmail.com",
      orders: "n/a",
      spend: "n/a",
      country: "Canada",
      dateAdded: "21 Jan, 2022",
      status: "active",
    },
    {
      id: 73,
      name: "Sally Walker",
      email: "sallywalker@gmail.com",
      orders: "n/a",
      spend: "n/a",
      country: "U.S",
      dateAdded: "12 May, 2021",
      status: "active",
    },
    {
      id: 24,
      name: "Sidney Phikule",
      email: "sidneyphikule@gmail.com",
      orders: "n/a",
      spend: "n/a",
      country: "South Africa",
      dateAdded: "15 Feb, 2022",
      status: "inactive",
    },
  ],
  customerFields: [
    {
      title: "ID",
      name: "id",
      span: 1,
      align: "center",
      important: true,
    },
    {
      title: "Customer Name",
      name: "name",
      span: 3,
      align: "left",
      important: true,
    },
    {
      title: "Email",
      name: "email",
      span: 3,
      align: "left",
      important: false,
    },
    {
      title: "Orders",
      name: "orders",
      span: 1,
      align: "left",
      important: false,
    },
    {
      title: "Spent",
      name: "spend",
      span: 1,
      align: "center",
      important: true,
    },
    {
      title: "Country",
      name: "country",
      span: 2,
      align: "center",
      important: true,
    },
    {
      title: "Date Added",
      name: "dateAdded",
      span: 2,
      align: "center",
      important: false,
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

export const customerList = computed(() => {
  return state.value.customerList;
});

export const customerFields = computed(() => {
  return state.value.customerFields;
});
