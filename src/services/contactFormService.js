import config from '@/../config';
import requestSender from '@/utilities/requestSender';

export default {
  sendMail(formData) {
    const formDataEncoded = Object.keys(formData).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(formData[k])}`).join('&');

    return requestSender
      .sendPostRequestWithoutAuthorization(
        config.mailScriptUrl,
        { formDataEncoded },
        'application/x-www-form-urlencoded',
      );
  },
};
