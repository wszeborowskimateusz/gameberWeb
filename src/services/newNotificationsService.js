// This service is responsible for getting information about
// new notifications such as ammount of unread notificatios
// Or clashes that we must play

import config from '@/../config';
import requestSender from '@/utilities/requestSender';

export default {
  getNewNotificationsCounts() {
    const url = `${config.apiUrl}/users/new-notifications`;
    return requestSender.sendGetRequest(url);
  },
};
