<template>
  <div
    class="modal fade"
    id="avatarModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="avatarModalTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="avatarModalTitle">Wybierz swój nowy avatar</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <span v-if="!user || user.avatars.length === 0">Niestety nie masz żadnych avatarów</span>
          <div class="row">
            <div class="col-12" v-for="(avatar, index) in user.avatars" v-bind:key="avatar.id">
              <input
                type="radio"
                v-model="avatarIdToChange"
                name="rGroup"
                :value="avatar.id"
                :id="avatar.name + index"
              />
              <label class="radioLabel" :for="avatar.name + index">
                <img class="modal__image avatar_modal__img" :src="avatar.img" />
                <br />
                <span class="font-weight-bold">{{avatar.name}}</span>
              </label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <router-link to="/store" data-dismiss="modal">Zakup więcej avatarów</router-link>
          <button
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
            v-on:click="reverseAvatarChange()"
          >Anuluj</button>
          <button
            v-if="user && user.backgroundImages.length > 0"
            type="button"
            class="btn btn-primary"
            data-dismiss="modal"
            v-on:click="exchangeAvatar()"
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

.avatar_modal__img {
  border-radius: 50%;
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
      avatarIdToChange: 0,
    };
  },
  methods: {
    ...mapActions('userProfile', ['changeAvatar']),
    exchangeAvatar() {
      this.changeAvatar(this.avatarIdToChange);
    },
    reverseAvatarChange() {
      this.avatarIdToChange = this.user.avatarId;
      this.$forceUpdate();
    },
  },
  props: {
    user: Object,
  },
};
</script>
