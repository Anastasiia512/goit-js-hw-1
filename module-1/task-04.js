"use strict";
const credits = 23580;
const pricePerDroid = 3000;
const userChoice = prompt("Введите количество дроидов!");

if (userChoice === null) {
  console.log("Отменено пользователем!");
} else {
  let totalPrice = userChoice * pricePerDroid;

  if (totalPrice <= credits) {
    console.log(
      `Вы купили ${userChoice} дроидов, на счету осталось ${credits -
        totalPrice} кредитов.`
    );
  } else {
    console.log("Недостаточно средств на счету!");
  }
}
