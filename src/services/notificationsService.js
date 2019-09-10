import config from '@/../config';
import requestSender from '@/utilities/requestSender';

export default {
  getAllNotifications(token) {
    const url = `${config.apiUrl}/notifications`;
    return requestSender.sendGetRequest(token, url);
  },
  markNoificationAsRead(token, notificationId) {
    const url = `${config.apiUrl}/notifications/mark-as-read`;
    return requestSender.sendPostRequest(url, { notificationId }, token);
  },
  removeNotification(token, notificationId) {
    const url = `${config.apiUrl}/notifications/remove`;
    return requestSender.sendPostRequest(url, { notificationId }, token);
  },
};
