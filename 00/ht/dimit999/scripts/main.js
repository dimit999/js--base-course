"use strict";

let name;
let age;

do {
    name = prompt("What is your name?");
  } while (name == '' || name == null);

do {
    age = prompt("How old are you?");
} while (age == '' || age == null);

if (age < 18) {
    alert(`Hello, ${name}. How are your ${age}?`)
} else {
    alert(`Hello, ${name}. How ${age} years have passed?`)
}