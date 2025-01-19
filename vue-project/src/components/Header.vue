<template>
  <header class="header">
    <div class="image">
      <img src="/foto/logo.jpg" alt="Logo" />
    </div>
    <div class="text">
      <h1>{{ $t('header.title') }}</h1>
      <p>{{ $t('header.description') }}</p>
    </div>
    <div class="lang-switch">
      <button @click="changeLanguage('sk')">SK</button>
      <button @click="changeLanguage('en')">EN</button>
      <button @click="changeLanguage('kz')">KZ</button>
    </div>
  </header>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    const { locale } = useI18n();

    const changeLanguage = (lang) => {
      locale.value = lang;
    };

    return {
      changeLanguage,
    };
  },
};
</script>

<style scoped>
.header {
  background: linear-gradient(135deg, #A1D99B, #4B9B78);
  color: white;
  padding: 50px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: relative;
}

.image {
  width: 150px;
  height: 150px;
  background-color: white;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.image:hover img {
  transform: scale(1.1);
}

.text {
  flex: 1;
  padding-left: 30px;
}

.text h1 {
  font-size: 36px;
  font-weight: 600;
  margin: 0;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

.text p {
  font-size: 18px;
  margin-top: 10px;
  line-height: 1.6;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}


button {
  background-color: #61A560;
  color: white;
  border: none;
  padding: 12px 25px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

button:hover {
  background-color: #4A7F46;
  transform: translateY(-2px);
}

.lang-switch {
  display: flex;
  gap: 10px;
}

.lang-switch button {
  background-color: #3E5E3D;
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.lang-switch button:hover {
  background-color: #2A4732;
}
</style>
