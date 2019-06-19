import tippy from 'tippy.js';

export default {
  addTooltip(itemSelector, content) {
    tippy(itemSelector, {
      content,
      placement: 'right',
      arrow: true,
      animation: 'shift-away',
      theme: 'google',
      interactive: true,
    });
  },
};
