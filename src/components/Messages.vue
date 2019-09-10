<template>
  <div class="messages__container col-12">
      <div class="m-2">
        <span class="h2">
            Konwersacja z
            <router-link  v-if="conversation.user.userName"
            :to="'/users/' + userId">
              {{conversation.user.userName}}
              <img :src="conversation.user.avatar" class="rounded-circle" width="50"/>
            </router-link>
        </span>
      </div>
    <div class="messages__content">
      <div class="messages__scrollable_container">
        <div v-if="isLoading || isConversationLoading" class="d-flex p-2 justify-content-center">
          <cube-spin class="m-2"></cube-spin>
        </div>
        <div
          v-else-if="conversation != null
          && conversation.messages != null
          && conversation.user != null"
        >
          <div
            class="messages_message m-5"
            v-for="(message, index) in conversation.messages"
            v-bind:key="message.content + ' ' + index"
          >
            <div :class="[message.isOurMessage ? 'flex-row-reverse' : 'flex-row']" class="d-flex">
              <div>
                <img
                  class="rounded-circle m-3"
                  :src="[message.isOurMessage ? pickedAvatar: conversation.user.avatar]"
                  width="75"
                />
              </div>
              <div
                :class="[message.isOurMessage ? 'our_message' : 'other_message']"
                class="d-flex flex-column message__text p-3"
              >
                <p class="h5 align-middle">{{message.content}}</p>
                <p
                  :class="[message.isOurMessage ? ['text-light', 'text-left']
                                              : ['text-muted', 'text-right']]"
                  class="date-text"
                >{{convertIsoDateToString(message.date)}}</p>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <p class="h3 p-5">Wystąpił problem przy wczytywaniu wiadomości</p>
        </div>
      </div>
    </div>
    <div class="messages__send_field">
      <form @submit.prevent="handleMessageSending">
        <div class="row">
          <div class="ml-lg-5 mt-3 col-6 col-lg-9">
            <input
              @focus="onFieldFocus"
              type="text"
              v-model="messageToSend"
              class="form-control"
              autofocus
            />
          </div>
          <div class="col-4 col-lg-2 mt-3">
            <button type="submit" class="btn btn-primary mb-md-2">
              Wyślij
              <img width="25" :src="imagesGetter.getImgUrl('messages/send.png')" />
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.message__text {
  justify-content: space-between;
}

.date-text {
  font-size: 0.8em;
}

.our_message {
  border-radius: 25px;
  max-width: 80%;
  color: white;
  background-color: #0076ff;
  word-wrap: break-word;
}

.other_message {
  border-radius: 25px;
  max-width: 80%;
  color: black;
  background-color: #d1d3d7;
  word-wrap: break-word;
}

.messages__scrollable_container {
  height: 100%;
}
.messages__container {
  height: 80%;
}

.messages__content {
  background-color: rgba(255, 255, 255, 0.9);
  height: 70vh;
  overflow: auto;
}

.messages__send_field {
  height: 10vh;
  background-color: #7084ff;
}
</style>

<script>
import { mapState } from 'vuex';
import CubeSpin from 'vue-loading-spinner/src/components/Circle8.vue';

import messagesService from '@/services/messagesService';
import otherUsersProfileService from '@/services/otherUsersProfileService';
import imagesGetter from '@/utilities/imagesGetter';

export default {
  data() {
    return {
      imagesGetter,
      areAllMessagesLoaded: false,
      isConversationLoading: false,
      messagesPerRequest: 10,
      lastImageOffset: 0,
      isLoading: false,
      wasMessageSend: true,
      messageToSend: '',
      userId: this.$route.params.id,
      conversation: {
        user: {},
        messages: [],
      },
    };
  },
  computed: {
    ...mapState('userProfile', { userFromStore: 'user' }),
    ...mapState('users', ['user']),
    pickedAvatar() {
      let result = null;
      if (
        this.userFromStore.avatars !== null
        && this.userFromStore.avatars !== undefined
      ) {
        this.userFromStore.avatars.forEach((avatar) => {
          if (avatar.id === this.userFromStore.avatarId) {
            result = avatar;
            return false;
          }
          return true;
        });
      }

      return result === null ? '' : result.img;
    },
  },
  mounted() {
    const scrollableContainer = document.querySelector('.messages__content');
    if (scrollableContainer !== null && scrollableContainer !== undefined) {
      scrollableContainer.onscroll = this.scroll;
    }

    this.isConversationLoading = true;
    this.updateScrollPosition();
    this.getConversationUser();
    this.getMessages(this.messagesPerRequest, 0);
    this.lastImageOffset += this.messagesPerRequest;
  },
  updated() {
    if (this.wasMessageSend) {
      this.updateScrollPosition();
    }
  },
  methods: {
    getMessages(limit, offset) {
      messagesService
        .getMessages(this.user, this.userId, limit, offset)
        .then((messages) => {
          if (messages != null) {
            if (messages.length === 0) {
              this.areAllMessagesLoaded = true;
            }
            messages.forEach((msg) => {
              this.conversation.messages.unshift(msg);
            });
          } else {
            this.conversation.messages = null;
          }

          this.setScrollPositionToJustBelowTop();
          this.isLoading = false;
          this.isConversationLoading = false;
        })
        .then(() => this.$forceUpdate());
    },
    getConversationUser() {
      otherUsersProfileService
        .getUser(this.user, this.userId)
        .then((conversationUser) => {
          if (conversationUser == null) {
            this.conversation.user = null;
          } else {
            this.conversation.user.userName = conversationUser.username;
            this.conversation.user.avatar = this.getUserAvatar(conversationUser);
          }
        })
        .then(() => this.$forceUpdate());
    },
    getUserAvatar(user) {
      let result = null;
      user.avatars.forEach((avatar) => {
        if (avatar.id === user.avatarId) {
          result = avatar;
          return false;
        }
        return true;
      });
      return result.img;
    },
    onFieldFocus() {
      this.wasMessageSend = true;
      this.updateScrollPosition();
    },
    scroll() {
      const scrollableContainer = document.querySelector('.messages__content');

      if (
        scrollableContainer.scrollTop === 0
        && this.areAllMessagesLoaded === false
      ) {
        this.isLoading = true;
        this.wasMessageSend = false;

        this.getMessages(this.messagesPerRequest, this.lastImageOffset);
        this.lastImageOffset += this.messagesPerRequest;
      }
    },
    setScrollPositionToJustBelowTop() {
      const scrollableContainer = document.querySelector('.messages__content');
      if (scrollableContainer !== null) {
        scrollableContainer.scrollTop = 10;
      }
    },
    updateScrollPosition() {
      const scrollableContainer = document.querySelector('.messages__content');
      if (scrollableContainer !== null) {
        scrollableContainer.scrollTop = scrollableContainer.scrollHeight;
      }
    },
    convertIsoDateToString(IsoString) {
      const date = new Date(IsoString);
      return this.getTodaysDate(date);
    },
    getTodaysDate(date) {
      const dd = String(date.getDate()).padStart(2, '0');
      const mm = String(date.getMonth() + 1).padStart(2, '0');
      const yyyy = date.getFullYear();
      const hh = String(date.getHours()).padStart(2, '0');
      const mimi = String(date.getMinutes()).padStart(2, '0');

      return `${hh}:${mimi} (${dd}.${mm}.${yyyy})`;
    },
    handleMessageSending() {
      if (this.messageToSend !== '') {
        this.wasMessageSend = true;
        const message = {
          content: this.messageToSend,
          date: new Date().toISOString(),
          isOurMessage: true,
        };
        messagesService.sendMessage(this.user, this.userId, this.messageToSend)
          .then(() => {
            this.conversation.messages.push(message);
          }).then(() => {
            this.$forceUpdate();
          });
        this.messageToSend = '';
      }
    },
  },
  components: {
    CubeSpin,
  },
};
</script>
