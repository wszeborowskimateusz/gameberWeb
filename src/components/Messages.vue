<template>
  <div class="messages__container col-12">
    <div class="messages__content">
      <div class="messages__scrollable_container">
        <div
          class="messages_message m-5"
          v-for="(message, index) in messages"
          v-bind:key="message.content + ' ' + index"
        >
          <div :class="[message.isOurMessage ? 'flex-row-reverse' : 'flex-row']" class="d-flex">
            <div>
              <img
                class="rounded-circle m-3"
                :src="[message.isOurMessage ? pickedAvatar: user.userAvatar]"
                width="75"
              />
            </div>
            <div :class="[message.isOurMessage ? 'our_message' : 'other_message']" class="p-3">
              <p class="h5 p-2">{{message.content}}</p>
              <p
                :class="[message.isOurMessage ? ['text-light', 'text-left']
                                              : ['text-muted', 'text-right']]"
                class="date-text"
              >{{message.date}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="messages__send_field">
      <form @submit.prevent="handleMessageSending">
        <div class="row">
          <div class="ml-lg-5 ml-2 mt-3 col-9">
            <input type="text" v-model="messageToSend" class="form-control" />
          </div>
          <div class="col-2 mt-3">
            <button type="submit" class="btn btn-primary mb-2">
              Wyślij
              <img width="25" src="https://img.icons8.com/color/50/000000/filled-sent.png" />
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
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
  height: 86%;
  overflow: auto;
}

.messages__send_field {
  height: 14%;
  background-color: #7084ff;
}
</style>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      messageToSend: '',
      userId: this.$route.params.id,
      user: {
        userName: 'John',
        userAvatar:
          'https://samequizy.pl/wp-content/uploads/2017/07/filing_images_4fed8a491a6a.jpg',
      },
      messages: [
        { content: "Hey, how's goin", date: '20.05.2019', isOurMessage: false },
      ],
    };
  },
  computed: {
    ...mapState('userProfile', { userFromStore: 'user' }),
    pickedAvatar() {
      let result = null;
      this.userFromStore.avatars.forEach((avatar) => {
        if (avatar.id === this.userFromStore.avatarId) {
          result = avatar;
          return false;
        }
        return true;
      });
      return result === null ? '' : result.img;
    },
  },
  updated() {
    const scrollableContainer = document.querySelector('.messages__content');
    scrollableContainer.scrollTop = scrollableContainer.scrollHeight;
  },
  methods: {
    getTodaysDate() {
      const today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const yyyy = today.getFullYear();

      return `${dd}.${mm}.${yyyy}`;
    },
    handleMessageSending() {
      if (this.messageToSend !== '') {
        this.messages.push({
          content: this.messageToSend,
          date: this.getTodaysDate(),
          isOurMessage: Math.random() >= 0.5,
        });
        this.messageToSend = '';
      }
    },
  },
};
</script>
