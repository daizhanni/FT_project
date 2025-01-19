<template>
  <section class="why-study">
    <h1>{{ $t('why-study.title') }}</h1>
    <div class="cards">
      <div class="card" v-for="(reason, index) in reasons.slice(0, 3)" :key="index">
        <div class="icon-container">
          <font-awesome-icon :icon="getIcon(index)" class="card-icon" />
        </div>
        <h3>{{ $t('why-study.cards.' + index + '.title') }}</h3>
        <p v-html="formatDescription($t('why-study.cards.' + index + '.description'))"></p>
      </div>
    </div>
  </section>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLightbulb, faBook, faGraduationCap, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faLightbulb, faBook, faGraduationCap, faQuestionCircle);

export default {
  components: {
    FontAwesomeIcon,
  },
  computed: {
    reasons() {
      return this.$t('why-study.cards', { returnObjects: true });
    }
  },
  methods: {
    formatDescription(description) {
      return description.split('\n').map(line => `<p>${line}</p>`).join('');
    },
    getIcon(index) {
      const iconClasses = [
        ['fas', 'lightbulb'],
        ['fas', 'book'],
        ['fas', 'graduation-cap'],
      ];
      return iconClasses[index] || ['fas', 'question-circle'];
    }
  }
};
</script>

<style scoped>

.why-study {
  padding: 20px;
  text-align: center;
  background: #e6f7e6;
}

.cards {
  display: flex;
  justify-content: space-around;
}

.card {
  width: 30%;
  background: linear-gradient(to right, #a8e6cf, #d4f1e5);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card h3 {
  color: #4caf50;
}

.card p {
  color: #333;
}

.icon-container {
  font-size: 2em;
  color: #4caf50;
  margin-bottom: 15px;
}

.card-icon {
  transition: color 0.3s ease;
}

.card-icon:hover {
  color: #388e3c;
}
h1 {
  color: #2a7f62;
  font-size: 2.5em;
  margin-bottom: 30px;

}
</style>
