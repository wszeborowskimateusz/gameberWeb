import config from '@/../config';
import requestSender from '@/utilities/requestSender';
import toast from '@/utilities/toasts';

export default {
  async getMessages(token, userId, limit, offset) {
    const url = `${config.apiUrl}/messages/${userId}?limit=${limit}&offset=${offset}`;
    const result = await requestSender.sendGetRequest(token, url).then(
      results => results.conversation,
      () => {
        toast.errorToast('Nie udało się pobrać konwersacji');
        return null;
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
