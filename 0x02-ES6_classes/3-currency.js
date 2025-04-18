class Currency {
  constructor(code, name) {
    this.name = name;
    this.code = code;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('code must be a string');
    }
    this._code = code;
  }
}

export default Currency;
