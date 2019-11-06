import BaseView from '../BaseView';
import './stylesError.scss';

class Error extends BaseView {
  constructor() {
    super();
    if (Error.instance !== null) {
      return Error.instance;
    }

    this.errorPopup = this.createElement('p', 'error');
    this.closeIcon = this.createElement('span', 'close');
    this.closeIcon.textContent = 'х';
    this.closeIcon.addEventListener('click', () => {
      this.destroy();
    });

    Error.instance = this;
  }

  setMessage = message => {
    this.errorPopup.textContent = message;
  };

  insertInto = parent => {
    this.errorPopup.append(this.closeIcon);
    parent.append(this.errorPopup);
  };

  destroy = () => {
    this.errorPopup.remove();
  };

  static instance = null;
}

export default Error;
