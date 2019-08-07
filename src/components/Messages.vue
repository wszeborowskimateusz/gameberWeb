<template>
  <div class="messages__container col-12">
    <div class="messages__content">
      <div class="messages__scrollable_container">
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
    </div>
    <div class="messages__send_field">
      <form @submit.prevent="handleMessageSending">
        <div class="row">
          <div class="ml-lg-5 ml-2 mt-3 col-9">
            <input @focus="onFieldFocus"
              type="text" v-model="messageToSend" class="form-control" autofocus />
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
      wasMessageSend: true,
      messageToSend: '',
      userId: this.$route.params.id,
      conversation: {
        user: {
          userName: 'John',
          avatar:
            'https://samequizy.pl/wp-content/uploads/2017/07/filing_images_4fed8a491a6a.jpg',
        },
        messages: [
          {
            content: "Hey, how's goin",
            isOurMessage: false,
            date: '2019-07-27T18:15:33.671Z',
          },
          {
            content: 'I was worrying about you',
            isOurMessage: false,
            date: '2019-07-27T18:17:33.671Z',
          },
          {
            content: "I am all right bro, don't worry",
            isOurMessage: true,
            date: '2019-07-27T18:23:33.671Z',
          },
        ],
      },
    };
  },
  computed: {
    ...mapState('userProfile', { userFromStore: 'user' }),
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

    this.updateScrollPosition();
  },
  updated() {
    if (this.wasMessageSend) {
      this.updateScrollPosition();
    }
  },
  methods: {
    onFieldFocus() {
      this.wasMessageSend = true;
      this.updateScrollPosition();
    },
    scroll() {
      const scrollableContainer = document.querySelector('.messages__content');
      if (scrollableContainer.scrollTop === 0) {
        this.conversation.messages.unshift({
          content: "Hey, how's goin",
          isOurMessage: false,
          date: '2019-07-27T18:15:33.671Z',
        });
        this.conversation.messages.unshift({
          content: "Hey, how's goin",
          isOurMessage: false,
          date: '2019-07-27T18:15:33.671Z',
        });
        this.setScrollPositionToJustBelowTop();
        this.wasMessageSend = false;
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
        this.conversation.messages.push({
          content: this.messageToSend,
          date: new Date().toISOString(),
          isOurMessage: Math.random() >= 0.5,
        });
        this.messageToSend = '';
      }
    },
  },
};
</script>
