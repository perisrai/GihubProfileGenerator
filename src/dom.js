'use strict';

export class Dom {
  constructor(id) {
    this.el = document.getElementById(id);
  }

  set(el) {
    this.el = el;

    return this;
  }

  display() {
    this.el.style.display = 'block';

    return this;
  }

  hide() {
    this.el.style.display = 'none';

    return this;
  }

  success() {
    this.el.style.color = 'green';
    this.display();

    return this;
  }

  fail() {
    this.el.style.color = 'red';
    this.display();

    return this;
  }

  value(val) {
    this.el.value = val;

    return this;
  }

  text(text) {
    this.el.innerHTML = text;

    return this;
  }

  disable() {
    this.el.disabled = true;

    return this;
  }

  enable() {
    this.el.disabled = false;

    return this;
  }

  handleChange(cb) {
    if (this.el) {
      this.el.addEventListener('change', cb);
    }

    return this;
  }

  handleKeyUp(cb) {
    if (this.el) {
      this.el.addEventListener('keyup', cb);
    }

    return this;
  }

  handleClick(cb) {
    if (this.el) {
      this.el.addEventListener('click', cb);
    }

    return this;
  }

  handleSubmit(cb) {
    if (this.el) {
      this.el.addEventListener('submit', cb);
    }

    return this;
  }

  toggleClass(className) {
    this.el.classList.toggle(className);

    return this;
  }

  addClass(className) {
    if (Array.isArray(className)) {
      return className.forEach((classValue) => this.el.classList.add(classValue));
    }

    this.el.classList.add(className);

    return this;
  }

  removeClass(className) {
    if (Array.isArray(className)) {
      return className.forEach((classValue) => this.el.classList.remove(classValue));
    }

    this.el.classList.remove(className);

    return this;
  }

  html(text) {
    this.el.innerHTML = text;

    return this;
  }

  link(link) {
    this.el.setAttribute('href', link);

    return this;
  }
}

const node = (id) => {
  return new Dom(id);
};

export default node;
