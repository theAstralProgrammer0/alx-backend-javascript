import Currency from "./300-currency.js";

const dollar = new Currency('$', 'Dollars');
console.log(dollar.constructor);
console.log(dollar.displayFullCurrency());
