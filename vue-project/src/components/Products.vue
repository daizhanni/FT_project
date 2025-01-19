<template>
  <section class="products">
    <h1>{{ $t('products_title') }}</h1>

    <div class="product-slider-wrapper">
      <div class="product-slider">
        <div v-for="product in localizedProducts" :key="product.id" class="product-card">
          <div class="product-image-wrapper">
            <img :src="product.image" :alt="$t(product.name)" class="product-image" />
            <button @click="openSizeModal(product)" class="cart-icon">
              <span>{{ $t('cart_button') }}</span>
            </button>
          </div>

          <div class="product-details">
            <h3>{{ $t(product.name) }}</h3>
            <p>{{ $t(product.description) }}</p>
            <p class="price">{{ product.price }}{{ currentCurrency }}</p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showSizeModal" class="modal">
      <div class="modal-content">
        <span @click="closeSizeModal" class="close-button">&times;</span>
        <h3>{{ $t(selectedProduct.name) }}</h3>
        <p>{{ $t(selectedProduct.description) }}</p>
        <div class="sizes">
          <label v-for="size in selectedProduct.sizes" :key="size">
            <input type="radio" :value="size" v-model="selectedSize" /> {{ size }}
          </label>
        </div>
        <button @click="addToCart(selectedProduct, selectedSize)" :disabled="!selectedSize" class="add-to-cart-btn">
          {{ $t('cart_button') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { useCartStore } from '@/stores/cartStore.js';
import locales from '@/locales/locales.json';

export default {
  name: 'Products',
  data() {
    return {
      selectedSize: null,
      selectedProduct: null,
      showSizeModal: false,
    };
  },
  computed: {
    localizedProducts() {
      const locale = this.$i18n.locale;
      return locales[locale].products;
    },
    currentCurrency() {
      const locale = this.$i18n.locale;
      return locales[locale].currency;
    }
  },
  methods: {
    openSizeModal(product) {
      this.selectedProduct = product;
      this.selectedSize = null;
      this.showSizeModal = true;
    },
    closeSizeModal() {
      this.showSizeModal = false;
      this.selectedSize = null;
    },
    addToCart(product, size) {
      const cartStore = useCartStore();
      const item = {
        ...product,
        size,
      };

      const existingItem = cartStore.items.find((cartItem) => cartItem.id === item.id && cartItem.size === item.size);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        item.quantity = 1;
        cartStore.addItem(item);
      }

      this.closeSizeModal();
    }
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  color: #2a7f62;
  font-size: 2.5em;
  margin-bottom: 30px;
}

.product-slider-wrapper {
  overflow-x: auto;
  display: flex;
  justify-content: flex-start;
  padding-bottom: 15px;
}

.product-slider {
  display: flex;
  gap: 20px;
  padding-left: 15px;
  padding-right: 15px;
}

.product-card {
  width: 250px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  position: relative;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.product-image-wrapper {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  transition: transform 0.3s ease;
}

.product-image-wrapper:hover .product-image {
  transform: scale(1.1);
}

.cart-icon {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cart-icon:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.product-details {
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
}

.product-details h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
  color: #333;
}

.product-details p {
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-bottom: 15px;
}

.price {
  font-size: 16px;
  font-weight: bold;
  color: #2ecc71;
  margin-top: auto;
  text-align: center;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
}

.sizes {
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
}

.sizes label {
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 16px;
}

.add-to-cart-btn {
  width: 100%;
  padding: 12px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}

.add-to-cart-btn:disabled {
  background-color: #ddd;
}
</style>
