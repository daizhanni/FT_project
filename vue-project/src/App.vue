<template>
  <div id="app">
    <nav>
      <ul>
        <li v-for="link in links" :key="link.id" :class="{ active: activeSection === link.id }">
          <router-link :to="'#' + link.id" @click.native.prevent="scrollToSection(link.id)">
            {{ $t(`links.${link.id}.name`) }}
          </router-link>
        </li>
        <li class="lang-switch">
          <button @click="changeLanguage('sk')">SK</button>
          <button @click="changeLanguage('en')">EN</button>
          <button @click="changeLanguage('kz')">KZ</button>
        </li>
      </ul>
    </nav>

    <Header />
    <main>
      <section v-for="link in links" :key="link.id" :id="link.id" class="section">
        <component :is="link.component" />
      </section>
    </main>

    <Footer />
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import FieldsOverview from '@/components/FieldsOverview.vue';
import WhyStudy from '@/components/WhyStudy.vue';
import Future from '@/components/Future.vue';
import StudyWithUs from '@/components/StudyWithUs.vue';
import Instagram from '@/components/Instagram.vue';
import Products from '@/components/Products.vue';
import Cart from '@/components/Cart.vue';

export default {
  components: {
    Header,
    Footer,
    FieldsOverview,
    WhyStudy,
    Future,
    StudyWithUs,
    Instagram,
    Products,
    Cart,
  },
  setup() {
    const { locale } = useI18n();

    const changeLanguage = (lang) => {
      locale.value = lang;
    };

    return {
      changeLanguage,
    };
  },
  data() {
    return {
      activeSection: '',
      links: [
        { id: 'fields-overview', component: 'FieldsOverview' },
        { id: 'why-study', component: 'WhyStudy' },
        { id: 'future', component: 'Future' },
        { id: 'study-with-us', component: 'StudyWithUs' },
        { id: 'products', component: 'Products' },
        { id: 'cart', component: 'Cart' },
        { id: 'instagram', component: 'Instagram' },
      ],
    };
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    scrollToSection(id) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        this.updateUrlHash(id);
      }
    },
    onScroll() {
      const sections = this.links.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          if (this.activeSection !== section.id) {
            this.activeSection = section.id;
            this.updateUrlHash(section.id);
          }
          break;
        }
      }
    },
    updateUrlHash(id) {
      if (history.pushState) {
        const url = new URL(window.location);
        url.hash = id;
        history.pushState(null, '', url);
      } else {
        window.location.hash = id;
      }
    },
  },
};
</script>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f9f4;
}

header {
  background: linear-gradient(135deg, #7dbf7e, #4a7f46);
  color: white;
  padding: 20px 0;
  text-align: center;
  position: relative;
  z-index: 2;
}

nav {
  position: sticky;
  top: 0;
  background-color: #e1f3e1;
  z-index: 1;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
}

nav ul {
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

nav ul li {
  margin: 0 15px;
}

nav ul li a {
  color: #3e5e3d;
  text-decoration: none;
  font-weight: bold;
  padding: 10px 15px;
  display: inline-block;
  transition: background-color 0.3s ease, color 0.3s ease;
}

nav ul li a:hover {
  background-color: #4a7f46;
  color: white;
}

nav ul li.active a {
  background-color: #3e5e3d;
  color: white;
}

section {
  padding: 50px 20px;
  margin: 20px 0;
  background-color: #e9f7e7;
  border-radius: 10px;
  transition: background-color 0.3s ease;
}

section:nth-child(even) {
  background-color: #d1e8d4;
}

footer {
  background-color: #3e5e3d;
  color: white;
  padding: 20px;
  text-align: center;
}

button {
  background-color: #61a560;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 10px;
  display: inline-block;
  margin: 10px;
  text-align: center;
}

button:hover {
  background-color: #4a7f46;
}

button + button {
  margin-left: 15px;
}
</style>
