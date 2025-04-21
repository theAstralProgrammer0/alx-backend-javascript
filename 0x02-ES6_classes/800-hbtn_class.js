export default class ALXClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }
  
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') { return this._size; }
    if (hint === 'string') { return this._location; }
    return this;
  }

  get size() { return this._size; }
  set size(size) {
    if (typeof size === 'number') { this._size = size; }
    else { throw new Error; }
  }

  get location() { return this._location; }
  set location(location) {
    if (typeof location === 'string') { this._location = location; }
    else { throw new Error; }
  }
}

