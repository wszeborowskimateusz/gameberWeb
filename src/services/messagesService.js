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
  async getConversation(token, userId) {
    const url = `${config.apiUrl}/messages/${userId}`;
    const result = await requestSender.sendGetRequest(token, url).then(
      results => results.conversation,
      () => {
        toast.errorToast('Nie udało się pobrać konwersacji');
        // FIXME remove this later
        return defaultConversation;
      },
    );

    return result;
  },
  async sendMessage(token, userId, message) {
    const url = `${config.apiUrl}/messages/send/${userId}`;
    const result = await requestSender.sendPostRequest(url, message, token).then(
      results => results.conversation,
      () => {
        toast.errorToast('Nie udało się wysłać wiadomości');
        // FIXME remove this later
        return defaultConversation;
      },
    );

    return result;
  },
};
