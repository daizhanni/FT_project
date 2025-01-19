<template>
  <section class="instagram">
    <h1>{{ $t('instagram.title') }}</h1>
    <p>{{ $t('instagram.handle') }}</p>
    <a href="https://www.instagram.com/fpvai.ukf" target="_blank" class="social-icon">{{ $t('instagram.link') }}</a>
  </section>
</template>

<script>
export default {
  name: 'Instagram'
};
</script>

<style scoped>
.instagram {
  text-align: center;
  padding: 20px;
  background: #f3f3f3;
}
h1 {
  color: #2a7f62;
  font-size: 2.5em;
  margin-bottom: 30px;
}
</style>
