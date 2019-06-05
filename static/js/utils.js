const e = selector => document.querySelector(selector);

const bind = (selector, eventName, callback) => {
  let element = e(selector);
  element.addEventListener(eventName, callback);
};
