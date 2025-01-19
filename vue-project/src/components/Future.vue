<template>
  <section class="future">
    <h1>{{ $t('future.title') }}</h1>
    <p>{{ $t('future.description') }}</p>
    <div class="video-wrapper">
      <video controls>
        <source src="/video/ukfvideo.mp4" type="video/mp4">
      </video>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Future'
};
</script>

<style scoped>
.future {
  padding: 20px;
  text-align: center;
}

h1 {
  color: #2a7f62;
  font-size: 2.5em;
  margin-bottom: 30px;
}

p {
  font-size: 1.1em;
  color: #333;
  margin-bottom: 20px;
}

.video-wrapper {
  position: relative;
  display: inline-block;
  max-width: 100%;
  border: 10px solid #a8e6cf;
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.video-wrapper:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
}

video {
  width: 100%;
  height: auto;
  display: block;
}

</style>
