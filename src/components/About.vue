<template>
  <div class="about col-12">
    <h1 class="mb-5">Gameber - Game + Remember</h1>
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
