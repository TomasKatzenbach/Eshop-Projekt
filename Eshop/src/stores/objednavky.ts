import { defineStore } from 'pinia';

interface Order {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  items: Array<{ id: number; name: string; price: number; quantity: number }>;
  totalPrice: number;
}

interface State {
  orders: Order[];
}

export const useOrderStore = defineStore('orders', {
  state: (): State => ({
    orders: [],
  }),
  actions: {
    addOrder(order: Order) {
      this.orders.push(order);
    },
  },
});