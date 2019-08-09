import config from '../../config';
import requestSender from '../utilities/requestSender';
import toast from '../utilities/toasts';

const defaultConversation = {
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
};

export default {
  async getConversationUser(token, userId) {
    const url = `${config.apiUrl}/conversation/${userId}`;
    const result = await requestSender.sendGetRequest(token, url).then(
      results => results.conversation.user,
      () => {
        toast.errorToast('Nie udało się pobrać danych użytkownika, z którym korespondujesz');
        // FIXME remove this later
        return defaultConversation.user;
      },
    );

    return result;
  },
  async getMessages(token, userId, limit, offset) {
    const url = `${config.apiUrl}/messages/${userId}?limit=${limit}&offset=${offset}`;
    const result = await requestSender.sendGetRequest(token, url).then(
      results => results.conversation,
      () => {
        toast.errorToast('Nie udało się pobrać konwersacji');
        // FIXME remove this later
        if (offset > 10) {
          return [];
        } if (offset > 0) {
          return [
            {
              content: 'I am not bob',
              isOurMessage: true,
              date: '2019-07-27T18:15:33.671Z',
            },
            {
              content: 'And i am not 8',
              isOurMessage: true,
              date: '2019-07-27T18:17:33.671Z',
            },
            {
              content: 'I am 10',
              isOurMessage: true,
              date: '2019-07-27T18:23:33.671Z',
            },
          ];
        }
        return defaultConversation.messages;
      },
    );

    return result;
  },
  async sendMessage(token, userId, message) {
    const url = `${config.apiUrl}/messages/send/${userId}`;
    await requestSender.sendPostRequest(url, { message }, token).then(
      () => {},
      () => {
        toast.errorToast('Nie udało się wysłać wiadomości');
      },
    );
  },
};
