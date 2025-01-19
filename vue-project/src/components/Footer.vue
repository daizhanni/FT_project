<template>
  <footer class="footer">
    <div class="footer-content">
      <p class="footer-text">{{ $t('footer.text') }}</p>
      <div class="contact-info">
        <p>{{ $t('footer.contact') }}</p>
        <p>{{ $t('footer.phone') }}: <a href="tel:+421376408560">+421376408560</a></p>
        <p>{{ $t('footer.email') }}: <a href="mailto:sofpv@ukf.sk">sofpv@ukf.sk</a></p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.footer {
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

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-text {
  font-size: 18px;
  margin-bottom: 20px;
}


.contact-info {
  margin-top: 30px;
}

.contact-info p {
  font-size: 18px;
  color: black;
  margin: 10px 0;
  animation: fadeIn 2s ease-in-out;
}

.contact-info p:hover {
  color: rebeccapurple;
  transform: translateY(-5px);
}

.contact-info a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s, text-decoration 0.3s;
}

.contact-info a:hover {
  color: #4caf50;
  text-decoration: underline;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
