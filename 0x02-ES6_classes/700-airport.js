export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get [Symbol.toStringTag]() { return this._code; }

  get name() { return this._name; }
  set name(name) {
    if (typeof name === 'string') { this._name = name; }
    else { throw new TypeError("name must be a string"); }
  }

  get code() { return this._code; }
  set code(code) {
    if (typeof code === 'string') { this._code = code; }
    else { throw new TypeError("code must be a string"); }
  }
}

