<template>
  <div class="about col-12">
    <h1 class="mb-5 mt-2">Gameber = Game + Remember</h1>
    <h3 class="mb-3">Autorzy:</h3>
    <ul class="list-group" id="features-list">
      <li class="list-group-item">
        <a href="https://github.com/wszeborowskimateusz" target="_blank">Mateusz Wszeborowski</a>
      </li>
      <li class="list-group-item">
        <a href="https://github.com/kkarbowski" target="_blank">Korneliusz Karbowski</a>
      </li>
      <li class="list-group-item">
        <a href="https://github.com/maciejgrzywacz" target="_blank">Maciej Grzywacz</a>
      </li>
    </ul>
    <h5 class="m-3">
      Jeżeli chcesz nam coś przekazać, wyślij nam email na
      <a href="mailto://gameberproject.bugreport@gmail.com">
        gameberproject.bugreport@gmail.com
      </a>
      lub skorzystaj z formularza poniżej
    </h5>
    <h2 class="p-3">Skontaktuj się z nami</h2>
    <ContactForm class="mt-3 mb-2"/>
  </div>
</template>

<style scoped>
.about {
  text-align: center;
}
</style>

<script>
import ContactForm from '@/components/ContactForm.vue';

export default {
  components: {
    ContactForm,
  },
};
</script>
