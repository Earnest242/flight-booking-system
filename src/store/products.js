import { ref, computed } from "vue";

const state = ref({
  productList: [
    {
      url: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      id: 75,
      name: "Oxford Boots",
      SKU: "zxcvbnm",
      category: "n/a",
      dateAdded: "1 Feb, 2022",
      status: "inactive",
    },
    {
      url: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      id: 101,
      name: "Nike's High Tops",
      SKU: "zxcvbnm",
      category: "n/a",
      dateAdded: "16 Jan, 2022",
      status: "active",
    },
    {
      url: "https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      id: 23,
      name: "Zero Max 1",
      SKU: "zxcvbnm",
      category: "n/a",
      dateAdded: "18 Feb, 2022",
      status: "inactive",
    },
    {
      url: "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      id: 57,
      name: "Northstar Sneakers",
      SKU: "zxcvbnm",
      category: "n/a",
      dateAdded: "31 Dec, 2021",
      status: "active",
    },
    {
      url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      id: 84,
      name: "Nike's Airforce",
      SKU: "zxcvbnm",
      category: "n/a",
      dateAdded: "18 Feb, 2022",
      status: "inactive",
    },
    {
      url: "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      id: 36,
      name: "Addidas Trainers",
      SKU: "zxcvbnm",
      category: "n/a",
      dateAdded: "24 Oct, 2021",
      status: "active",
    },
    {
      url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      id: 4,
      name: "Nike's Spectre",
      SKU: "zxcvbnm",
      category: "n/a",
      dateAdded: "4 Nov, 2021",
      status: "active",
    },
    {
      url: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      id: 90,
      name: "Red and White Air Jordans",
      SKU: "zxcvbnm",
      category: "n/a",
      dateAdded: "18 Nov, 2021",
      status: "inactive",
    },
  ],
  productFields: [
    {
      title: "ID",
      name: "id",
      span: 1,
      align: "center",
      important: true,
    },
    {
      title: "Product Name",
      name: "name",
      span: 5,
      align: "left",
      important: true,
    },
    {
      title: "Image",
      name: "url",
      span: 1,
      align: "center",
      important: true,
    },
    {
      title: "SKU",
      name: "SKU",
      span: 3,
      align: "left",
      important: false,
    },
    {
      title: "Category",
      name: "category",
      span: 2,
      align: "center",
      important: false,
    },
    {
      title: "Date Added",
      name: "dateAdded",
      span: 3,
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

export const productList = computed(() => {
  return state.value.productList;
});

export const productFields = computed(() => {
  return state.value.productFields;
});

export const updateProductName = (index) => {
  state.value.productList[index].name = "Blue Mocassins";
};
