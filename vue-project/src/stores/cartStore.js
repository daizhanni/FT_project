import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [],
    }),
    getters: {
        totalPrice(state) {
            return state.items.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        itemCount(state) {
            return state.items.reduce((count, item) => count + item.quantity, 0);
        },
    },
    actions: {
        addItem(item) {
            const existingItem = this.items.find(cartItem => cartItem.id === item.id && cartItem.size === item.size);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                this.items.push(item);
            }
        },
        removeItem(itemId, itemSize) {
            this.items = this.items.filter(item => item.id !== itemId || item.size !== itemSize);
        },
        clearCart() {
            this.items = [];
        },
    },
});
