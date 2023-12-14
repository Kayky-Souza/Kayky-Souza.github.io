import { defineStore } from "pinia";

export const useCartStore = defineStore({
  id: "products",
  state: () => ({
    products: {},
    quantidade: 0
  }),
  getters: {
  },
  actions: {
  }

})