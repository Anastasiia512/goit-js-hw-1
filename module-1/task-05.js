"use strict";
const userChoice = prompt("Укажите страну доставки!");
const chinaDelivPrice = 100;
const chileDelivPrice = 250;
const australiaDelivPrice = 170;
const indiaDelivPrice = 80;
const jamaicaDelivPrice = 120;

switch (userChoice.toLowerCase()) {
  case "china":
    console.log(
      `Доставка в ${userChoice} будет стоить ${chinaDelivPrice} кредитов!`
    );
    break;
  case "chile":
    console.log(
      `Доставка в ${userChoice} будет стоить ${chileDelivPrice} кредитов!`
    );
    break;
  case "australia":
    console.log(
      `Доставка в ${userChoice} будет стоить ${australiaDelivPrice} кредитов!`
    );
    break;
  case "india":
    console.log(
      `Доставка в ${userChoice} будет стоить ${indiaDelivPrice} кредитов!`
    );
    break;
  case "jamaica":
    console.log(
      `Доставка в ${userChoice} будет стоить ${jamaicaDelivPrice} кредитов!`
    );
    break;
  default:
    alert("В вашей стране доставка недоступна!");
}
