import config from '@/../config';
import requestSender from '@/utilities/requestSender';
import toast from '@/utilities/toasts';

export default {
  async getMessages(userId, limit, offset) {
    const url = `${config.apiUrl}/messages/${userId}?limit=${limit}&offset=${offset}`;
    const result = await requestSender.sendGetRequest(url).then(
      results => results,
      () => {
        toast.errorToast('Nie udało się pobrać konwersacji');
        return null;
      },
    );

    return result;
  },
  sendMessage(userId, content) {
    const url = `${config.apiUrl}/messages/send/${userId}`;
    return requestSender.sendPostRequest(url, { content }).then(
      () => {},
      () => {
        toast.errorToast('Nie udało się wysłać wiadomości');
      },
    );
  },
};
