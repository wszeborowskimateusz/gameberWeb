<template>
  <div
    class="modal fade"
    id="backgroundImagesModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="backgroundImagesModalTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="backgroundImagesModalTitle">Wybierz nowe zdjęcie w tle</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <span
            v-if="!user || user.backgroundImages.length === 0"
          >Niestety nie masz żadnych zdjęć profilowych</span>
          <div class="row">
            <div
              class="col-12"
              v-for="(image, index) in user.backgroundImages"
              v-bind:key="image.id"
            >
              <input
                type="radio"
                v-model="backgroundImageIdToChange"
                name="rGroup"
                :value="image.id"
                :id="index"
              />
              <label class="radioLabel" :for="index">
                <img class="modal__image" :src="image.img" />
                <br />
                <span class="font-weight-bold">{{image.name}}</span>
              </label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <router-link to="/store" data-dismiss="modal">Zakup więcej obrazków</router-link>
          <button
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
            v-on:click="reverseImageChange()"
          >Anuluj</button>
          <button
            v-if="user && user.backgroundImages.length > 0"
            type="button"
            class="btn btn-primary"
            data-dismiss="modal"
            v-on:click="exchangeBackgroundImage()"
          >Zapisz zmiany</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal__image {
  width: 100%;
}

input[type="radio"] {
  display: none;
}

input[type="radio"]:checked + .radioLabel {
  box-shadow: 3px 3px 15px #666;
  border-color: #427696;
  background: #427696;
  color: #fff;
  cursor: pointer;
  zoom: 1;
  filter: alpha(opacity=100);
  opacity: 1;
}
</style>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      backgroundImageIdToChange: 0,
    };
  },
  methods: {
    ...mapActions('userProfile', ['changeBackgroundImage']),
    exchangeBackgroundImage() {
      this.changeBackgroundImage(this.backgroundImageIdToChange);
    },
    reverseImageChange() {
      this.backgroundImageIdToChange = this.user.backgroundImageId;
      this.$forceUpdate();
    },
  },
  props: {
    user: Object,
  },
};
</script>
