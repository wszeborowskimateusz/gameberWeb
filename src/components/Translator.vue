<template>
  <div class="translator__container col-12">
    <h2>Witaj w tłumaczu</h2>
    <a href="http://translate.yandex.com/">Powered by Yandex.Translate</a>
    <div class="row translator__main m-4">
      <div class="translator__main__from col-5 form-group">
        <label for="translate__input__from" class>{{translateFrom.name}}</label>
        <textarea
          maxlength="70"
          id="translate__input__from"
          type="text"
          class="form-control form-control-lg"
          v-model="translateFrom.value"
        ></textarea>
        <small class="form-text text-muted">Możesz wpisać maksymalnie 70 znaków</small>
      </div>
      <button v-on:click="swapTranslations()" onclick="this.blur();" class="col-2 btn btn-default">
        <img src="https://img.icons8.com/dusk/64/000000/replace.png" />
      </button>
      <div class="translator__main__to col-5">
        <label for="translate__input__to" class>{{translateTo.name}}</label>
        <textarea
          readonly
          id="translate__input__to"
          type="text"
          class="form-control form-control-lg"
          v-model="translateTo.value"
        ></textarea>
        <div v-if="error.is" class="invalid-feedback d-block">{{error.text}}</div>
      </div>
    </div>
    <button class="btn btn-primary m-4" v-on:click="translate()">
      Tłumacz
      <img src="https://img.icons8.com/dusk/64/000000/google-translate.png" />
    </button>
    <div v-if="loading" class="d-flex p-2 justify-content-center">
      <cube-spin class="m-2"></cube-spin>
    </div>
  </div>
</template>

<style scoped>
.translator__main {
  font-size: 1.2em;
}

textarea {
  resize: none;
  height: 120px;
}
</style>

<script>
import CubeSpin from 'vue-loading-spinner/src/components/Circle8.vue';
import translator from '../services/translator/translator_api';

export default {
  data() {
    return {
      translateFrom: { name: 'Angielski', code: 'en', value: '' },
      translateTo: { name: 'Polski', code: 'pl', value: '' },
      error: { is: false, text: '' },
      loading: false,
    };
  },
  methods: {
    swapTranslations() {
      [this.translateFrom, this.translateTo] = [
        this.translateTo,
        this.translateFrom,
      ];
    },
    async translate() {
      if (this.translateFrom.value.length === 0) return;

      this.loading = true;
      if (this.translateFrom.code === 'en') {
        this.translateTo.value = await translator.getEnglishToPolishTranslation(
          this.translateFrom.value,
        );
      } else {
        this.translateTo.value = await translator.getPolishToEnglishTranslation(
          this.translateFrom.value,
        );
      }

      if (this.translateTo.value.length === 0) {
        this.error.is = true;
        this.error.text = 'Nie odnaleziono tłumaczenia';
      } else {
        this.error.is = false;
      }
      this.loading = false;
    },
  },
  components: {
    CubeSpin,
  },
};
</script>
