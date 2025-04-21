export default class Building {
  constructor(sqft) {
//    console.log(this);
    this.sqft = sqft;

    if (new.target !== Building && !this.evacuationWarningMessage) {
      throw new Error("Class extending Building must override evacuationWarningMessage");
    }
  }

//  evacuationWarningMessage() {}

  get sqft() { return this._sqft; }
  set sqft(sqft) { 
    if (typeof sqft === 'number') { this._sqft = sqft; }
    else { throw new TypeError("sqft must be a number"); }
  }
}

