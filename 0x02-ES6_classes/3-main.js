import Currency from "./3-currency.js";

const dollar = new Currency('$', 'Dollars');
console.log(dollar.constructor);
console.log(dollar.displayFullCurrency());
