import Building from "./500-building";

export default class SkyHighBuilding extends Building{
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  evacuationWarningMessage() { return `Evacuate slowly the ${this._floors} floors`; }

  get floors() { return this._floors; }
  set floors(floors) {
    if (typeof floors === 'number') { this._floors = floors; }
    else { throw new TypeError("floors must be a number"); }
  }
}

