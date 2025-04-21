import Pricing from './400-pricing.js';
import Currency from './300-currency.js';

const p = new Pricing(100, new Currency("EUR", "Euro"))
console.log(p);
console.log(p.displayFullPrice());
console.log(p.convertPrice(800, 0.5));

