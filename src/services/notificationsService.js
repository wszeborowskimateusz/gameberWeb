import config from '@/../config';
import requestSender from '@/utilities/requestSender';

export default {
  getAllNotifications() {
    const url = `${config.apiUrl}/notifications`;
    return requestSender.sendGetRequest(url);
  },
  markNoificationAsRead(notificationId) {
    const url = `${config.apiUrl}/notifications/mark-as-read`;
    return requestSender.sendPostRequest(url, { notificationId });
  },
  removeNotification(notificationId) {
    const url = `${config.apiUrl}/notifications/remove`;
    return requestSender.sendPostRequest(url, { notificationId });
  },
};
