import HomeIcon from "@/components/icons/HomeIcon.vue";
import UserIcon from "@/components/icons/UserIcon.vue";
import ProductsIcon from "@/components/icons/ProductsIcon.vue";
import OrdersIcon from "@/components/icons/OrdersIcon.vue";
import AnalyticsIcon from "@/components/icons/AnalyticsIcon.vue";
import StoresIcon from "@/components/icons/StoresIcon.vue";
import BillingIcon from "@/components/icons/BillingIcon.vue";
import SystemIcon from "@/components/icons/SystemIcon.vue";

export const navigationList = [
  {
    name: "Home",
    icon: HomeIcon,
    linkTo: "/",
  },
  {
    name: "Products",
    icon: ProductsIcon,
    linkTo: "/products",
    children: [
      {
        name: "Product List",
      },
      {
        name: "Categories",
      },
      {
        name: "Add Product",
      },
      {
        name: "Attributes",
      },
      {
        name: "Attributes Sets",
      },
    ],
  },
  {
    name: "Bookings",
    icon: UserIcon,
    linkTo: "/bookings",
    children: [
      {
        name: "Bookings List",
      },
      {
        name: "Add Bookings",
      },
    ],
  },
];
