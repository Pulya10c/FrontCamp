class BaseView {
  createElement = (tag, className) => {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    return element;
  };

  getElement = selector => {
    const element = document.querySelector(selector);
    return element;
  };

  createObserver = handler => {
    const options = { threshold: 0.6 };

    return new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        handler();
      }
    }, options);
  };
}

export default BaseView;
