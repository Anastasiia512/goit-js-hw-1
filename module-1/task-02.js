"use strict";
const total = 100;
const ordered = 120;
const isEqual = ordered > total;

if (isEqual) {
  console.log("На складе недостаточно товаров!");
} else {
  console.log("Заказ оформлен, с вами свяжется менеджер!");
}
