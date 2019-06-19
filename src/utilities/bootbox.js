const bootbox = require('bootbox');

export default {
  alert(message) {
    bootbox.alert({
      message,
      backdrop: true,
      centerVertical: true,
    });
  },
  correctAnswerAlert() {
    bootbox.alert({
      message: 'Tak jest! To jest prawidłowa odpowiedź!<img src="https://img.icons8.com/color/48/000000/fire-element.png">',
      backdrop: true,
      centerVertical: true,
    });
  },
  incorrectAnswerAlert() {
    bootbox.alert({
      message: 'Niestety nie jest to prawidłowa odpowiedź <img src="https://img.icons8.com/color/48/000000/sad.png">',
      backdrop: true,
      centerVertical: true,
    });
  },
};
