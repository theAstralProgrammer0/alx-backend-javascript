import Currency from "./300-currency";

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() { return this._amount; }
  set amount(amount) {
    if (typeof amount === 'number') { this._amount = amount; }
    else { throw new TypeError("amount must be number"); }
  }

  get currency() { return this._currency; }
  set currency(currency) {
    if (currency instanceof Currency) { this._currency = currency; }
    else { throw new TypeError("currency must be an instance of Currency class"); }
  }

  displayFullPrice() { return `${this._amount} ${this._currency.name} ${this._currency.code}`; }

  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number' && typeof conversionRate === 'number') { return amount * conversionRate; }
    else { throw new TypeError("amount and conversionRate must be numbers"); }
  }
}

