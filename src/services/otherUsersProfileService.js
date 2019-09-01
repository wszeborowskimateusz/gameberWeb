import config from '@/../config';
import requestSender from '@/utilities/requestSender';
import toast from '@/utilities/toasts';

export default {
  async getUser(token, userId) {
    const url = `${config.apiUrl}/users/profile/${userId}`;
    const result = await requestSender.sendGetRequest(token, url).then(
      results => results.user,
      () => {
        toast.errorToast('Nie udało się pobrać informacji o użytkowniku');
        return null;
      },
    );

    return result;
  },
};
