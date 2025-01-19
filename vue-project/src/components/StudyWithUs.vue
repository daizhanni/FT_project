<template>
  <section class="study-with-us">
    <h1>{{ $t('study-with-us.title') }}</h1>
    <div class="cards">
      <div class="card" v-for="(reason, index) in firstSixReasons" :key="index">
        <h3>{{ $t('study-with-us.cards.' + index + '.title') }}</h3>
        <p>{{ $t('study-with-us.cards.' + index + '.description') }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    reasons() {
      return this.$t('study-with-us.cards', { returnObjects: true });
    },
    firstSixReasons() {
      return this.reasons.slice(0, 6);
    }
  }
};
</script>

<style scoped>
.study-with-us {
  padding: 10px;
  text-align: center;
  background: #f9f9f9;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
}
.card {
  width: 30%;
  background: linear-gradient(to right, #a8e6cf, #d4f1e5);;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  box-sizing: border-box;
}
.card h3 {
  color: #4caf50;
}
.card p {
  color: #333;
}
h1 {
  color: #2a7f62;
  font-size: 2.5em;
  margin-bottom: 30px;
}
</style>
