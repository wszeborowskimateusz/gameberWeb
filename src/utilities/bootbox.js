import imagesGetter from '@/utilities/imagesGetter';

const bootbox = require('bootbox');

export default {
  alert(message) {
    bootbox.alert({
      message,
      backdrop: true,
      centerVertical: true,
      className: 'modal-open',
    });
  },
  correctAnswerAlert() {
    bootbox.alert({
      message: `Tak jest! To jest prawidłowa odpowiedź! 
        <img src="${imagesGetter.getImgUrl('bootbox/fire.png')}">`,
      backdrop: true,
      centerVertical: true,
      className: 'modal-open',
    });
  },
  incorrectAnswerAlert() {
    bootbox.alert({
      message: `Niestety nie jest to prawidłowa odpowiedź 
        <img src="${imagesGetter.getImgUrl('bootbox/sad.png')}">`,
      backdrop: true,
      centerVertical: true,
      className: 'modal-open',
    });
  },
  incorrectAnswerPreviousleSolvedAlert() {
    bootbox.alert({
      message: `Niestety nie jest to prawidłowa odpowiedź 
        <img src="${imagesGetter.getImgUrl('bootbox/sad.png')}">
        To zadanie zostało jednak przez ciebie rozwiązane wcześniej także możesz przejść dalej.
        <img src="${imagesGetter.getImgUrl('bootbox/fire.png')}">`,
      backdrop: true,
      centerVertical: true,
      className: 'modal-open',
    });
  },
  confirmationDialog(message, callback) {
    bootbox.confirm({
      message,
      callback,
      centerVertical: true,
      className: 'modal-open',
    });
  },
};
