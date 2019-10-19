<template>
  <div class="form__container">
    <div class="loader p-2 d-flex justify-content-center">
      <cube-spin v-if="isLoading"></cube-spin>
    </div>
    <form id="contactForm" ref="contactForm" @submit.prevent="handleForm">
      <div class="form-group col-6 offset-3">
        <fieldset class="form-group">
          <label for="name">Imię:</label>
          <input id="name" name="name" class="form-control" placeholder="Podaj nam kim jesteś" />
        </fieldset>

        <fieldset class="form-group">
          <label for="message">Wiadomość:</label>
          <textarea
            class="form-control"
            id="message"
            name="message"
            rows="10"
            placeholder="Powiedz nam co cię trapi..."
          ></textarea>
        </fieldset>

        <fieldset class="form-group">
          <label for="email">Twój adres email:</label>
          <input
            class="form-control"
            id="email"
            name="email"
            type="email"
            value
            required
            placeholder="twoje.imie@email.pl"
          />
        </fieldset>

        <fieldset class="form-group honeypot-field">
          <input hidden id="honeypot" type="text" name="honeypot" value />
        </fieldset>

        <button class="btn btn-primary">
          <i class="fa fa-paper-plane"></i>&nbsp;Wyślij
        </button>
        <div class="m-2" v-if="isThankYouMessageDisplayed">
          <h4>Dziękujemy za twoją wiadomość. Przeczytamy ją tak szybko jak tylko się da.</h4>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
.form__container {
    position: relative;
}
.loader {
    position: absolute;
    left: 5px;
    top: 5px;
}
</style>

<script>
import CubeSpin from 'vue-loading-spinner/src/components/Circle8.vue';
import formHandler from '@/utilities/form-submission-handler';
import contactFormService from '@/services/contactFormService';

export default {
  data() {
    return {
      isLoading: false,
      isThankYouMessageDisplayed: false,
    };
  },
  methods: {
    async handleForm() {
      this.isThankYouMessageDisplayed = false;
      this.isLoading = true;
      const formData = formHandler.getFormData(this.$refs.contactForm);
      if (!formData.honeypot) {
        await contactFormService.sendMail(formData.data);
      }
      this.isLoading = false;
      this.isThankYouMessageDisplayed = true;
    },
  },
  components: {
    CubeSpin,
  },
};
</script>
