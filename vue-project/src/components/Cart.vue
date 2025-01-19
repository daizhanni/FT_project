<template>
  <section class="cart">
    <h1>{{ $t('cart_title') }}</h1>
    <div v-if="cartItems.length === 0">
      <p>{{ $t('cart_empty') }}</p>
    </div>
    <div v-else>
      <ul>
        <li v-for="item in cartItems" :key="item.id + item.size" class="cart-item">
          <div class="cart-item-details">
            <span class="item-name">{{ $t(item.name) }} ({{ $t('size') }}: {{ item.size }})</span>
            <span class="item-quantity">x {{ item.quantity }}</span>
          </div>
          <div class="cart-item-price">
            <span class="item-price">{{ item.price * item.quantity }}{{ currentCurrency }}</span>
            <button @click="removeFromCart(item.id, item.size)" class="remove-button">{{ $t('remove_button') }}</button>
          </div>
        </li>
      </ul>
      <div class="cart-total">
        <p class="total-price">{{ $t('total') }}: {{ totalPrice }}{{ currentCurrency }}</p>
        <p class="item-count">{{ $t('items_count') }}: {{ itemCount }}</p>
        <button @click="clearCart" class="clear-cart-btn">{{ $t('clear_cart') }}</button>
      </div>
    </div>
  </section>
</template>

<script>
import { useCartStore } from '@/stores/cartStore.js';

export default {
  name: 'Cart',
  computed: {
    cartItems() {
      const cartStore = useCartStore();
      return cartStore.items;
    },
    totalPrice() {
      const cartStore = useCartStore();
      return cartStore.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    itemCount() {
      const cartStore = useCartStore();
      return cartStore.items.reduce((count, item) => count + item.quantity, 0);
    },
    currentCurrency() {
      const locale = this.$i18n.locale;
      return this.$t('currency');
    }
  },
  methods: {
    removeFromCart(itemId, itemSize) {
      const cartStore = useCartStore();
      cartStore.removeItem(itemId, itemSize);
    },
    clearCart() {
      const cartStore = useCartStore();
      cartStore.clearCart();
    },
  },
};
</script>

<style scoped>
.cart {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #2a7f62;
  font-size: 2.5em;
  margin-bottom: 30px;
  text-align: center;
}
p {
  text-align: center;
}
.cart-item {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #eee;
  align-items: center;
}

.cart-item:last-child {
  border-bottom: none;
}

.cart-item-details {
  flex: 1;
  display: flex;
  justify-content: space-between;
}

.item-name {
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.item-quantity {
  font-size: 16px;
  color: #777;
  margin-left: 10px;
}

.cart-item-price {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.item-price {
  font-size: 18px;
  font-weight: bold;
  color: #2ecc71;
  margin-right: 15px;
}

.remove-button {
  background-color: #e74c3c;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.remove-button:hover {
  background-color: #c0392b;
}

.cart-total {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  font-size: 18px;
  border-top: 2px solid #f0f0f0;
}

.cart-total .total-price {
  font-weight: bold;
  color: #2ecc71;
}

.cart-total .item-count {
  color: #777;
}

.clear-cart-btn {
  padding: 12px 20px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.clear-cart-btn:hover {
  background-color: #2980b9;
}
</style>
